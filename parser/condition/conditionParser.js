// Generated from condition.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var conditionListener = require('./conditionListener').conditionListener;
var conditionVisitor = require('./conditionVisitor').conditionVisitor;

var grammarFileName = "condition.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001fK\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u001c\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002\"\n\u0002\f\u0002\u000e\u0002%",
    "\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "I\n\u0005\u0003\u0005\u0002\u0003\u0002\u0006\u0002\u0004\u0006\b\u0002",
    "\u0004\u0003\u0002\u000b\u0010\u0003\u0002\u0007\b\u0002P\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0004&\u0003\u0002\u0002\u0002\u0006(\u0003",
    "\u0002\u0002\u0002\bH\u0003\u0002\u0002\u0002\n\u000b\b\u0002\u0001",
    "\u0002\u000b\f\u0007\u001e\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r",
    "\u000e\u0007\u001e\u0002\u0002\u000e\u001c\u0003\u0002\u0002\u0002\u000f",
    "\u0010\u0007\u001e\u0002\u0002\u0010\u0011\u0007\n\u0002\u0002\u0011",
    "\u0012\u0007\u001e\u0002\u0002\u0012\u0013\u0007\u0007\u0002\u0002\u0013",
    "\u001c\u0007\u001e\u0002\u0002\u0014\u001c\u0005\b\u0005\u0002\u0015",
    "\u0016\u0007\t\u0002\u0002\u0016\u001c\u0005\u0002\u0002\u0004\u0017",
    "\u0018\u0007\u0013\u0002\u0002\u0018\u0019\u0005\u0002\u0002\u0002\u0019",
    "\u001a\u0007\u0014\u0002\u0002\u001a\u001c\u0003\u0002\u0002\u0002\u001b",
    "\n\u0003\u0002\u0002\u0002\u001b\u000f\u0003\u0002\u0002\u0002\u001b",
    "\u0014\u0003\u0002\u0002\u0002\u001b\u0015\u0003\u0002\u0002\u0002\u001b",
    "\u0017\u0003\u0002\u0002\u0002\u001c#\u0003\u0002\u0002\u0002\u001d",
    "\u001e\f\u0005\u0002\u0002\u001e\u001f\u0005\u0006\u0004\u0002\u001f",
    " \u0005\u0002\u0002\u0006 \"\u0003\u0002\u0002\u0002!\u001d\u0003\u0002",
    "\u0002\u0002\"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$",
    "\u0003\u0002\u0002\u0002$\u0003\u0003\u0002\u0002\u0002%#\u0003\u0002",
    "\u0002\u0002&\'\t\u0002\u0002\u0002\'\u0005\u0003\u0002\u0002\u0002",
    "()\t\u0003\u0002\u0002)\u0007\u0003\u0002\u0002\u0002*+\u0007\u0016",
    "\u0002\u0002+,\u0007\u0013\u0002\u0002,-\u0007\u001e\u0002\u0002-I\u0007",
    "\u0014\u0002\u0002./\u0007\u0017\u0002\u0002/0\u0007\u0013\u0002\u0002",
    "01\u0007\u001e\u0002\u00021I\u0007\u0014\u0002\u000223\u0007\u0018\u0002",
    "\u000234\u0007\u0013\u0002\u000245\u0007\u001e\u0002\u000256\u0007\u0015",
    "\u0002\u000267\u0007\u001e\u0002\u00027I\u0007\u0014\u0002\u000289\u0007",
    "\u0019\u0002\u00029:\u0007\u0013\u0002\u0002:;\u0007\u001e\u0002\u0002",
    ";<\u0007\u0015\u0002\u0002<=\u0007\u001e\u0002\u0002=I\u0007\u0014\u0002",
    "\u0002>?\u0007\u001a\u0002\u0002?@\u0007\u0013\u0002\u0002@A\u0007\u001e",
    "\u0002\u0002AB\u0007\u0015\u0002\u0002BC\u0007\u001e\u0002\u0002CI\u0007",
    "\u0014\u0002\u0002DE\u0007\u001b\u0002\u0002EF\u0007\u0013\u0002\u0002",
    "FG\u0007\u001e\u0002\u0002GI\u0007\u0014\u0002\u0002H*\u0003\u0002\u0002",
    "\u0002H.\u0003\u0002\u0002\u0002H2\u0003\u0002\u0002\u0002H8\u0003\u0002",
    "\u0002\u0002H>\u0003\u0002\u0002\u0002HD\u0003\u0002\u0002\u0002I\t",
    "\u0003\u0002\u0002\u0002\u0005\u001b#H"].join("");


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

