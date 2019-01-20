// Generated from update.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var updateListener = require('./updateListener').updateListener;
var updateVisitor = require('./updateVisitor').updateVisitor;

var grammarFileName = "update.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010h\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0006\u0002\u0014\n\u0002\r\u0002\u000e",
    "\u0002\u0015\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u001c\n\u0003\f\u0003\u000e\u0003\u001f\u000b\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0007\u0003%\n\u0003\f\u0003\u000e\u0003",
    "(\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003.\n\u0003\f\u0003\u000e\u00031\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u00037\n\u0003\f\u0003\u000e\u0003:\u000b",
    "\u0003\u0005\u0003<\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0005\bM\n\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bU\n\b\f\b\u000e",
    "\bX\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tf\n\t\u0003\t\u0002",
    "\u0003\u000e\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0002\u0002",
    "k\u0002\u0013\u0003\u0002\u0002\u0002\u0004;\u0003\u0002\u0002\u0002",
    "\u0006=\u0003\u0002\u0002\u0002\bA\u0003\u0002\u0002\u0002\nC\u0003",
    "\u0002\u0002\u0002\fF\u0003\u0002\u0002\u0002\u000eL\u0003\u0002\u0002",
    "\u0002\u0010e\u0003\u0002\u0002\u0002\u0012\u0014\u0005\u0004\u0003",
    "\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002",
    "\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002",
    "\u0002\u0016\u0003\u0003\u0002\u0002\u0002\u0017\u0018\u0007\u0003\u0002",
    "\u0002\u0018\u001d\u0005\u0006\u0004\u0002\u0019\u001a\u0007\f\u0002",
    "\u0002\u001a\u001c\u0005\u0006\u0004\u0002\u001b\u0019\u0003\u0002\u0002",
    "\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e<\u0003\u0002\u0002",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002 !\u0007\u0004\u0002\u0002",
    "!&\u0005\b\u0005\u0002\"#\u0007\f\u0002\u0002#%\u0005\b\u0005\u0002",
    "$\"\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002",
    "\u0002\u0002&\'\u0003\u0002\u0002\u0002\'<\u0003\u0002\u0002\u0002(",
    "&\u0003\u0002\u0002\u0002)*\u0007\u0005\u0002\u0002*/\u0005\n\u0006",
    "\u0002+,\u0007\f\u0002\u0002,.\u0005\n\u0006\u0002-+\u0003\u0002\u0002",
    "\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002",
    "\u0002\u00020<\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000223\u0007",
    "\u0006\u0002\u000238\u0005\f\u0007\u000245\u0007\f\u0002\u000257\u0005",
    "\f\u0007\u000264\u0003\u0002\u0002\u00027:\u0003\u0002\u0002\u00028",
    "6\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029<\u0003\u0002\u0002",
    "\u0002:8\u0003\u0002\u0002\u0002;\u0017\u0003\u0002\u0002\u0002; \u0003",
    "\u0002\u0002\u0002;)\u0003\u0002\u0002\u0002;2\u0003\u0002\u0002\u0002",
    "<\u0005\u0003\u0002\u0002\u0002=>\u0007\u000f\u0002\u0002>?\u0007\u0007",
    "\u0002\u0002?@\u0005\u000e\b\u0002@\u0007\u0003\u0002\u0002\u0002AB",
    "\u0007\u000f\u0002\u0002B\t\u0003\u0002\u0002\u0002CD\u0007\u000f\u0002",
    "\u0002DE\u0007\u000f\u0002\u0002E\u000b\u0003\u0002\u0002\u0002FG\u0007",
    "\u000f\u0002\u0002GH\u0007\u000f\u0002\u0002H\r\u0003\u0002\u0002\u0002",
    "IJ\b\b\u0001\u0002JM\u0005\u0010\t\u0002KM\u0007\u000f\u0002\u0002L",
    "I\u0003\u0002\u0002\u0002LK\u0003\u0002\u0002\u0002MV\u0003\u0002\u0002",
    "\u0002NO\f\u0006\u0002\u0002OP\u0007\b\u0002\u0002PU\u0005\u000e\b\u0007",
    "QR\f\u0005\u0002\u0002RS\u0007\t\u0002\u0002SU\u0005\u000e\b\u0006T",
    "N\u0003\u0002\u0002\u0002TQ\u0003\u0002\u0002\u0002UX\u0003\u0002\u0002",
    "\u0002VT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002W\u000f\u0003",
    "\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002YZ\u0007\u000e\u0002\u0002",
    "Z[\u0007\n\u0002\u0002[\\\u0007\u000f\u0002\u0002\\]\u0007\f\u0002\u0002",
    "]^\u0007\u000f\u0002\u0002^f\u0007\u000b\u0002\u0002_`\u0007\r\u0002",
    "\u0002`a\u0007\n\u0002\u0002ab\u0007\u000f\u0002\u0002bc\u0007\f\u0002",
    "\u0002cd\u0007\u000f\u0002\u0002df\u0007\u000b\u0002\u0002eY\u0003\u0002",
    "\u0002\u0002e_\u0003\u0002\u0002\u0002f\u0011\u0003\u0002\u0002\u0002",
    "\f\u0015\u001d&/8;LTVe"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'='", "'+'", "'-'", 
                     "'('", "')'", "','" ];

