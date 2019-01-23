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
    let str;
    if (doc) {
      str = JSON.stringify(doc);
    } else {
      str = JSON.stringify(params.Key);
    }
    this.updated = JSON.parse(str);
  }

  getTokenText(ctx, token) {
    const str = ctx.start.getInputStream().strdata;
    const start = token.start;
    const stop = token.stop;
    return str.substring(start, stop + 1);
  }

  getDocValue(attr) {
    // TODO implement path expressions
    return this.doc && this.doc[attr];
  }

  getExprAttrName(key) {
    return this.params.ExpressionAttributeNames[
      key
    ];
  }

  getAttrName(ctx, operand) {
    const attr = this.getTokenText(ctx, operand);
    let paths = attr.split('.');
    const resolved = [];
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      if (!path) {
        throw new Error(`Bad path expression ${attr}`);
      }
      const name = path.match(/(#[^\[\]]+)/g);
      if (name) {
        const exprAttr = this.getExprAttrName(
          name[0]
        );
        if (!exprAttr) {
          throw new Error('Undefined' +
            `Attribute Name ${name[0]}`);
        }
        resolved.push(exprAttr);
      } else {
        resolved.push(path);
      }
    }
    return resolved.join('.');
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

  setUpdatedAtPath(name, setVal) {
    // FIXME the below logic kinda sucks
    const paths = name.split('.');
    let curr = this.updated;
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const regEx = /\[(\d+)\]/igm;
      const matches = path.match(regEx);
      if (matches) {
        const attr = path.replace(regEx, '');
        curr = curr[attr];
        const idxs = matches.map(match => {
          const stripped = match
            .replace(/\[/g, '')
            .replace(/\]/g, '');
          return Number(stripped);
        });
        for (let j = 0; j < idxs.length - 1; j++) {
          // TODO check for NaN
          const idx = idxs[j];
          curr = curr[idx];
        }
        const idx = idxs[idxs.length - 1];
        const nextPath = paths[i + 1];
        if (!nextPath) {
          curr[idx] = setVal;
          return this.updated;
        } else {
          curr = curr[idx];
        }
      } else {
        const nextPath = paths[i + 1];
        if (!nextPath) {
          curr[path] = setVal;
          return this.updated;
        } else {
          curr = curr[path];
        }
      }
    }
  }

  visitSetFuncSetValue(ctx) {
    return this.visit(ctx.func);
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
    const setVal = this.visit(ctx.result);
    return this.setUpdatedAtPath(name, setVal);
  }

  visitRemoveAction(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    // TODO support pathing
    delete this.updated[name];
    return this.updated;
  }

  visitAddAction(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const docVal = this.getDocValue(name);
    const paramVal = this.getAttrValue(ctx, ctx.value);
    let valueArr;
    if (docVal && docVal.values) {
      valueArr = docVal.values.concat(
        paramVal.values
      );
    } else {
      valueArr = paramVal.values;
    }
    return this.setUpdatedAtPath(name, {
      values: Array.from(new Set(
        valueArr
      ))
    });
  }

  visitDeleteAction(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const docVal = this.getDocValue(name);
    const paramVal = this.getAttrValue(ctx, ctx.value);
    const docSet = docVal ?
      new Set(docVal.values) : new Set();
    const paramSet = new Set(paramVal.values);
    const values = [...docSet].filter(v => {
      return !paramSet.has(v);
    });
    if (values.length > 0) {
      return this.setUpdatedAtPath(name, {
        values
      });
    } else {
      // TODO support pathing
      delete this.updated[name];
      return this.updated;
    }
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
