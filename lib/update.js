const antlr4 = require('antlr4');
const { evaluateCondition } = require('./condition');
const InputStream = antlr4.InputStream;
const CommonTokenStream = antlr4.CommonTokenStream;

const UpdateParser = require('../parser/update/updateParser')
  .updateParser;
const UpdateLexer = require('../parser/update/updateLexer')
  .updateLexer;
const UpdateVisitor = require('../parser/update/updateVisitor')
  .updateVisitor;

class EvalVisitor extends UpdateVisitor {
  constructor(params, doc) {
    super();
    this.params = params;
    this.doc = doc;
    if (doc) {
      const str = JSON.stringify(doc);
      this.updated = JSON.parse(str);
    } else {
      this.updated = Object.keys(params.Key)
        .reduce((obj, key) => {
          obj[key] = doc[key];
          return obj;
        }, {});
    }
  }

  getTokenText(ctx, token) {
    const str = ctx.start.getInputStream().strdata;
    const start = token.start;
    const stop = token.stop;
    return str.substring(start, stop + 1);
  }

  getDocValue(attr) {
    // TODO implement path expressions
    return this.doc[attr];
  }

  getExprAttrName(key) {
    return this.params.ExpressionAttributeNames[
      key
    ];
  }

  getAttrName(ctx, operand) {
    const attr = this.getTokenText(ctx, operand);
    let name = attr;
    if (attr.substring(0, 1) === '#') {
      name = this.getExprAttrName(attr);
      if (!name) {
        throw new Error(`Undefined Attribute Name ${attr}`);
      }
    }
    return name;
  }

  getExprAttrValue(key) {
    return this.params.ExpressionAttributeValues[
      key
    ];
  }

  getAttrValue(ctx, operand) {
    const key = this.getTokenText(ctx, operand);
    let val;
    if (key.substring(0, 1) === ':') {
      val = this.getExprAttrValue(key);
      if (typeof val === 'undefined') {
        throw new Error(`Undefined Attribute Value ${key}`);
      }
    } else {
      // TODO there might be other literals
      val = Number(key);
    }
    return val;
  }

  getParamValue(key) {
    return this.params[key];
  }

  visitIncSetValue(ctx) {
    const leftVal = this.visit(ctx.leftVal);
    const rightVal = this.visit(ctx.rightVal);
    return Number(leftVal) + Number(rightVal);
  }

  visitDecSetValue(ctx) {
    const leftVal = this.visit(ctx.leftVal);
    const rightVal = this.visit(ctx.rightVal);
    return Number(leftVal) - Number(rightVal);
  }

  visitIneSetFunc(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const docVal = this.getDocValue(name);
    if (typeof docVal !== 'undefined') {
      return docVal;
    } else {
      return this.getAttrValue(ctx, ctx.val);
    }
  }

  visitLaSetFunc(/*ctx*/) {
    // TODO parse list1 and list2
    return [];
  }

  visitValSetValue(ctx) {
    // TODO implement set to doc path
    return this.getAttrValue(ctx, ctx.op);
  }

  visitSetAction(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    this.updated[name] = this.visit(ctx.result);
    return this.updated;
  }

  visitRemoveAction(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    delete this.updated[name];
    return this.updated;
  }

  visitAddAction(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const docVal = this.getDocValue(name);
    const paramVal = this.getAttrValue(ctx, ctx.value);
    const valueArr = (docVal.values || []).concat(
      paramVal.values
    );
    this.updated[name] = {
      values: Array.from(new Set(
        valueArr
      ))
    };
    return this.updated;
  }

  visitDeleteAction(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const docVal = this.getDocValue(name);
    const paramVal = this.getAttrValue(ctx, ctx.value);
    const docSet = new Set(docVal.values);
    const paramSet = new Set(paramVal.values);
    const values = [...docSet].filter(v => {
      return !paramSet.has(v);
    });
    this.updated[name] = { values };
    return this.updated;
  }
}

exports.evaluateUpdate = (params, doc) => {
  const condExpr = params.ConditionExpression;
  if (condExpr) {
    if (!evaluateCondition(condExpr, params, doc)) {
      throw new Error('Condition expression failed.');
    }
  }
  const expr = params.UpdateExpression;
  const inputStream = new InputStream(expr);
  const lexer = new UpdateLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new UpdateParser(tokenStream);
  const tree = parser.update();
  const visitor = new EvalVisitor(params, doc);
  visitor.visit(tree);
  return visitor.updated;
};
