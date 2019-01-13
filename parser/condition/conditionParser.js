// Generated from condition.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var conditionListener = require('./conditionListener').conditionListener;
var conditionVisitor = require('./conditionVisitor').conditionVisitor;

var grammarFileName = "condition.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001f\u00a5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "*\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "0\n\u0002\f\u0002\u000e\u00023\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0006\u00039\n\u0003\r\u0003\u000e\u0003:\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003A\n\u0003\r\u0003\u000e",
    "\u0003B\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003",
    "I\n\u0003\r\u0003\u000e\u0003J\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0006\u0003Q\n\u0003\r\u0003\u000e\u0003R\u0005\u0003U\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0005\bf\n\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0007\bn\n\b\f\b\u000e\bq\u000b\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u007f\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\f\u00a3\n\f\u0003\f\u0002\u0004\u0002",
    "\u000e\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002",
    "\u0004\u0003\u0002\u000b\u0010\u0003\u0002\u0007\b\u0002\u00ae\u0002",
    ")\u0003\u0002\u0002\u0002\u0004T\u0003\u0002\u0002\u0002\u0006V\u0003",
    "\u0002\u0002\u0002\bZ\u0003\u0002\u0002\u0002\n\\\u0003\u0002\u0002",
    "\u0002\f_\u0003\u0002\u0002\u0002\u000ee\u0003\u0002\u0002\u0002\u0010",
    "~\u0003\u0002\u0002\u0002\u0012\u0080\u0003\u0002\u0002\u0002\u0014",
    "\u0082\u0003\u0002\u0002\u0002\u0016\u00a2\u0003\u0002\u0002\u0002\u0018",
    "\u0019\b\u0002\u0001\u0002\u0019\u001a\u0007\u001e\u0002\u0002\u001a",
    "\u001b\u0005\u0012\n\u0002\u001b\u001c\u0007\u001e\u0002\u0002\u001c",
    "*\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u001e\u0002\u0002\u001e",
    "\u001f\u0007\n\u0002\u0002\u001f \u0007\u001e\u0002\u0002 !\u0007\u0007",
    "\u0002\u0002!*\u0007\u001e\u0002\u0002\"*\u0005\u0016\f\u0002#$\u0007",
    "\t\u0002\u0002$*\u0005\u0002\u0002\u0004%&\u0007\u0013\u0002\u0002&",
    "\'\u0005\u0002\u0002\u0002\'(\u0007\u0014\u0002\u0002(*\u0003\u0002",
    "\u0002\u0002)\u0018\u0003\u0002\u0002\u0002)\u001d\u0003\u0002\u0002",
    "\u0002)\"\u0003\u0002\u0002\u0002)#\u0003\u0002\u0002\u0002)%\u0003",
    "\u0002\u0002\u0002*1\u0003\u0002\u0002\u0002+,\f\u0005\u0002\u0002,",
    "-\u0005\u0014\u000b\u0002-.\u0005\u0002\u0002\u0006.0\u0003\u0002\u0002",
    "\u0002/+\u0003\u0002\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002",
    "\u0002\u000212\u0003\u0002\u0002\u00022\u0003\u0003\u0002\u0002\u0002",
    "31\u0003\u0002\u0002\u000245\u0007\u0003\u0002\u000258\u0005\u0006\u0004",
    "\u000267\u0007\u0015\u0002\u000279\u0005\u0006\u0004\u000286\u0003\u0002",
    "\u0002\u00029:\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003",
    "\u0002\u0002\u0002;U\u0003\u0002\u0002\u0002<=\u0007\u0004\u0002\u0002",
    "=@\u0005\b\u0005\u0002>?\u0007\u0015\u0002\u0002?A\u0005\b\u0005\u0002",
    "@>\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002",
    "\u0002BC\u0003\u0002\u0002\u0002CU\u0003\u0002\u0002\u0002DE\u0007\u0005",
    "\u0002\u0002EH\u0005\n\u0006\u0002FG\u0007\u0015\u0002\u0002GI\u0005",
    "\n\u0006\u0002HF\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002J",
    "H\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KU\u0003\u0002\u0002",
    "\u0002LM\u0007\u0006\u0002\u0002MP\u0005\f\u0007\u0002NO\u0007\u0015",
    "\u0002\u0002OQ\u0005\f\u0007\u0002PN\u0003\u0002\u0002\u0002QR\u0003",
    "\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002",
    "SU\u0003\u0002\u0002\u0002T4\u0003\u0002\u0002\u0002T<\u0003\u0002\u0002",
    "\u0002TD\u0003\u0002\u0002\u0002TL\u0003\u0002\u0002\u0002U\u0005\u0003",
    "\u0002\u0002\u0002VW\u0007\u001e\u0002\u0002WX\u0007\u000f\u0002\u0002",
    "XY\u0005\u000e\b\u0002Y\u0007\u0003\u0002\u0002\u0002Z[\u0007\u001e",
    "\u0002\u0002[\t\u0003\u0002\u0002\u0002\\]\u0007\u001e\u0002\u0002]",
    "^\u0007\u001e\u0002\u0002^\u000b\u0003\u0002\u0002\u0002_`\u0007\u001e",
    "\u0002\u0002`a\u0007\u001e\u0002\u0002a\r\u0003\u0002\u0002\u0002bc",
    "\b\b\u0001\u0002cf\u0005\u0010\t\u0002df\u0007\u001e\u0002\u0002eb\u0003",
    "\u0002\u0002\u0002ed\u0003\u0002\u0002\u0002fo\u0003\u0002\u0002\u0002",
    "gh\f\u0006\u0002\u0002hi\u0007\u0011\u0002\u0002in\u0005\u000e\b\u0007",
    "jk\f\u0005\u0002\u0002kl\u0007\u0012\u0002\u0002ln\u0005\u000e\b\u0006",
    "mg\u0003\u0002\u0002\u0002mj\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002",
    "\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002p\u000f\u0003",
    "\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rs\u0007\u001d\u0002\u0002",
    "st\u0007\u0013\u0002\u0002tu\u0007\u001e\u0002\u0002uv\u0007\u0015\u0002",
    "\u0002vw\u0007\u001e\u0002\u0002w\u007f\u0007\u0014\u0002\u0002xy\u0007",
    "\u001c\u0002\u0002yz\u0007\u0013\u0002\u0002z{\u0007\u001e\u0002\u0002",
    "{|\u0007\u0015\u0002\u0002|}\u0007\u001e\u0002\u0002}\u007f\u0007\u0014",
    "\u0002\u0002~r\u0003\u0002\u0002\u0002~x\u0003\u0002\u0002\u0002\u007f",
    "\u0011\u0003\u0002\u0002\u0002\u0080\u0081\t\u0002\u0002\u0002\u0081",
    "\u0013\u0003\u0002\u0002\u0002\u0082\u0083\t\u0003\u0002\u0002\u0083",
    "\u0015\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0016\u0002\u0002\u0085",
    "\u0086\u0007\u0013\u0002\u0002\u0086\u0087\u0007\u001e\u0002\u0002\u0087",
    "\u00a3\u0007\u0014\u0002\u0002\u0088\u0089\u0007\u0017\u0002\u0002\u0089",
    "\u008a\u0007\u0013\u0002\u0002\u008a\u008b\u0007\u001e\u0002\u0002\u008b",
    "\u00a3\u0007\u0014\u0002\u0002\u008c\u008d\u0007\u0018\u0002\u0002\u008d",
    "\u008e\u0007\u0013\u0002\u0002\u008e\u008f\u0007\u001e\u0002\u0002\u008f",
    "\u0090\u0007\u0015\u0002\u0002\u0090\u0091\u0007\u001e\u0002\u0002\u0091",
    "\u00a3\u0007\u0014\u0002\u0002\u0092\u0093\u0007\u0019\u0002\u0002\u0093",
    "\u0094\u0007\u0013\u0002\u0002\u0094\u0095\u0007\u001e\u0002\u0002\u0095",
    "\u0096\u0007\u0015\u0002\u0002\u0096\u0097\u0007\u001e\u0002\u0002\u0097",
    "\u00a3\u0007\u0014\u0002\u0002\u0098\u0099\u0007\u001a\u0002\u0002\u0099",
    "\u009a\u0007\u0013\u0002\u0002\u009a\u009b\u0007\u001e\u0002\u0002\u009b",
    "\u009c\u0007\u0015\u0002\u0002\u009c\u009d\u0007\u001e\u0002\u0002\u009d",
    "\u00a3\u0007\u0014\u0002\u0002\u009e\u009f\u0007\u001b\u0002\u0002\u009f",
    "\u00a0\u0007\u0013\u0002\u0002\u00a0\u00a1\u0007\u001e\u0002\u0002\u00a1",
    "\u00a3\u0007\u0014\u0002\u0002\u00a2\u0084\u0003\u0002\u0002\u0002\u00a2",
    "\u0088\u0003\u0002\u0002\u0002\u00a2\u008c\u0003\u0002\u0002\u0002\u00a2",
    "\u0092\u0003\u0002\u0002\u0002\u00a2\u0098\u0003\u0002\u0002\u0002\u00a2",
    "\u009e\u0003\u0002\u0002\u0002\u00a3\u0017\u0003\u0002\u0002\u0002\u000e",
    ")1:BJRTemo~\u00a2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     "'>'", "'>='", "'<'", "'<='", "'='", "'<>'", "'+'", 
                     "'-'", "'('", "')'", "','" ];

