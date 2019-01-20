// Generated from condition.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by conditionParser.

function conditionVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

conditionVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
conditionVisitor.prototype.constructor = conditionVisitor;

// Visit a parse tree produced by conditionParser#compCond.
conditionVisitor.prototype.visitCompCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#betweenCond.
conditionVisitor.prototype.visitBetweenCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#parenCond.
conditionVisitor.prototype.visitParenCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#bitCond.
conditionVisitor.prototype.visitBitCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#funcCond.
conditionVisitor.prototype.visitFuncCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#notCond.
conditionVisitor.prototype.visitNotCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#comparator.
conditionVisitor.prototype.visitComparator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#bitwise.
conditionVisitor.prototype.visitBitwise = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#attrExistsCondFunc.
conditionVisitor.prototype.visitAttrExistsCondFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#attrNotExistsCondFunc.
conditionVisitor.prototype.visitAttrNotExistsCondFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#attrTypeCondFunc.
conditionVisitor.prototype.visitAttrTypeCondFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#beginsWithCondFunc.
conditionVisitor.prototype.visitBeginsWithCondFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#containsCondFunc.
conditionVisitor.prototype.visitContainsCondFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#sizeCondFunc.
conditionVisitor.prototype.visitSizeCondFunc = function(ctx) {
  return this.visitChildren(ctx);
};



exports.conditionVisitor = conditionVisitor;