var symbolicNames = [ null, "SET", "REMOVE", "ADD", "DELETE", "EQ", "PLUS", 
                      "MINUS", "LPAREN", "RPAREN", "COMMA", "LIST_APPEND", 
                      "IF_NOT_EXISTS", "OPERAND", "WS" ];

var ruleNames =  [ "update", "updateaction", "setaction", "removeaction", 
                   "addaction", "deleteaction", "setvalue", "setfunc" ];

function updateParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

updateParser.prototype = Object.create(antlr4.Parser.prototype);
updateParser.prototype.constructor = updateParser;

Object.defineProperty(updateParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

updateParser.EOF = antlr4.Token.EOF;
updateParser.SET = 1;
updateParser.REMOVE = 2;
updateParser.ADD = 3;
updateParser.DELETE = 4;
updateParser.EQ = 5;
updateParser.PLUS = 6;
updateParser.MINUS = 7;
updateParser.LPAREN = 8;
updateParser.RPAREN = 9;
updateParser.COMMA = 10;
updateParser.LIST_APPEND = 11;
updateParser.IF_NOT_EXISTS = 12;
updateParser.OPERAND = 13;
updateParser.WS = 14;

updateParser.RULE_update = 0;
updateParser.RULE_updateaction = 1;
updateParser.RULE_setaction = 2;
updateParser.RULE_removeaction = 3;
updateParser.RULE_addaction = 4;
updateParser.RULE_deleteaction = 5;
updateParser.RULE_setvalue = 6;
updateParser.RULE_setfunc = 7;

function UpdateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = updateParser.RULE_update;
    return this;
}

UpdateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UpdateContext.prototype.constructor = UpdateContext;

UpdateContext.prototype.updateaction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UpdateactionContext);
    } else {
        return this.getTypedRuleContext(UpdateactionContext,i);
    }
};

UpdateContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterUpdate(this);
	}
};

UpdateContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitUpdate(this);
	}
};

UpdateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitUpdate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




updateParser.UpdateContext = UpdateContext;

updateParser.prototype.update = function() {

    var localctx = new UpdateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, updateParser.RULE_update);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 16;
            this.updateaction();
            this.state = 19; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << updateParser.SET) | (1 << updateParser.REMOVE) | (1 << updateParser.ADD) | (1 << updateParser.DELETE))) !== 0));
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

function UpdateactionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = updateParser.RULE_updateaction;
    return this;
}

UpdateactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UpdateactionContext.prototype.constructor = UpdateactionContext;


 
UpdateactionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function RemoveUpdateContext(parser, ctx) {
	UpdateactionContext.call(this, parser);
    UpdateactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RemoveUpdateContext.prototype = Object.create(UpdateactionContext.prototype);
RemoveUpdateContext.prototype.constructor = RemoveUpdateContext;

updateParser.RemoveUpdateContext = RemoveUpdateContext;

RemoveUpdateContext.prototype.REMOVE = function() {
    return this.getToken(updateParser.REMOVE, 0);
};

RemoveUpdateContext.prototype.removeaction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RemoveactionContext);
    } else {
        return this.getTypedRuleContext(RemoveactionContext,i);
    }
};

RemoveUpdateContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(updateParser.COMMA);
    } else {
        return this.getToken(updateParser.COMMA, i);
    }
};

RemoveUpdateContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterRemoveUpdate(this);
	}
};

RemoveUpdateContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitRemoveUpdate(this);
	}
};

RemoveUpdateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitRemoveUpdate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SetUpdateContext(parser, ctx) {
	UpdateactionContext.call(this, parser);
    UpdateactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetUpdateContext.prototype = Object.create(UpdateactionContext.prototype);
SetUpdateContext.prototype.constructor = SetUpdateContext;

updateParser.SetUpdateContext = SetUpdateContext;

SetUpdateContext.prototype.SET = function() {
    return this.getToken(updateParser.SET, 0);
};

SetUpdateContext.prototype.setaction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SetactionContext);
    } else {
        return this.getTypedRuleContext(SetactionContext,i);
    }
};

SetUpdateContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(updateParser.COMMA);
    } else {
        return this.getToken(updateParser.COMMA, i);
    }
};

SetUpdateContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterSetUpdate(this);
	}
};

SetUpdateContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitSetUpdate(this);
	}
};

SetUpdateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitSetUpdate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DeleteUpdateContext(parser, ctx) {
	UpdateactionContext.call(this, parser);
    UpdateactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeleteUpdateContext.prototype = Object.create(UpdateactionContext.prototype);
DeleteUpdateContext.prototype.constructor = DeleteUpdateContext;

updateParser.DeleteUpdateContext = DeleteUpdateContext;

DeleteUpdateContext.prototype.DELETE = function() {
    return this.getToken(updateParser.DELETE, 0);
};

DeleteUpdateContext.prototype.deleteaction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeleteactionContext);
    } else {
        return this.getTypedRuleContext(DeleteactionContext,i);
    }
};

DeleteUpdateContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(updateParser.COMMA);
    } else {
        return this.getToken(updateParser.COMMA, i);
    }
};

DeleteUpdateContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterDeleteUpdate(this);
	}
};

DeleteUpdateContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitDeleteUpdate(this);
	}
};

DeleteUpdateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitDeleteUpdate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddUpdateContext(parser, ctx) {
	UpdateactionContext.call(this, parser);
    UpdateactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddUpdateContext.prototype = Object.create(UpdateactionContext.prototype);
AddUpdateContext.prototype.constructor = AddUpdateContext;

updateParser.AddUpdateContext = AddUpdateContext;

AddUpdateContext.prototype.ADD = function() {
    return this.getToken(updateParser.ADD, 0);
};

AddUpdateContext.prototype.addaction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddactionContext);
    } else {
        return this.getTypedRuleContext(AddactionContext,i);
    }
};

AddUpdateContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(updateParser.COMMA);
    } else {
        return this.getToken(updateParser.COMMA, i);
    }
};

AddUpdateContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterAddUpdate(this);
	}
};

AddUpdateContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitAddUpdate(this);
	}
};

AddUpdateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitAddUpdate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



updateParser.UpdateactionContext = UpdateactionContext;

updateParser.prototype.updateaction = function() {

    var localctx = new UpdateactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, updateParser.RULE_updateaction);
    var _la = 0; // Token type
    try {
        this.state = 57;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case updateParser.SET:
            localctx = new SetUpdateContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 21;
            this.match(updateParser.SET);
            this.state = 22;
            this.setaction();
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===updateParser.COMMA) {
                this.state = 23;
                this.match(updateParser.COMMA);
                this.state = 24;
                this.setaction();
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case updateParser.REMOVE:
            localctx = new RemoveUpdateContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.match(updateParser.REMOVE);
            this.state = 31;
            this.removeaction();
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===updateParser.COMMA) {
                this.state = 32;
                this.match(updateParser.COMMA);
                this.state = 33;
                this.removeaction();
                this.state = 38;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case updateParser.ADD:
            localctx = new AddUpdateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 39;
            this.match(updateParser.ADD);
            this.state = 40;
            this.addaction();
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===updateParser.COMMA) {
                this.state = 41;
                this.match(updateParser.COMMA);
                this.state = 42;
                this.addaction();
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case updateParser.DELETE:
            localctx = new DeleteUpdateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 48;
            this.match(updateParser.DELETE);
            this.state = 49;
            this.deleteaction();
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===updateParser.COMMA) {
                this.state = 50;
                this.match(updateParser.COMMA);
                this.state = 51;
                this.deleteaction();
                this.state = 56;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
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
    this.ruleIndex = updateParser.RULE_setaction;
    return this;
}

SetactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetactionContext.prototype.constructor = SetactionContext;


 
SetactionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SetActionContext(parser, ctx) {
	SetactionContext.call(this, parser);
    this.path = null; // Token;
    this.result = null; // SetvalueContext;
    SetactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetActionContext.prototype = Object.create(SetactionContext.prototype);
SetActionContext.prototype.constructor = SetActionContext;

updateParser.SetActionContext = SetActionContext;

SetActionContext.prototype.EQ = function() {
    return this.getToken(updateParser.EQ, 0);
};

SetActionContext.prototype.OPERAND = function() {
    return this.getToken(updateParser.OPERAND, 0);
};

SetActionContext.prototype.setvalue = function() {
    return this.getTypedRuleContext(SetvalueContext,0);
};
SetActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterSetAction(this);
	}
};

SetActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitSetAction(this);
	}
};

SetActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitSetAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};



updateParser.SetactionContext = SetactionContext;

updateParser.prototype.setaction = function() {

    var localctx = new SetactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, updateParser.RULE_setaction);
    try {
        localctx = new SetActionContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        localctx.path = this.match(updateParser.OPERAND);
        this.state = 60;
        this.match(updateParser.EQ);
        this.state = 61;
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
    this.ruleIndex = updateParser.RULE_removeaction;
    return this;
}

RemoveactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RemoveactionContext.prototype.constructor = RemoveactionContext;


 
RemoveactionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function RemoveActionContext(parser, ctx) {
	RemoveactionContext.call(this, parser);
    this.path = null; // Token;
    RemoveactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RemoveActionContext.prototype = Object.create(RemoveactionContext.prototype);
RemoveActionContext.prototype.constructor = RemoveActionContext;

updateParser.RemoveActionContext = RemoveActionContext;

RemoveActionContext.prototype.OPERAND = function() {
    return this.getToken(updateParser.OPERAND, 0);
};
RemoveActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterRemoveAction(this);
	}
};

RemoveActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitRemoveAction(this);
	}
};

RemoveActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitRemoveAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};



updateParser.RemoveactionContext = RemoveactionContext;

updateParser.prototype.removeaction = function() {

    var localctx = new RemoveactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, updateParser.RULE_removeaction);
    try {
        localctx = new RemoveActionContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        localctx.path = this.match(updateParser.OPERAND);
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
    this.ruleIndex = updateParser.RULE_addaction;
    return this;
}

AddactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddactionContext.prototype.constructor = AddactionContext;


 
AddactionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AddActionContext(parser, ctx) {
	AddactionContext.call(this, parser);
    this.path = null; // Token;
    this.value = null; // Token;
    AddactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddActionContext.prototype = Object.create(AddactionContext.prototype);
AddActionContext.prototype.constructor = AddActionContext;

updateParser.AddActionContext = AddActionContext;

AddActionContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(updateParser.OPERAND);
    } else {
        return this.getToken(updateParser.OPERAND, i);
    }
};

AddActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterAddAction(this);
	}
};

AddActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitAddAction(this);
	}
};

AddActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitAddAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};



updateParser.AddactionContext = AddactionContext;

updateParser.prototype.addaction = function() {

    var localctx = new AddactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, updateParser.RULE_addaction);
    try {
        localctx = new AddActionContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        localctx.path = this.match(updateParser.OPERAND);
        this.state = 66;
        localctx.value = this.match(updateParser.OPERAND);
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
    this.ruleIndex = updateParser.RULE_deleteaction;
    return this;
}

DeleteactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeleteactionContext.prototype.constructor = DeleteactionContext;


 
DeleteactionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DeleteActionContext(parser, ctx) {
	DeleteactionContext.call(this, parser);
    this.path = null; // Token;
    this.value = null; // Token;
    DeleteactionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeleteActionContext.prototype = Object.create(DeleteactionContext.prototype);
DeleteActionContext.prototype.constructor = DeleteActionContext;

updateParser.DeleteActionContext = DeleteActionContext;

DeleteActionContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(updateParser.OPERAND);
    } else {
        return this.getToken(updateParser.OPERAND, i);
    }
};

DeleteActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterDeleteAction(this);
	}
};

DeleteActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitDeleteAction(this);
	}
};

DeleteActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitDeleteAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};