var ruleNames =  [ "condition", "comparator", "bitwise", "condfunc" ];

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
conditionParser.RULE_comparator = 1;
conditionParser.RULE_bitwise = 2;
conditionParser.RULE_condfunc = 3;

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
        this.state = 25;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new CompCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 9;
            localctx.leftOp = this.match(conditionParser.OPERAND);
            this.state = 10;
            localctx.comp = this.comparator();
            this.state = 11;
            localctx.rightOp = this.match(conditionParser.OPERAND);
            break;

        case 2:
            localctx = new BetweenCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 13;
            localctx.op = this.match(conditionParser.OPERAND);
            this.state = 14;
            this.match(conditionParser.BETWEEN);
            this.state = 15;
            localctx.lb = this.match(conditionParser.OPERAND);
            this.state = 16;
            this.match(conditionParser.AND);
            this.state = 17;
            localctx.ub = this.match(conditionParser.OPERAND);
            break;

        case 3:
            localctx = new FuncCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 18;
            this.condfunc();
            break;

        case 4:
            localctx = new NotCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 19;
            this.match(conditionParser.NOT);
            this.state = 20;
            this.condition(2);
            break;

        case 5:
            localctx = new ParenCondContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 21;
            this.match(conditionParser.LPAREN);
            this.state = 22;
            this.condition(0);
            this.state = 23;
            this.match(conditionParser.RPAREN);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 33;
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
                this.state = 27;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 28;
                localctx.bit = this.bitwise();
                this.state = 29;
                localctx.rightCond = this.condition(4); 
            }
            this.state = 35;
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
    this.enterRule(localctx, 2, conditionParser.RULE_comparator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
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
    this.enterRule(localctx, 4, conditionParser.RULE_bitwise);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
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
    this.enterRule(localctx, 6, conditionParser.RULE_condfunc);
    try {
        this.state = 70;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case conditionParser.ATTR_EXIST:
            localctx = new AttrExistsCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 40;
            this.match(conditionParser.ATTR_EXIST);
            this.state = 41;
            this.match(conditionParser.LPAREN);
            this.state = 42;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 43;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.ATTR_NOT_EXIST:
            localctx = new AttrNotExistsCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 44;
            this.match(conditionParser.ATTR_NOT_EXIST);
            this.state = 45;
            this.match(conditionParser.LPAREN);
            this.state = 46;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 47;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.ATTR_TYPE:
            localctx = new AttrTypeCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 48;
            this.match(conditionParser.ATTR_TYPE);
            this.state = 49;
            this.match(conditionParser.LPAREN);
            this.state = 50;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 51;
            this.match(conditionParser.COMMA);
            this.state = 52;
            localctx.op = this.match(conditionParser.OPERAND);
            this.state = 53;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.BEGINS_WITH:
            localctx = new BeginsWithCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 54;
            this.match(conditionParser.BEGINS_WITH);
            this.state = 55;
            this.match(conditionParser.LPAREN);
            this.state = 56;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 57;
            this.match(conditionParser.COMMA);
            this.state = 58;
            localctx.op = this.match(conditionParser.OPERAND);
            this.state = 59;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.CONTAINS:
            localctx = new ContainsCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 60;
            this.match(conditionParser.CONTAINS);
            this.state = 61;
            this.match(conditionParser.LPAREN);
            this.state = 62;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 63;
            this.match(conditionParser.COMMA);
            this.state = 64;
            localctx.op = this.match(conditionParser.OPERAND);
            this.state = 65;
            this.match(conditionParser.RPAREN);
            break;
        case conditionParser.SIZE:
            localctx = new SizeCondFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 66;
            this.match(conditionParser.SIZE);
            this.state = 67;
            this.match(conditionParser.LPAREN);
            this.state = 68;
            localctx.path = this.match(conditionParser.OPERAND);
            this.state = 69;
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


exports.conditionParser = conditionParser;