var symbolicNames = [ null, "SET", "REMOVE", "ADD", "DELETE", "AND", "OR", 
                      "NOT", "BETWEEN", "GT", "GE", "LT", "LE", "EQ", "NE", 
                      "PLUS", "MINUS", "LPAREN", "RPAREN", "COMMA", "ATTR_EXIST", 
                      "ATTR_NOT_EXIST", "ATTR_TYPE", "BEGINS_WITH", "CONTAINS", 
                      "SIZE", "LIST_APPEND", "IF_NOT_EXISTS", "OPERAND", 
                      "WS" ];

var ruleNames =  [ "condition", "update", "setaction", "removeaction", "addaction", 
                   "deleteaction", "setvalue", "setfunc", "comparator", 
                   "bitwise", "condfunc" ];

function conditionParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

conditionParser.prototype = Object.create(antlr4.Parser.prototype);
conditionParser.prototype.constructor = conditionParser;

Object.defineProperty(conditionParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

conditionParser.EOF = antlr4.Token.EOF;
conditionParser.SET = 1;
conditionParser.REMOVE = 2;
conditionParser.ADD = 3;
conditionParser.DELETE = 4;
conditionParser.AND = 5;
conditionParser.OR = 6;
conditionParser.NOT = 7;
conditionParser.BETWEEN = 8;
conditionParser.GT = 9;
conditionParser.GE = 10;
conditionParser.LT = 11;
conditionParser.LE = 12;
conditionParser.EQ = 13;
conditionParser.NE = 14;
conditionParser.PLUS = 15;
conditionParser.MINUS = 16;
conditionParser.LPAREN = 17;
conditionParser.RPAREN = 18;
conditionParser.COMMA = 19;
conditionParser.ATTR_EXIST = 20;
conditionParser.ATTR_NOT_EXIST = 21;
conditionParser.ATTR_TYPE = 22;
conditionParser.BEGINS_WITH = 23;
conditionParser.CONTAINS = 24;
conditionParser.SIZE = 25;
conditionParser.LIST_APPEND = 26;
conditionParser.IF_NOT_EXISTS = 27;
conditionParser.OPERAND = 28;
conditionParser.WS = 29;

conditionParser.RULE_condition = 0;
conditionParser.RULE_update = 1;
conditionParser.RULE_setaction = 2;
conditionParser.RULE_removeaction = 3;
conditionParser.RULE_addaction = 4;
conditionParser.RULE_deleteaction = 5;
conditionParser.RULE_setvalue = 6;
conditionParser.RULE_setfunc = 7;
conditionParser.RULE_comparator = 8;
conditionParser.RULE_bitwise = 9;
conditionParser.RULE_condfunc = 10;

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;


 
ConditionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function CompCondContext(parser, ctx) {
	ConditionContext.call(this, parser);
    this.leftOp = null; // Token;
    this.comp = null; // ComparatorContext;
    this.rightOp = null; // Token;
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompCondContext.prototype = Object.create(ConditionContext.prototype);
CompCondContext.prototype.constructor = CompCondContext;

conditionParser.CompCondContext = CompCondContext;

CompCondContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.OPERAND);
    } else {
        return this.getToken(conditionParser.OPERAND, i);
    }
};