updateParser.DeleteactionContext = DeleteactionContext;

updateParser.prototype.deleteaction = function() {

    var localctx = new DeleteactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, updateParser.RULE_deleteaction);
    try {
        localctx = new DeleteActionContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        localctx.path = this.match(updateParser.OPERAND);
        this.state = 69;
        localctx.value = this.match(updateParser.OPERAND);
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
    this.ruleIndex = updateParser.RULE_setvalue;
    return this;
}

SetvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetvalueContext.prototype.constructor = SetvalueContext;


 
SetvalueContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function SetFuncSetValueContext(parser, ctx) {
	SetvalueContext.call(this, parser);
    SetvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetFuncSetValueContext.prototype = Object.create(SetvalueContext.prototype);
SetFuncSetValueContext.prototype.constructor = SetFuncSetValueContext;

updateParser.SetFuncSetValueContext = SetFuncSetValueContext;

SetFuncSetValueContext.prototype.setfunc = function() {
    return this.getTypedRuleContext(SetfuncContext,0);
};
SetFuncSetValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterSetFuncSetValue(this);
	}
};

SetFuncSetValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitSetFuncSetValue(this);
	}
};

SetFuncSetValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitSetFuncSetValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IncSetValueContext(parser, ctx) {
	SetvalueContext.call(this, parser);
    this.leftVal = null; // SetvalueContext;
    this.rightVal = null; // SetvalueContext;
    SetvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IncSetValueContext.prototype = Object.create(SetvalueContext.prototype);
IncSetValueContext.prototype.constructor = IncSetValueContext;

updateParser.IncSetValueContext = IncSetValueContext;

IncSetValueContext.prototype.PLUS = function() {
    return this.getToken(updateParser.PLUS, 0);
};

IncSetValueContext.prototype.setvalue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SetvalueContext);
    } else {
        return this.getTypedRuleContext(SetvalueContext,i);
    }
};
IncSetValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterIncSetValue(this);
	}
};

IncSetValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitIncSetValue(this);
	}
};

IncSetValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitIncSetValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DecSetValueContext(parser, ctx) {
	SetvalueContext.call(this, parser);
    this.leftVal = null; // SetvalueContext;
    this.rightVal = null; // SetvalueContext;
    SetvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecSetValueContext.prototype = Object.create(SetvalueContext.prototype);
DecSetValueContext.prototype.constructor = DecSetValueContext;

updateParser.DecSetValueContext = DecSetValueContext;

DecSetValueContext.prototype.MINUS = function() {
    return this.getToken(updateParser.MINUS, 0);
};

DecSetValueContext.prototype.setvalue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SetvalueContext);
    } else {
        return this.getTypedRuleContext(SetvalueContext,i);
    }
};
DecSetValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterDecSetValue(this);
	}
};

DecSetValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitDecSetValue(this);
	}
};

DecSetValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitDecSetValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ValSetValueContext(parser, ctx) {
	SetvalueContext.call(this, parser);
    this.op = null; // Token;
    SetvalueContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValSetValueContext.prototype = Object.create(SetvalueContext.prototype);
ValSetValueContext.prototype.constructor = ValSetValueContext;

updateParser.ValSetValueContext = ValSetValueContext;

ValSetValueContext.prototype.OPERAND = function() {
    return this.getToken(updateParser.OPERAND, 0);
};
ValSetValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterValSetValue(this);
	}
};

ValSetValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitValSetValue(this);
	}
};

ValSetValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitValSetValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};



updateParser.prototype.setvalue = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SetvalueContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, updateParser.RULE_setvalue, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case updateParser.LIST_APPEND:
        case updateParser.IF_NOT_EXISTS:
            localctx = new SetFuncSetValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 72;
            this.setfunc();
            break;
        case updateParser.OPERAND:
            localctx = new ValSetValueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 73;
            localctx.op = this.match(updateParser.OPERAND);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 84;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 82;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new IncSetValueContext(this, new SetvalueContext(this, _parentctx, _parentState));
                    localctx.leftVal = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, updateParser.RULE_setvalue);
                    this.state = 76;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 77;
                    this.match(updateParser.PLUS);
                    this.state = 78;
                    localctx.rightVal = this.setvalue(5);
                    break;

                case 2:
                    localctx = new DecSetValueContext(this, new SetvalueContext(this, _parentctx, _parentState));
                    localctx.leftVal = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, updateParser.RULE_setvalue);
                    this.state = 79;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 80;
                    this.match(updateParser.MINUS);
                    this.state = 81;
                    localctx.rightVal = this.setvalue(4);
                    break;

                } 
            }
            this.state = 86;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
    this.ruleIndex = updateParser.RULE_setfunc;
    return this;
}

SetfuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetfuncContext.prototype.constructor = SetfuncContext;


 
SetfuncContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function LaSetFuncContext(parser, ctx) {
	SetfuncContext.call(this, parser);
    this.list1 = null; // Token;
    this.list2 = null; // Token;
    SetfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LaSetFuncContext.prototype = Object.create(SetfuncContext.prototype);
LaSetFuncContext.prototype.constructor = LaSetFuncContext;

updateParser.LaSetFuncContext = LaSetFuncContext;

LaSetFuncContext.prototype.LIST_APPEND = function() {
    return this.getToken(updateParser.LIST_APPEND, 0);
};

LaSetFuncContext.prototype.LPAREN = function() {
    return this.getToken(updateParser.LPAREN, 0);
};

LaSetFuncContext.prototype.COMMA = function() {
    return this.getToken(updateParser.COMMA, 0);
};

LaSetFuncContext.prototype.RPAREN = function() {
    return this.getToken(updateParser.RPAREN, 0);
};

LaSetFuncContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(updateParser.OPERAND);
    } else {
        return this.getToken(updateParser.OPERAND, i);
    }
};

LaSetFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterLaSetFunc(this);
	}
};

LaSetFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitLaSetFunc(this);
	}
};

LaSetFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitLaSetFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IneSetFuncContext(parser, ctx) {
	SetfuncContext.call(this, parser);
    this.path = null; // Token;
    this.val = null; // Token;
    SetfuncContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IneSetFuncContext.prototype = Object.create(SetfuncContext.prototype);
IneSetFuncContext.prototype.constructor = IneSetFuncContext;

updateParser.IneSetFuncContext = IneSetFuncContext;

IneSetFuncContext.prototype.IF_NOT_EXISTS = function() {
    return this.getToken(updateParser.IF_NOT_EXISTS, 0);
};

IneSetFuncContext.prototype.LPAREN = function() {
    return this.getToken(updateParser.LPAREN, 0);
};

IneSetFuncContext.prototype.COMMA = function() {
    return this.getToken(updateParser.COMMA, 0);
};

IneSetFuncContext.prototype.RPAREN = function() {
    return this.getToken(updateParser.RPAREN, 0);
};

IneSetFuncContext.prototype.OPERAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(updateParser.OPERAND);
    } else {
        return this.getToken(updateParser.OPERAND, i);
    }
};

IneSetFuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.enterIneSetFunc(this);
	}
};

IneSetFuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof updateListener ) {
        listener.exitIneSetFunc(this);
	}
};

IneSetFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof updateVisitor ) {
        return visitor.visitIneSetFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};



updateParser.SetfuncContext = SetfuncContext;

updateParser.prototype.setfunc = function() {

    var localctx = new SetfuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, updateParser.RULE_setfunc);
    try {
        this.state = 99;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case updateParser.IF_NOT_EXISTS:
            localctx = new IneSetFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 87;
            this.match(updateParser.IF_NOT_EXISTS);
            this.state = 88;
            this.match(updateParser.LPAREN);
            this.state = 89;
            localctx.path = this.match(updateParser.OPERAND);
            this.state = 90;
            this.match(updateParser.COMMA);
            this.state = 91;
            localctx.val = this.match(updateParser.OPERAND);
            this.state = 92;
            this.match(updateParser.RPAREN);
            break;
        case updateParser.LIST_APPEND:
            localctx = new LaSetFuncContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.match(updateParser.LIST_APPEND);
            this.state = 94;
            this.match(updateParser.LPAREN);
            this.state = 95;
            localctx.list1 = this.match(updateParser.OPERAND);
            this.state = 96;
            this.match(updateParser.COMMA);
            this.state = 97;
            localctx.list2 = this.match(updateParser.OPERAND);
            this.state = 98;
            this.match(updateParser.RPAREN);
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


updateParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.setvalue_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

updateParser.prototype.setvalue_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.updateParser = updateParser;
