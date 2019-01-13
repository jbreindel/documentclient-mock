// Generated from condition.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by conditionParser.
function conditionListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

conditionListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
conditionListener.prototype.constructor = conditionListener;

// Enter a parse tree produced by conditionParser#compCond.
conditionListener.prototype.enterCompCond = function(ctx) {
};

// Exit a parse tree produced by conditionParser#compCond.
conditionListener.prototype.exitCompCond = function(ctx) {
};


// Enter a parse tree produced by conditionParser#betweenCond.
conditionListener.prototype.enterBetweenCond = function(ctx) {
};

// Exit a parse tree produced by conditionParser#betweenCond.
conditionListener.prototype.exitBetweenCond = function(ctx) {
};


// Enter a parse tree produced by conditionParser#parenCond.
conditionListener.prototype.enterParenCond = function(ctx) {
};

// Exit a parse tree produced by conditionParser#parenCond.
conditionListener.prototype.exitParenCond = function(ctx) {
};


// Enter a parse tree produced by conditionParser#bitCond.
conditionListener.prototype.enterBitCond = function(ctx) {
};

// Exit a parse tree produced by conditionParser#bitCond.
conditionListener.prototype.exitBitCond = function(ctx) {
};


// Enter a parse tree produced by conditionParser#funcCond.
conditionListener.prototype.enterFuncCond = function(ctx) {
};

// Exit a parse tree produced by conditionParser#funcCond.
conditionListener.prototype.exitFuncCond = function(ctx) {
};


// Enter a parse tree produced by conditionParser#notCond.
conditionListener.prototype.enterNotCond = function(ctx) {
};

// Exit a parse tree produced by conditionParser#notCond.
conditionListener.prototype.exitNotCond = function(ctx) {
};


// Enter a parse tree produced by conditionParser#setExpr.
conditionListener.prototype.enterSetExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#setExpr.
conditionListener.prototype.exitSetExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#removeExpr.
conditionListener.prototype.enterRemoveExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#removeExpr.
conditionListener.prototype.exitRemoveExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#addExpr.
conditionListener.prototype.enterAddExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#addExpr.
conditionListener.prototype.exitAddExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#deleteExpr.
conditionListener.prototype.enterDeleteExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#deleteExpr.
conditionListener.prototype.exitDeleteExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#setActionExpr.
conditionListener.prototype.enterSetActionExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#setActionExpr.
conditionListener.prototype.exitSetActionExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#removeActionExpr.
conditionListener.prototype.enterRemoveActionExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#removeActionExpr.
conditionListener.prototype.exitRemoveActionExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#addActionExpr.
conditionListener.prototype.enterAddActionExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#addActionExpr.
conditionListener.prototype.exitAddActionExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#deleteActionExpr.
conditionListener.prototype.enterDeleteActionExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#deleteActionExpr.
conditionListener.prototype.exitDeleteActionExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#valSetValueExpr.
conditionListener.prototype.enterValSetValueExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#valSetValueExpr.
conditionListener.prototype.exitValSetValueExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#decSetValueExpr.
conditionListener.prototype.enterDecSetValueExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#decSetValueExpr.
conditionListener.prototype.exitDecSetValueExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#incSetValueExpr.
conditionListener.prototype.enterIncSetValueExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#incSetValueExpr.
conditionListener.prototype.exitIncSetValueExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#setFuncSetValueExpr.
conditionListener.prototype.enterSetFuncSetValueExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#setFuncSetValueExpr.
conditionListener.prototype.exitSetFuncSetValueExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#ineSetFuncExpr.
conditionListener.prototype.enterIneSetFuncExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#ineSetFuncExpr.
conditionListener.prototype.exitIneSetFuncExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#laSetFuncExpr.
conditionListener.prototype.enterLaSetFuncExpr = function(ctx) {
};

// Exit a parse tree produced by conditionParser#laSetFuncExpr.
conditionListener.prototype.exitLaSetFuncExpr = function(ctx) {
};


// Enter a parse tree produced by conditionParser#comparator.
conditionListener.prototype.enterComparator = function(ctx) {
};

// Exit a parse tree produced by conditionParser#comparator.
conditionListener.prototype.exitComparator = function(ctx) {
};


// Enter a parse tree produced by conditionParser#bitwise.
conditionListener.prototype.enterBitwise = function(ctx) {
};

// Exit a parse tree produced by conditionParser#bitwise.
conditionListener.prototype.exitBitwise = function(ctx) {
};


// Enter a parse tree produced by conditionParser#attrExistsCondFunc.
conditionListener.prototype.enterAttrExistsCondFunc = function(ctx) {
};

// Exit a parse tree produced by conditionParser#attrExistsCondFunc.
conditionListener.prototype.exitAttrExistsCondFunc = function(ctx) {
};


// Enter a parse tree produced by conditionParser#attrNotExistsCondFunc.
conditionListener.prototype.enterAttrNotExistsCondFunc = function(ctx) {
};

// Exit a parse tree produced by conditionParser#attrNotExistsCondFunc.
conditionListener.prototype.exitAttrNotExistsCondFunc = function(ctx) {
};


// Enter a parse tree produced by conditionParser#attrTypeCondFunc.
conditionListener.prototype.enterAttrTypeCondFunc = function(ctx) {
};

// Exit a parse tree produced by conditionParser#attrTypeCondFunc.
conditionListener.prototype.exitAttrTypeCondFunc = function(ctx) {
};


// Enter a parse tree produced by conditionParser#beginsWithCondFunc.
conditionListener.prototype.enterBeginsWithCondFunc = function(ctx) {
};

// Exit a parse tree produced by conditionParser#beginsWithCondFunc.
conditionListener.prototype.exitBeginsWithCondFunc = function(ctx) {
};


// Enter a parse tree produced by conditionParser#containsCondFunc.
conditionListener.prototype.enterContainsCondFunc = function(ctx) {
};

// Exit a parse tree produced by conditionParser#containsCondFunc.
conditionListener.prototype.exitContainsCondFunc = function(ctx) {
};


// Enter a parse tree produced by conditionParser#sizeCondFunc.
conditionListener.prototype.enterSizeCondFunc = function(ctx) {
};

// Exit a parse tree produced by conditionParser#sizeCondFunc.
conditionListener.prototype.exitSizeCondFunc = function(ctx) {
};



exports.conditionListener = conditionListener;