CompCondContext.prototype.comparator = function() {
    return this.getTypedRuleContext(ComparatorContext,0);
};
CompCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterCompCond(this);
	}
};

CompCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitCompCond(this);
	}
};

CompCondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitCompCond(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BetweenCondContext(parser, ctx) {
	ConditionContext.call(this, parser);
    this.op = null; // Token;
    this.lb = null; // Token;
    this.ub = null; // Token;
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BetweenCondContext.prototype = Object.create(ConditionContext.prototype);
BetweenCondContext.prototype.constructor = BetweenCondContext;

conditionParser.BetweenCondContext = BetweenCondContext;

BetweenCondContext.prototype.BETWEEN = function() {
    return this.getToken(conditionParser.BETWEEN, 0);
};

BetweenCondContext.prototype.AND = function() {
    return this.getToken(conditionParser.AND, 0);
};

BetweenCondContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.OPERAND);
    } else {
        return this.getToken(conditionParser.OPERAND, i);
    }
};

BetweenCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterBetweenCond(this);
	}
};

BetweenCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitBetweenCond(this);
	}
};

BetweenCondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitBetweenCond(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenCondContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenCondContext.prototype = Object.create(ConditionContext.prototype);
ParenCondContext.prototype.constructor = ParenCondContext;

conditionParser.ParenCondContext = ParenCondContext;

ParenCondContext.prototype.LPAREN = function() {
    return this.getToken(conditionParser.LPAREN, 0);
};

ParenCondContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ParenCondContext.prototype.RPAREN = function() {
    return this.getToken(conditionParser.RPAREN, 0);
};
ParenCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterParenCond(this);
	}
};

ParenCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitParenCond(this);
	}
};

ParenCondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitParenCond(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitCondContext(parser, ctx) {
	ConditionContext.call(this, parser);
    this.leftCond = null; // ConditionContext;
    this.bit = null; // BitwiseContext;
    this.rightCond = null; // ConditionContext;
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitCondContext.prototype = Object.create(ConditionContext.prototype);
BitCondContext.prototype.constructor = BitCondContext;

conditionParser.BitCondContext = BitCondContext;

BitCondContext.prototype.condition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionContext);
    } else {
        return this.getTypedRuleContext(ConditionContext,i);
    }
};

BitCondContext.prototype.bitwise = function() {
    return this.getTypedRuleContext(BitwiseContext,0);
};
BitCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterBitCond(this);
	}
};

BitCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitBitCond(this);
	}
};

BitCondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitBitCond(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncCondContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncCondContext.prototype = Object.create(ConditionContext.prototype);
FuncCondContext.prototype.constructor = FuncCondContext;

conditionParser.FuncCondContext = FuncCondContext;

FuncCondContext.prototype.condfunc = function() {
    return this.getTypedRuleContext(CondfuncContext,0);
};
FuncCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterFuncCond(this);
	}
};

FuncCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitFuncCond(this);
	}
};

FuncCondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitFuncCond(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotCondContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotCondContext.prototype = Object.create(ConditionContext.prototype);
NotCondContext.prototype.constructor = NotCondContext;

conditionParser.NotCondContext = NotCondContext;

NotCondContext.prototype.NOT = function() {
    return this.getToken(conditionParser.NOT, 0);
};

NotCondContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};
NotCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterNotCond(this);
	}
};

NotCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitNotCond(this);
	}
};

NotCondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitNotCond(this);
    } else {
        return visitor.visitChildren(this);
    }
};



conditionParser.prototype.condition = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ConditionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, conditionParser.RULE_condition, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new CompCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 23;
            localctx.leftOp = this.match(conditionParser.OPERAND);
            this.state = 24;
            localctx.comp = this.comparator();
            this.state = 25;
            localctx.rightOp = this.match(conditionParser.OPERAND);
            break;

        case 2:
            localctx = new BetweenCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 27;
            localctx.op = this.match(conditionParser.OPERAND);
            this.state = 28;
            this.match(conditionParser.BETWEEN);
            this.state = 29;
            localctx.lb = this.match(conditionParser.OPERAND);
            this.state = 30;
            this.match(conditionParser.AND);
            this.state = 31;
            localctx.ub = this.match(conditionParser.OPERAND);
            break;

        case 3:
            localctx = new FuncCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 32;
            this.condfunc();
            break;

        case 4:
            localctx = new NotCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 33;
            this.match(conditionParser.NOT);
            this.state = 34;
            this.condition(2);
            break;

        case 5:
            localctx = new ParenCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 35;
            this.match(conditionParser.LPAREN);
            this.state = 36;
            this.condition(0);
            this.state = 37;
            this.match(conditionParser.RPAREN);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 47;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new BitCondContext(this, new ConditionContext(this, _parentctx, _parentState));
                localctx.leftCond = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, conditionParser.RULE_condition);
                this.state = 41;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 42;
                localctx.bit = this.bitwise();
                this.state = 43;
                localctx.rightCond = this.condition(4); 
            }
            this.state = 49;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function UpdateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_update;
    return this;
}

UpdateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UpdateContext.prototype.constructor = UpdateContext;


 
UpdateContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AddExprContext(parser, ctx) {
	UpdateContext.call(this, parser);
    UpdateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExprContext.prototype = Object.create(UpdateContext.prototype);
AddExprContext.prototype.constructor = AddExprContext;

conditionParser.AddExprContext = AddExprContext;

AddExprContext.prototype.ADD = function() {
    return this.getToken(conditionParser.ADD, 0);
};

AddExprContext.prototype.addaction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddactionContext);
    } else {
        return this.getTypedRuleContext(AddactionContext,i);
    }
};

AddExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.COMMA);
    } else {
        return this.getToken(conditionParser.COMMA, i);
    }
};

AddExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterAddExpr(this);
	}
};

AddExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitAddExpr(this);
	}
};

AddExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitAddExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DeleteExprContext(parser, ctx) {
	UpdateContext.call(this, parser);
    UpdateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeleteExprContext.prototype = Object.create(UpdateContext.prototype);
DeleteExprContext.prototype.constructor = DeleteExprContext;

conditionParser.DeleteExprContext = DeleteExprContext;

DeleteExprContext.prototype.DELETE = function() {
    return this.getToken(conditionParser.DELETE, 0);
};

DeleteExprContext.prototype.deleteaction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeleteactionContext);
    } else {
        return this.getTypedRuleContext(DeleteactionContext,i);
    }
};

DeleteExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.COMMA);
    } else {
        return this.getToken(conditionParser.COMMA, i);
    }
};

DeleteExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterDeleteExpr(this);
	}
};

DeleteExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitDeleteExpr(this);
	}
};

DeleteExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitDeleteExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RemoveExprContext(parser, ctx) {
	UpdateContext.call(this, parser);
    UpdateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RemoveExprContext.prototype = Object.create(UpdateContext.prototype);
RemoveExprContext.prototype.constructor = RemoveExprContext;

conditionParser.RemoveExprContext = RemoveExprContext;

RemoveExprContext.prototype.REMOVE = function() {
    return this.getToken(conditionParser.REMOVE, 0);
};

RemoveExprContext.prototype.removeaction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RemoveactionContext);
    } else {
        return this.getTypedRuleContext(RemoveactionContext,i);
    }
};

RemoveExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.COMMA);
    } else {
        return this.getToken(conditionParser.COMMA, i);
    }
};

RemoveExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterRemoveExpr(this);
	}
};

RemoveExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitRemoveExpr(this);
	}
};

RemoveExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitRemoveExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SetExprContext(parser, ctx) {
	UpdateContext.call(this, parser);
    UpdateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetExprContext.prototype = Object.create(UpdateContext.prototype);
SetExprContext.prototype.constructor = SetExprContext;

conditionParser.SetExprContext = SetExprContext;

SetExprContext.prototype.SET = function() {
    return this.getToken(conditionParser.SET, 0);
};

SetExprContext.prototype.setaction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SetactionContext);
    } else {
        return this.getTypedRuleContext(SetactionContext,i);
    }
};

SetExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.COMMA);
    } else {
        return this.getToken(conditionParser.COMMA, i);
    }
};

SetExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterSetExpr(this);
	}
};

SetExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitSetExpr(this);
	}
};

SetExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitSetExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



conditionParser.UpdateContext = UpdateContext;

conditionParser.prototype.update = function() {

    var localctx = new UpdateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, conditionParser.RULE_update);
    var _la = 0; // Token type
    try {
        this.state = 82;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case conditionParser.SET:
            localctx = new SetExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.match(conditionParser.SET);
            this.state = 51;
            this.setaction();
            this.state = 54; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 52;
                this.match(conditionParser.COMMA);
                this.state = 53;
                this.setaction();
                this.state = 56; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===conditionParser.COMMA);
            break;
        case conditionParser.REMOVE:
            localctx = new RemoveExprContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.match(conditionParser.REMOVE);
            this.state = 59;
            this.removeaction();
            this.state = 62; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 60;
                this.match(conditionParser.COMMA);
                this.state = 61;
                this.removeaction();
                this.state = 64; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===conditionParser.COMMA);
            break;
        case conditionParser.ADD:
            localctx = new AddExprContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 66;
            this.match(conditionParser.ADD);
            this.state = 67;
            this.addaction();
            this.state = 70; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 68;
                this.match(conditionParser.COMMA);
                this.state = 69;
                this.addaction();
                this.state = 72; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===conditionParser.COMMA);
            break;
        case conditionParser.DELETE:
            localctx = new DeleteExprContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 74;
            this.match(conditionParser.DELETE);
            this.state = 75;
            this.deleteaction();
            this.state = 78; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 76;
                this.match(conditionParser.COMMA);
                this.state = 77;
                this.deleteaction();
                this.state = 80; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===conditionParser.COMMA);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetactionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_setaction;
    return this;
}

SetactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetactionContext.prototype.constructor = SetactionContext;


 
SetactionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SetActionExprContext(parser, ctx) {
	SetactionContext.call(this, parser);
    this.path = null; // Token;
    this.result = null; // SetvalueContext;
    SetactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetActionExprContext.prototype = Object.create(SetactionContext.prototype);
SetActionExprContext.prototype.constructor = SetActionExprContext;

conditionParser.SetActionExprContext = SetActionExprContext;

SetActionExprContext.prototype.EQ = function() {
    return this.getToken(conditionParser.EQ, 0);
};

SetActionExprContext.prototype.OPERAND = function() {
    return this.getToken(conditionParser.OPERAND, 0);
};

SetActionExprContext.prototype.setvalue = function() {
    return this.getTypedRuleContext(SetvalueContext,0);
};
SetActionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterSetActionExpr(this);
	}
};

SetActionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitSetActionExpr(this);
	}
};

SetActionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitSetActionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



conditionParser.SetactionContext = SetactionContext;

