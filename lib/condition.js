const antlr4 = require('antlr4');
const InputStream = antlr4.InputStream;
const CommonTokenStream = antlr4.CommonTokenStream;

const ConditionParser = require('../parser/condition/conditionParser')
  .conditionParser;
const ConditionLexer = require('../parser/condition/conditionLexer')
  .conditionLexer;
const ConditionVisitor = require('../parser/condition/conditionVisitor')
  .conditionVisitor;

class EvalVisitor extends ConditionVisitor {
  constructor(params, doc) {
    super();
    this.params = params;
    this.doc = doc;
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

  visitParenCond(ctx) {
    return super.visit(ctx.condition());
  }

  visitCompCond(ctx) {
    const name = this.getAttrName(ctx, ctx.leftOp);
    const leftVal = this.getDocValue(name);
    const rightVal = this.getAttrValue(ctx, ctx.rightOp);
    if (ctx.comp.EQ()) {
      return leftVal === rightVal;
    } else if (ctx.comp.LE()) {
      return leftVal <= rightVal;
    } else if (ctx.comp.GE()) {
      return leftVal >= rightVal;
    } else if (ctx.comp.LT()) {
      return leftVal < rightVal;
    } else if (ctx.comp.GT()) {
      return leftVal > rightVal;
    } else if (ctx.comp.NE()) {
      return leftVal !== rightVal;
    }
  }

  visitNotCond(ctx) {
    return !this.visit(ctx.condition());
  }

  visitBitCond(ctx) {
    const leftBool = !!this.visit(ctx.leftCond);
    const rightBool = !!this.visit(ctx.rightCond);
    if (ctx.bit.AND()) {
      return leftBool && rightBool;
    } else if (ctx.bit.OR()) {
      return leftBool || rightBool;
    }
  }

  visitBetweenCond(ctx) {
    // TODO implement dates
    const name = this.getAttrName(ctx, ctx.op);
    const val = this.getDocValue(name);
    const lb = this.getAttrValue(ctx, ctx.lb);
    const ub = this.getAttrValue(ctx, ctx.ub);
    return lb <= val && val <= ub;
  }

  visitFuncCond(ctx) {
    return super.visit(ctx.condfunc());
  }

  visitAttrExistsCondFunc(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const val = this.getDocValue(name);
    // TODO does dynamo use null as attr exists?
    return typeof val !== 'undefined'
      && val !== null;
  }

  visitAttrNotExistsCondFunc(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const key = Object.keys(this.doc).find(k => {
      return k === name;
    });
    return !key;
  }

  visitAttrTypeCondFunc(/*ctx*/) {
    // TODO implement
    return true;
  }

  visitBeginsWithCondFunc(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const docVal = this.getDocValue(name);
    if (typeof docVal !== 'string') {
      // TODO potentially fail here
      return false;
    } else {
      const exprVal = this.getAttrValue(ctx, ctx.op);
      return docVal.indexOf(exprVal) === 0;
    }
  }

  visitContainsCondFunc(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const docVal = this.getDocValue(name);
    if (typeof docVal !== 'string') {
      // TODO implement set semantics
      return false;
    } else {
      const exprVal = this.getAttrValue(ctx, ctx.op);
      return docVal.indexOf(exprVal) !== -1;
    }
  }

  visitSizeCondFunc(ctx) {
    const name = this.getAttrName(ctx, ctx.path);
    const val = this.getDocValue(name);
    return val.length;
  }
}

const evaluateCondition = (expr, params, doc) => {
  const inputStream = new InputStream(expr);
  const lexer = new ConditionLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ConditionParser(tokenStream);
  const tree = parser.condition();
  const listener = new EvalVisitor(params, doc);
  return listener.visit(tree);
};

exports.evaluateCondition = evaluateCondition;

exports.evaluateScan = (params, doc) => {
  const expr = params.FilterExpression;
  if (!expr) {
    return true;
  }
  return evaluateCondition(expr, params, doc);
};

exports.evaluateQuery = (params, doc) => {
  const keyExpr = params.KeyConditionExpression;
  if (!keyExpr) {
    throw new Error('Missing key condition expression.');
  }
  if (!evaluateCondition(keyExpr, params, doc)) {
    return false;
  }
  const filterExpr = params.FilterExpression;
  if (!filterExpr) {
    return true;
  }
  return evaluateCondition(filterExpr, params, doc);
};
