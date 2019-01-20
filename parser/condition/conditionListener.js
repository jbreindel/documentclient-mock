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