conditionParser.prototype.setaction = function() {

    var localctx = new SetactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, conditionParser.RULE_setaction);
    try {
        localctx = new SetActionExprContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        localctx.path = this.match(conditionParser.OPERAND);
        this.state = 85;
        this.match(conditionParser.EQ);
        this.state = 86;
        localctx.result = this.setvalue(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RemoveactionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_removeaction;
    return this;
}

RemoveactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RemoveactionContext.prototype.constructor = RemoveactionContext;


 
RemoveactionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function RemoveActionExprContext(parser, ctx) {
	RemoveactionContext.call(this, parser);
    this.path = null; // Token;
    RemoveactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RemoveActionExprContext.prototype = Object.create(RemoveactionContext.prototype);
RemoveActionExprContext.prototype.constructor = RemoveActionExprContext;

conditionParser.RemoveActionExprContext = RemoveActionExprContext;

RemoveActionExprContext.prototype.OPERAND = function() {
    return this.getToken(conditionParser.OPERAND, 0);
};
RemoveActionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterRemoveActionExpr(this);
	}
};

RemoveActionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitRemoveActionExpr(this);
	}
};

RemoveActionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitRemoveActionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



conditionParser.RemoveactionContext = RemoveactionContext;

conditionParser.prototype.removeaction = function() {

    var localctx = new RemoveactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, conditionParser.RULE_removeaction);
    try {
        localctx = new RemoveActionExprContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        localctx.path = this.match(conditionParser.OPERAND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddactionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_addaction;
    return this;
}

AddactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddactionContext.prototype.constructor = AddactionContext;


 
AddactionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AddActionExprContext(parser, ctx) {
	AddactionContext.call(this, parser);
    this.path = null; // Token;
    this.value = null; // Token;
    AddactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddActionExprContext.prototype = Object.create(AddactionContext.prototype);
AddActionExprContext.prototype.constructor = AddActionExprContext;

conditionParser.AddActionExprContext = AddActionExprContext;

AddActionExprContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.OPERAND);
    } else {
        return this.getToken(conditionParser.OPERAND, i);
    }
};

AddActionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterAddActionExpr(this);
	}
};

AddActionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitAddActionExpr(this);
	}
};

AddActionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitAddActionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



conditionParser.AddactionContext = AddactionContext;

conditionParser.prototype.addaction = function() {

    var localctx = new AddactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, conditionParser.RULE_addaction);
    try {
        localctx = new AddActionExprContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        localctx.path = this.match(conditionParser.OPERAND);
        this.state = 91;
        localctx.value = this.match(conditionParser.OPERAND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeleteactionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_deleteaction;
    return this;
}

DeleteactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeleteactionContext.prototype.constructor = DeleteactionContext;


 
DeleteactionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DeleteActionExprContext(parser, ctx) {
	DeleteactionContext.call(this, parser);
    this.path = null; // Token;
    this.value = null; // Token;
    DeleteactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeleteActionExprContext.prototype = Object.create(DeleteactionContext.prototype);
DeleteActionExprContext.prototype.constructor = DeleteActionExprContext;

conditionParser.DeleteActionExprContext = DeleteActionExprContext;

DeleteActionExprContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.OPERAND);
    } else {
        return this.getToken(conditionParser.OPERAND, i);
    }
};

DeleteActionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterDeleteActionExpr(this);
	}
};

DeleteActionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitDeleteActionExpr(this);
	}
};

DeleteActionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitDeleteActionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



conditionParser.DeleteactionContext = DeleteactionContext;

conditionParser.prototype.deleteaction = function() {

    var localctx = new DeleteactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, conditionParser.RULE_deleteaction);
    try {
        localctx = new DeleteActionExprContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        localctx.path = this.match(conditionParser.OPERAND);
        this.state = 94;
        localctx.value = this.match(conditionParser.OPERAND);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_setvalue;
    return this;
}

SetvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetvalueContext.prototype.constructor = SetvalueContext;


 
SetvalueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ValSetValueExprContext(parser, ctx) {
	SetvalueContext.call(this, parser);
    SetvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValSetValueExprContext.prototype = Object.create(SetvalueContext.prototype);
ValSetValueExprContext.prototype.constructor = ValSetValueExprContext;

conditionParser.ValSetValueExprContext = ValSetValueExprContext;

ValSetValueExprContext.prototype.OPERAND = function() {
    return this.getToken(conditionParser.OPERAND, 0);
};
ValSetValueExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterValSetValueExpr(this);
	}
};

ValSetValueExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitValSetValueExpr(this);
	}
};

ValSetValueExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitValSetValueExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DecSetValueExprContext(parser, ctx) {
	SetvalueContext.call(this, parser);
    this.leftVal = null; // SetvalueContext;
    this.rightVal = null; // SetvalueContext;
    SetvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecSetValueExprContext.prototype = Object.create(SetvalueContext.prototype);
DecSetValueExprContext.prototype.constructor = DecSetValueExprContext;

conditionParser.DecSetValueExprContext = DecSetValueExprContext;

DecSetValueExprContext.prototype.MINUS = function() {
    return this.getToken(conditionParser.MINUS, 0);
};

DecSetValueExprContext.prototype.setvalue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SetvalueContext);
    } else {
        return this.getTypedRuleContext(SetvalueContext,i);
    }
};
DecSetValueExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterDecSetValueExpr(this);
	}
};

DecSetValueExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitDecSetValueExpr(this);
	}
};

DecSetValueExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitDecSetValueExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IncSetValueExprContext(parser, ctx) {
	SetvalueContext.call(this, parser);
    this.leftVal = null; // SetvalueContext;
    this.rightVal = null; // SetvalueContext;
    SetvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IncSetValueExprContext.prototype = Object.create(SetvalueContext.prototype);
IncSetValueExprContext.prototype.constructor = IncSetValueExprContext;

conditionParser.IncSetValueExprContext = IncSetValueExprContext;

IncSetValueExprContext.prototype.PLUS = function() {
    return this.getToken(conditionParser.PLUS, 0);
};

IncSetValueExprContext.prototype.setvalue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SetvalueContext);
    } else {
        return this.getTypedRuleContext(SetvalueContext,i);
    }
};
IncSetValueExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterIncSetValueExpr(this);
	}
};

IncSetValueExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitIncSetValueExpr(this);
	}
};

IncSetValueExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitIncSetValueExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SetFuncSetValueExprContext(parser, ctx) {
	SetvalueContext.call(this, parser);
    SetvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetFuncSetValueExprContext.prototype = Object.create(SetvalueContext.prototype);
SetFuncSetValueExprContext.prototype.constructor = SetFuncSetValueExprContext;

conditionParser.SetFuncSetValueExprContext = SetFuncSetValueExprContext;

SetFuncSetValueExprContext.prototype.setfunc = function() {
    return this.getTypedRuleContext(SetfuncContext,0);
};
SetFuncSetValueExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterSetFuncSetValueExpr(this);
	}
};

SetFuncSetValueExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitSetFuncSetValueExpr(this);
	}
};

SetFuncSetValueExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitSetFuncSetValueExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



conditionParser.prototype.setvalue = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SetvalueContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, conditionParser.RULE_setvalue, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case conditionParser.LIST_APPEND:
        case conditionParser.IF_NOT_EXISTS:
            localctx = new SetFuncSetValueExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 97;
            this.setfunc();
            break;
        case conditionParser.OPERAND:
            localctx = new ValSetValueExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 98;
            this.match(conditionParser.OPERAND);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 109;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 107;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new IncSetValueExprContext(this, new SetvalueContext(this, _parentctx, _parentState));
                    localctx.leftVal = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, conditionParser.RULE_setvalue);
                    this.state = 101;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 102;
                    this.match(conditionParser.PLUS);
                    this.state = 103;
                    localctx.rightVal = this.setvalue(5);
                    break;

                case 2:
                    localctx = new DecSetValueExprContext(this, new SetvalueContext(this, _parentctx, _parentState));
                    localctx.leftVal = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, conditionParser.RULE_setvalue);
                    this.state = 104;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 105;
                    this.match(conditionParser.MINUS);
                    this.state = 106;
                    localctx.rightVal = this.setvalue(4);
                    break;

                } 
            }
            this.state = 111;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function SetfuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_setfunc;
    return this;
}

SetfuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetfuncContext.prototype.constructor = SetfuncContext;


 
SetfuncContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IneSetFuncExprContext(parser, ctx) {
	SetfuncContext.call(this, parser);
    this.path = null; // Token;
    this.val = null; // Token;
    SetfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IneSetFuncExprContext.prototype = Object.create(SetfuncContext.prototype);
IneSetFuncExprContext.prototype.constructor = IneSetFuncExprContext;

conditionParser.IneSetFuncExprContext = IneSetFuncExprContext;

IneSetFuncExprContext.prototype.IF_NOT_EXISTS = function() {
    return this.getToken(conditionParser.IF_NOT_EXISTS, 0);
};

IneSetFuncExprContext.prototype.LPAREN = function() {
    return this.getToken(conditionParser.LPAREN, 0);
};

IneSetFuncExprContext.prototype.COMMA = function() {
    return this.getToken(conditionParser.COMMA, 0);
};

IneSetFuncExprContext.prototype.RPAREN = function() {
    return this.getToken(conditionParser.RPAREN, 0);
};

IneSetFuncExprContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.OPERAND);
    } else {
        return this.getToken(conditionParser.OPERAND, i);
    }
};

IneSetFuncExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterIneSetFuncExpr(this);
	}
};

IneSetFuncExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitIneSetFuncExpr(this);
	}
};

IneSetFuncExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitIneSetFuncExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LaSetFuncExprContext(parser, ctx) {
	SetfuncContext.call(this, parser);
    this.list1 = null; // Token;
    this.list2 = null; // Token;
    SetfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LaSetFuncExprContext.prototype = Object.create(SetfuncContext.prototype);
LaSetFuncExprContext.prototype.constructor = LaSetFuncExprContext;

conditionParser.LaSetFuncExprContext = LaSetFuncExprContext;

LaSetFuncExprContext.prototype.LIST_APPEND = function() {
    return this.getToken(conditionParser.LIST_APPEND, 0);
};

LaSetFuncExprContext.prototype.LPAREN = function() {
    return this.getToken(conditionParser.LPAREN, 0);
};

LaSetFuncExprContext.prototype.COMMA = function() {
    return this.getToken(conditionParser.COMMA, 0);
};

LaSetFuncExprContext.prototype.RPAREN = function() {
    return this.getToken(conditionParser.RPAREN, 0);
};

LaSetFuncExprContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.OPERAND);
    } else {
        return this.getToken(conditionParser.OPERAND, i);
    }
};

LaSetFuncExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterLaSetFuncExpr(this);
	}
};

LaSetFuncExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitLaSetFuncExpr(this);
	}
};

LaSetFuncExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitLaSetFuncExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



conditionParser.SetfuncContext = SetfuncContext;

conditionParser.prototype.setfunc = function() {

    var localctx = new SetfuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, conditionParser.RULE_setfunc);
    try {
        this.state = 124;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case conditionParser.IF_NOT_EXISTS:
            localctx = new IneSetFuncExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.match(conditionParser.IF_NOT_EXISTS);
            this.state = 113;
            this.match(conditionParser.LPAREN);
            this.state = 114;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 115;
            this.match(conditionParser.COMMA);
            this.state = 116;
            localctx.val = this.match(conditionParser.OPERAND);
            this.state = 117;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.LIST_APPEND:
            localctx = new LaSetFuncExprContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 118;
            this.match(conditionParser.LIST_APPEND);
            this.state = 119;
            this.match(conditionParser.LPAREN);
            this.state = 120;
            localctx.list1 = this.match(conditionParser.OPERAND);
            this.state = 121;
            this.match(conditionParser.COMMA);
            this.state = 122;
            localctx.list2 = this.match(conditionParser.OPERAND);
            this.state = 123;
            this.match(conditionParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_comparator;
    return this;
}

ComparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparatorContext.prototype.constructor = ComparatorContext;

ComparatorContext.prototype.EQ = function() {
    return this.getToken(conditionParser.EQ, 0);
};

ComparatorContext.prototype.NE = function() {
    return this.getToken(conditionParser.NE, 0);
};

ComparatorContext.prototype.LT = function() {
    return this.getToken(conditionParser.LT, 0);
};

ComparatorContext.prototype.LE = function() {
    return this.getToken(conditionParser.LE, 0);
};

ComparatorContext.prototype.GT = function() {
    return this.getToken(conditionParser.GT, 0);
};

ComparatorContext.prototype.GE = function() {
    return this.getToken(conditionParser.GE, 0);
};

ComparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterComparator(this);
	}
};

ComparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitComparator(this);
	}
};

ComparatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitComparator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




conditionParser.ComparatorContext = ComparatorContext;

conditionParser.prototype.comparator = function() {

    var localctx = new ComparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, conditionParser.RULE_comparator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << conditionParser.GT) | (1 << conditionParser.GE) | (1 << conditionParser.LT) | (1 << conditionParser.LE) | (1 << conditionParser.EQ) | (1 << conditionParser.NE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BitwiseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_bitwise;
    return this;
}

BitwiseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BitwiseContext.prototype.constructor = BitwiseContext;

BitwiseContext.prototype.AND = function() {
    return this.getToken(conditionParser.AND, 0);
};

BitwiseContext.prototype.OR = function() {
    return this.getToken(conditionParser.OR, 0);
};

BitwiseContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterBitwise(this);
	}
};

BitwiseContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitBitwise(this);
	}
};

BitwiseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitBitwise(this);
    } else {
        return visitor.visitChildren(this);
    }
};




conditionParser.BitwiseContext = BitwiseContext;

conditionParser.prototype.bitwise = function() {

    var localctx = new BitwiseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, conditionParser.RULE_bitwise);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        _la = this._input.LA(1);
        if(!(_la===conditionParser.AND || _la===conditionParser.OR)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondfuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = conditionParser.RULE_condfunc;
    return this;
}

CondfuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondfuncContext.prototype.constructor = CondfuncContext;


 
CondfuncContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SizeCondFuncContext(parser, ctx) {
	CondfuncContext.call(this, parser);
    this.path = null; // Token;
    CondfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SizeCondFuncContext.prototype = Object.create(CondfuncContext.prototype);
SizeCondFuncContext.prototype.constructor = SizeCondFuncContext;

conditionParser.SizeCondFuncContext = SizeCondFuncContext;

SizeCondFuncContext.prototype.SIZE = function() {
    return this.getToken(conditionParser.SIZE, 0);
};

SizeCondFuncContext.prototype.LPAREN = function() {
    return this.getToken(conditionParser.LPAREN, 0);
};

SizeCondFuncContext.prototype.RPAREN = function() {
    return this.getToken(conditionParser.RPAREN, 0);
};

SizeCondFuncContext.prototype.OPERAND = function() {
    return this.getToken(conditionParser.OPERAND, 0);
};
SizeCondFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterSizeCondFunc(this);
	}
};

SizeCondFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitSizeCondFunc(this);
	}
};

SizeCondFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitSizeCondFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AttrTypeCondFuncContext(parser, ctx) {
	CondfuncContext.call(this, parser);
    this.path = null; // Token;
    this.op = null; // Token;
    CondfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AttrTypeCondFuncContext.prototype = Object.create(CondfuncContext.prototype);
AttrTypeCondFuncContext.prototype.constructor = AttrTypeCondFuncContext;

conditionParser.AttrTypeCondFuncContext = AttrTypeCondFuncContext;

AttrTypeCondFuncContext.prototype.ATTR_TYPE = function() {
    return this.getToken(conditionParser.ATTR_TYPE, 0);
};

AttrTypeCondFuncContext.prototype.LPAREN = function() {
    return this.getToken(conditionParser.LPAREN, 0);
};

AttrTypeCondFuncContext.prototype.COMMA = function() {
    return this.getToken(conditionParser.COMMA, 0);
};

AttrTypeCondFuncContext.prototype.RPAREN = function() {
    return this.getToken(conditionParser.RPAREN, 0);
};

AttrTypeCondFuncContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.OPERAND);
    } else {
        return this.getToken(conditionParser.OPERAND, i);
    }
};

AttrTypeCondFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterAttrTypeCondFunc(this);
	}
};

AttrTypeCondFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitAttrTypeCondFunc(this);
	}
};

AttrTypeCondFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitAttrTypeCondFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AttrNotExistsCondFuncContext(parser, ctx) {
	CondfuncContext.call(this, parser);
    this.path = null; // Token;
    CondfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AttrNotExistsCondFuncContext.prototype = Object.create(CondfuncContext.prototype);
AttrNotExistsCondFuncContext.prototype.constructor = AttrNotExistsCondFuncContext;

conditionParser.AttrNotExistsCondFuncContext = AttrNotExistsCondFuncContext;

AttrNotExistsCondFuncContext.prototype.ATTR_NOT_EXIST = function() {
    return this.getToken(conditionParser.ATTR_NOT_EXIST, 0);
};

AttrNotExistsCondFuncContext.prototype.LPAREN = function() {
    return this.getToken(conditionParser.LPAREN, 0);
};

AttrNotExistsCondFuncContext.prototype.RPAREN = function() {
    return this.getToken(conditionParser.RPAREN, 0);
};

AttrNotExistsCondFuncContext.prototype.OPERAND = function() {
    return this.getToken(conditionParser.OPERAND, 0);
};
AttrNotExistsCondFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterAttrNotExistsCondFunc(this);
	}
};

AttrNotExistsCondFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitAttrNotExistsCondFunc(this);
	}
};

AttrNotExistsCondFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitAttrNotExistsCondFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BeginsWithCondFuncContext(parser, ctx) {
	CondfuncContext.call(this, parser);
    this.path = null; // Token;
    this.op = null; // Token;
    CondfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BeginsWithCondFuncContext.prototype = Object.create(CondfuncContext.prototype);
BeginsWithCondFuncContext.prototype.constructor = BeginsWithCondFuncContext;

conditionParser.BeginsWithCondFuncContext = BeginsWithCondFuncContext;

BeginsWithCondFuncContext.prototype.BEGINS_WITH = function() {
    return this.getToken(conditionParser.BEGINS_WITH, 0);
};

BeginsWithCondFuncContext.prototype.LPAREN = function() {
    return this.getToken(conditionParser.LPAREN, 0);
};

BeginsWithCondFuncContext.prototype.COMMA = function() {
    return this.getToken(conditionParser.COMMA, 0);
};

BeginsWithCondFuncContext.prototype.RPAREN = function() {
    return this.getToken(conditionParser.RPAREN, 0);
};

BeginsWithCondFuncContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.OPERAND);
    } else {
        return this.getToken(conditionParser.OPERAND, i);
    }
};

BeginsWithCondFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterBeginsWithCondFunc(this);
	}
};

BeginsWithCondFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitBeginsWithCondFunc(this);
	}
};

BeginsWithCondFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitBeginsWithCondFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AttrExistsCondFuncContext(parser, ctx) {
	CondfuncContext.call(this, parser);
    this.path = null; // Token;
    CondfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AttrExistsCondFuncContext.prototype = Object.create(CondfuncContext.prototype);
AttrExistsCondFuncContext.prototype.constructor = AttrExistsCondFuncContext;

conditionParser.AttrExistsCondFuncContext = AttrExistsCondFuncContext;

AttrExistsCondFuncContext.prototype.ATTR_EXIST = function() {
    return this.getToken(conditionParser.ATTR_EXIST, 0);
};

AttrExistsCondFuncContext.prototype.LPAREN = function() {
    return this.getToken(conditionParser.LPAREN, 0);
};

AttrExistsCondFuncContext.prototype.RPAREN = function() {
    return this.getToken(conditionParser.RPAREN, 0);
};

AttrExistsCondFuncContext.prototype.OPERAND = function() {
    return this.getToken(conditionParser.OPERAND, 0);
};
AttrExistsCondFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterAttrExistsCondFunc(this);
	}
};

AttrExistsCondFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitAttrExistsCondFunc(this);
	}
};

AttrExistsCondFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitAttrExistsCondFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ContainsCondFuncContext(parser, ctx) {
	CondfuncContext.call(this, parser);
    this.path = null; // Token;
    this.op = null; // Token;
    CondfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ContainsCondFuncContext.prototype = Object.create(CondfuncContext.prototype);
ContainsCondFuncContext.prototype.constructor = ContainsCondFuncContext;

conditionParser.ContainsCondFuncContext = ContainsCondFuncContext;

ContainsCondFuncContext.prototype.CONTAINS = function() {
    return this.getToken(conditionParser.CONTAINS, 0);
};

ContainsCondFuncContext.prototype.LPAREN = function() {
    return this.getToken(conditionParser.LPAREN, 0);
};

ContainsCondFuncContext.prototype.COMMA = function() {
    return this.getToken(conditionParser.COMMA, 0);
};

ContainsCondFuncContext.prototype.RPAREN = function() {
    return this.getToken(conditionParser.RPAREN, 0);
};

ContainsCondFuncContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(conditionParser.OPERAND);
    } else {
        return this.getToken(conditionParser.OPERAND, i);
    }
};

ContainsCondFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.enterContainsCondFunc(this);
	}
};

ContainsCondFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof conditionListener ) {
        listener.exitContainsCondFunc(this);
	}
};

ContainsCondFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof conditionVisitor ) {
        return visitor.visitContainsCondFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};



conditionParser.CondfuncContext = CondfuncContext;

conditionParser.prototype.condfunc = function() {

    var localctx = new CondfuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, conditionParser.RULE_condfunc);
    try {
        this.state = 160;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case conditionParser.ATTR_EXIST:
            localctx = new AttrExistsCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 130;
            this.match(conditionParser.ATTR_EXIST);
            this.state = 131;
            this.match(conditionParser.LPAREN);
            this.state = 132;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 133;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.ATTR_NOT_EXIST:
            localctx = new AttrNotExistsCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 134;
            this.match(conditionParser.ATTR_NOT_EXIST);
            this.state = 135;
            this.match(conditionParser.LPAREN);
            this.state = 136;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 137;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.ATTR_TYPE:
            localctx = new AttrTypeCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 138;
            this.match(conditionParser.ATTR_TYPE);
            this.state = 139;
            this.match(conditionParser.LPAREN);
            this.state = 140;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 141;
            this.match(conditionParser.COMMA);
            this.state = 142;
            localctx.op = this.match(conditionParser.OPERAND);
            this.state = 143;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.BEGINS_WITH:
            localctx = new BeginsWithCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 144;
            this.match(conditionParser.BEGINS_WITH);
            this.state = 145;
            this.match(conditionParser.LPAREN);
            this.state = 146;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 147;
            this.match(conditionParser.COMMA);
            this.state = 148;
            localctx.op = this.match(conditionParser.OPERAND);
            this.state = 149;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.CONTAINS:
            localctx = new ContainsCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 150;
            this.match(conditionParser.CONTAINS);
            this.state = 151;
            this.match(conditionParser.LPAREN);
            this.state = 152;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 153;
            this.match(conditionParser.COMMA);
            this.state = 154;
            localctx.op = this.match(conditionParser.OPERAND);
            this.state = 155;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.SIZE:
            localctx = new SizeCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 156;
            this.match(conditionParser.SIZE);
            this.state = 157;
            this.match(conditionParser.LPAREN);
            this.state = 158;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 159;
            this.match(conditionParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


conditionParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.condition_sempred(localctx, predIndex);
	case 6:
			return this.setvalue_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

conditionParser.prototype.condition_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

conditionParser.prototype.setvalue_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.conditionParser = conditionParser;
