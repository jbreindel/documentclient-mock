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


// Visit a parse tree produced by conditionParser#setExpr.
conditionVisitor.prototype.visitSetExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#removeExpr.
conditionVisitor.prototype.visitRemoveExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#addExpr.
conditionVisitor.prototype.visitAddExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#deleteExpr.
conditionVisitor.prototype.visitDeleteExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#setActionExpr.
conditionVisitor.prototype.visitSetActionExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#removeActionExpr.
conditionVisitor.prototype.visitRemoveActionExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#addActionExpr.
conditionVisitor.prototype.visitAddActionExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#deleteActionExpr.
conditionVisitor.prototype.visitDeleteActionExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#valSetValueExpr.
conditionVisitor.prototype.visitValSetValueExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#decSetValueExpr.
conditionVisitor.prototype.visitDecSetValueExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#incSetValueExpr.
conditionVisitor.prototype.visitIncSetValueExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#setFuncSetValueExpr.
conditionVisitor.prototype.visitSetFuncSetValueExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#ineSetFuncExpr.
conditionVisitor.prototype.visitIneSetFuncExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by conditionParser#laSetFuncExpr.
conditionVisitor.prototype.visitLaSetFuncExpr = function(ctx) {
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