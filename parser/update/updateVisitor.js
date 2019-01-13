// Generated from update.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by updateParser.

function updateVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

updateVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
updateVisitor.prototype.constructor = updateVisitor;

// Visit a parse tree produced by updateParser#setUpdate.
updateVisitor.prototype.visitSetUpdate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#removeUpdate.
updateVisitor.prototype.visitRemoveUpdate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#addUpdate.
updateVisitor.prototype.visitAddUpdate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#deleteUpdate.
updateVisitor.prototype.visitDeleteUpdate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#setAction.
updateVisitor.prototype.visitSetAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#removeAction.
updateVisitor.prototype.visitRemoveAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#addAction.
updateVisitor.prototype.visitAddAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#deleteAction.
updateVisitor.prototype.visitDeleteAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#setFuncSetValue.
updateVisitor.prototype.visitSetFuncSetValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#incSetValue.
updateVisitor.prototype.visitIncSetValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#decSetValue.
updateVisitor.prototype.visitDecSetValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#valSetValue.
updateVisitor.prototype.visitValSetValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#ineSetFunc.
updateVisitor.prototype.visitIneSetFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by updateParser#laSetFunc.
updateVisitor.prototype.visitLaSetFunc = function(ctx) {
  return this.visitChildren(ctx);
};



exports.updateVisitor = updateVisitor;