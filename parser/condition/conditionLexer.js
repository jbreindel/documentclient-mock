// Generated from condition.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001f\u015f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"",
    "\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "$\u0003$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003\'",
    "\u0003(\u0003(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003",
    ",\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u0003",
    "0\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u00030\u0003",
    "0\u00030\u00030\u00030\u00031\u00031\u00031\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00032\u0003",
    "2\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u0003",
    "2\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u0003",
    "4\u00034\u00034\u00034\u00034\u00035\u00035\u00035\u00035\u00035\u0003",
    "5\u00035\u00035\u00035\u00035\u00035\u00035\u00036\u00036\u00036\u0003",
    "6\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u0003",
    "6\u00037\u00057\u0152\n7\u00037\u00057\u0155\n7\u00037\u00067\u0158",
    "\n7\r7\u000e7\u0159\u00038\u00038\u00038\u00038\u0002\u00029\u0003\u0002",
    "\u0005\u0002\u0007\u0002\t\u0002\u000b\u0002\r\u0002\u000f\u0002\u0011",
    "\u0002\u0013\u0002\u0015\u0002\u0017\u0002\u0019\u0002\u001b\u0002\u001d",
    "\u0002\u001f\u0002!\u0002#\u0002%\u0002\'\u0002)\u0002+\u0002-\u0002",
    "/\u00021\u00023\u00025\u00027\u00039\u0004;\u0005=\u0006?\u0007A\bC",
    "\tE\nG\u000bI\fK\rM\u000eO\u000fQ\u0010S\u0011U\u0012W\u0013Y\u0014",
    "[\u0015]\u0016_\u0017a\u0018c\u0019e\u001ag\u001bi\u001ck\u001dm\u001e",
    "o\u001f\u0003\u0002\u001e\u0004\u0002CCcc\u0004\u0002DDdd\u0004\u0002",
    "EEee\u0004\u0002FFff\u0004\u0002GGgg\u0004\u0002HHhh\u0004\u0002IIi",
    "i\u0004\u0002JJjj\u0004\u0002KKkk\u0004\u0002LLll\u0004\u0002MMmm\u0004",
    "\u0002NNnn\u0004\u0002OOoo\u0004\u0002PPpp\u0004\u0002QQqq\u0004\u0002",
    "RRrr\u0004\u0002SSss\u0004\u0002TTtt\u0004\u0002UUuu\u0004\u0002VVv",
    "v\u0004\u0002WWww\u0004\u0002XXxx\u0004\u0002YYyy\u0004\u0002ZZzz\u0004",
    "\u0002[[{{\u0004\u0002\\\\||\u0006\u0002002;C\\c|\u0005\u0002\f\f\u000f",
    "\u000f\"\"\u0002\u0147\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002",
    "G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003",
    "\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002",
    "\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002",
    "\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002",
    "\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002",
    "]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003",
    "\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002",
    "\u0002\u0002\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002",
    "\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002",
    "\u0002o\u0003\u0002\u0002\u0002\u0003q\u0003\u0002\u0002\u0002\u0005",
    "s\u0003\u0002\u0002\u0002\u0007u\u0003\u0002\u0002\u0002\tw\u0003\u0002",
    "\u0002\u0002\u000by\u0003\u0002\u0002\u0002\r{\u0003\u0002\u0002\u0002",
    "\u000f}\u0003\u0002\u0002\u0002\u0011\u007f\u0003\u0002\u0002\u0002",
    "\u0013\u0081\u0003\u0002\u0002\u0002\u0015\u0083\u0003\u0002\u0002\u0002",
    "\u0017\u0085\u0003\u0002\u0002\u0002\u0019\u0087\u0003\u0002\u0002\u0002",
    "\u001b\u0089\u0003\u0002\u0002\u0002\u001d\u008b\u0003\u0002\u0002\u0002",
    "\u001f\u008d\u0003\u0002\u0002\u0002!\u008f\u0003\u0002\u0002\u0002",
    "#\u0091\u0003\u0002\u0002\u0002%\u0093\u0003\u0002\u0002\u0002\'\u0095",
    "\u0003\u0002\u0002\u0002)\u0097\u0003\u0002\u0002\u0002+\u0099\u0003",
    "\u0002\u0002\u0002-\u009b\u0003\u0002\u0002\u0002/\u009d\u0003\u0002",
    "\u0002\u00021\u009f\u0003\u0002\u0002\u00023\u00a1\u0003\u0002\u0002",
    "\u00025\u00a3\u0003\u0002\u0002\u00027\u00a5\u0003\u0002\u0002\u0002",
    "9\u00a9\u0003\u0002\u0002\u0002;\u00b0\u0003\u0002\u0002\u0002=\u00b4",
    "\u0003\u0002\u0002\u0002?\u00bb\u0003\u0002\u0002\u0002A\u00bf\u0003",
    "\u0002\u0002\u0002C\u00c2\u0003\u0002\u0002\u0002E\u00c6\u0003\u0002",
    "\u0002\u0002G\u00ce\u0003\u0002\u0002\u0002I\u00d0\u0003\u0002\u0002",
    "\u0002K\u00d3\u0003\u0002\u0002\u0002M\u00d5\u0003\u0002\u0002\u0002",
    "O\u00d8\u0003\u0002\u0002\u0002Q\u00da\u0003\u0002\u0002\u0002S\u00dd",
    "\u0003\u0002\u0002\u0002U\u00df\u0003\u0002\u0002\u0002W\u00e1\u0003",
    "\u0002\u0002\u0002Y\u00e3\u0003\u0002\u0002\u0002[\u00e5\u0003\u0002",
    "\u0002\u0002]\u00e7\u0003\u0002\u0002\u0002_\u00f8\u0003\u0002\u0002",
    "\u0002a\u010d\u0003\u0002\u0002\u0002c\u011c\u0003\u0002\u0002\u0002",
    "e\u0128\u0003\u0002\u0002\u0002g\u0131\u0003\u0002\u0002\u0002i\u0136",
    "\u0003\u0002\u0002\u0002k\u0142\u0003\u0002\u0002\u0002m\u0151\u0003",
    "\u0002\u0002\u0002o\u015b\u0003\u0002\u0002\u0002qr\t\u0002\u0002\u0002",
    "r\u0004\u0003\u0002\u0002\u0002st\t\u0003\u0002\u0002t\u0006\u0003\u0002",
    "\u0002\u0002uv\t\u0004\u0002\u0002v\b\u0003\u0002\u0002\u0002wx\t\u0005",
    "\u0002\u0002x\n\u0003\u0002\u0002\u0002yz\t\u0006\u0002\u0002z\f\u0003",
    "\u0002\u0002\u0002{|\t\u0007\u0002\u0002|\u000e\u0003\u0002\u0002\u0002",
    "}~\t\b\u0002\u0002~\u0010\u0003\u0002\u0002\u0002\u007f\u0080\t\t\u0002",
    "\u0002\u0080\u0012\u0003\u0002\u0002\u0002\u0081\u0082\t\n\u0002\u0002",
    "\u0082\u0014\u0003\u0002\u0002\u0002\u0083\u0084\t\u000b\u0002\u0002",
    "\u0084\u0016\u0003\u0002\u0002\u0002\u0085\u0086\t\f\u0002\u0002\u0086",
    "\u0018\u0003\u0002\u0002\u0002\u0087\u0088\t\r\u0002\u0002\u0088\u001a",
    "\u0003\u0002\u0002\u0002\u0089\u008a\t\u000e\u0002\u0002\u008a\u001c",
    "\u0003\u0002\u0002\u0002\u008b\u008c\t\u000f\u0002\u0002\u008c\u001e",
    "\u0003\u0002\u0002\u0002\u008d\u008e\t\u0010\u0002\u0002\u008e \u0003",
    "\u0002\u0002\u0002\u008f\u0090\t\u0011\u0002\u0002\u0090\"\u0003\u0002",
    "\u0002\u0002\u0091\u0092\t\u0012\u0002\u0002\u0092$\u0003\u0002\u0002",
    "\u0002\u0093\u0094\t\u0013\u0002\u0002\u0094&\u0003\u0002\u0002\u0002",
    "\u0095\u0096\t\u0014\u0002\u0002\u0096(\u0003\u0002\u0002\u0002\u0097",
    "\u0098\t\u0015\u0002\u0002\u0098*\u0003\u0002\u0002\u0002\u0099\u009a",
    "\t\u0016\u0002\u0002\u009a,\u0003\u0002\u0002\u0002\u009b\u009c\t\u0017",
    "\u0002\u0002\u009c.\u0003\u0002\u0002\u0002\u009d\u009e\t\u0018\u0002",
    "\u0002\u009e0\u0003\u0002\u0002\u0002\u009f\u00a0\t\u0019\u0002\u0002",
    "\u00a02\u0003\u0002\u0002\u0002\u00a1\u00a2\t\u001a\u0002\u0002\u00a2",
    "4\u0003\u0002\u0002\u0002\u00a3\u00a4\t\u001b\u0002\u0002\u00a46\u0003",
    "\u0002\u0002\u0002\u00a5\u00a6\u0005\'\u0014\u0002\u00a6\u00a7\u0005",
    "\u000b\u0006\u0002\u00a7\u00a8\u0005)\u0015\u0002\u00a88\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0005%\u0013\u0002\u00aa\u00ab\u0005\u000b",
    "\u0006\u0002\u00ab\u00ac\u0005\u001b\u000e\u0002\u00ac\u00ad\u0005\u001f",
    "\u0010\u0002\u00ad\u00ae\u0005-\u0017\u0002\u00ae\u00af\u0005\u000b",
    "\u0006\u0002\u00af:\u0003\u0002\u0002\u0002\u00b0\u00b1\u0005\u0003",
    "\u0002\u0002\u00b1\u00b2\u0005\t\u0005\u0002\u00b2\u00b3\u0005\t\u0005",
    "\u0002\u00b3<\u0003\u0002\u0002\u0002\u00b4\u00b5\u0005\t\u0005\u0002",
    "\u00b5\u00b6\u0005\u000b\u0006\u0002\u00b6\u00b7\u0005\u0019\r\u0002",
    "\u00b7\u00b8\u0005\u000b\u0006\u0002\u00b8\u00b9\u0005)\u0015\u0002",
    "\u00b9\u00ba\u0005\u000b\u0006\u0002\u00ba>\u0003\u0002\u0002\u0002",
    "\u00bb\u00bc\u0005\u0003\u0002\u0002\u00bc\u00bd\u0005\u001d\u000f\u0002",
    "\u00bd\u00be\u0005\t\u0005\u0002\u00be@\u0003\u0002\u0002\u0002\u00bf",
    "\u00c0\u0005\u001f\u0010\u0002\u00c0\u00c1\u0005%\u0013\u0002\u00c1",
    "B\u0003\u0002\u0002\u0002\u00c2\u00c3\u0005\u001d\u000f\u0002\u00c3",
    "\u00c4\u0005\u001f\u0010\u0002\u00c4\u00c5\u0005)\u0015\u0002\u00c5",
    "D\u0003\u0002\u0002\u0002\u00c6\u00c7\u0005\u0005\u0003\u0002\u00c7",
    "\u00c8\u0005\u000b\u0006\u0002\u00c8\u00c9\u0005)\u0015\u0002\u00c9",
    "\u00ca\u0005/\u0018\u0002\u00ca\u00cb\u0005\u000b\u0006\u0002\u00cb",
    "\u00cc\u0005\u000b\u0006\u0002\u00cc\u00cd\u0005\u001d\u000f\u0002\u00cd",
    "F\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007@\u0002\u0002\u00cfH\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\u0007@\u0002\u0002\u00d1\u00d2\u0007",
    "?\u0002\u0002\u00d2J\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007>\u0002",
    "\u0002\u00d4L\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007>\u0002\u0002",
    "\u00d6\u00d7\u0007?\u0002\u0002\u00d7N\u0003\u0002\u0002\u0002\u00d8",
    "\u00d9\u0007?\u0002\u0002\u00d9P\u0003\u0002\u0002\u0002\u00da\u00db",
    "\u0007>\u0002\u0002\u00db\u00dc\u0007@\u0002\u0002\u00dcR\u0003\u0002",
    "\u0002\u0002\u00dd\u00de\u0007-\u0002\u0002\u00deT\u0003\u0002\u0002",
    "\u0002\u00df\u00e0\u0007/\u0002\u0002\u00e0V\u0003\u0002\u0002\u0002",
    "\u00e1\u00e2\u0007*\u0002\u0002\u00e2X\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0007+\u0002\u0002\u00e4Z\u0003\u0002\u0002\u0002\u00e5\u00e6",
    "\u0007.\u0002\u0002\u00e6\\\u0003\u0002\u0002\u0002\u00e7\u00e8\u0005",
    "\u0003\u0002\u0002\u00e8\u00e9\u0005)\u0015\u0002\u00e9\u00ea\u0005",
    ")\u0015\u0002\u00ea\u00eb\u0005%\u0013\u0002\u00eb\u00ec\u0005\u0013",
    "\n\u0002\u00ec\u00ed\u0005\u0005\u0003\u0002\u00ed\u00ee\u0005+\u0016",
    "\u0002\u00ee\u00ef\u0005)\u0015\u0002\u00ef\u00f0\u0005\u000b\u0006",
    "\u0002\u00f0\u00f1\u0007a\u0002\u0002\u00f1\u00f2\u0005\u000b\u0006",
    "\u0002\u00f2\u00f3\u00051\u0019\u0002\u00f3\u00f4\u0005\u0013\n\u0002",
    "\u00f4\u00f5\u0005\'\u0014\u0002\u00f5\u00f6\u0005)\u0015\u0002\u00f6",
    "\u00f7\u0005\'\u0014\u0002\u00f7^\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\u0005\u0003\u0002\u0002\u00f9\u00fa\u0005)\u0015\u0002\u00fa\u00fb",
    "\u0005)\u0015\u0002\u00fb\u00fc\u0005%\u0013\u0002\u00fc\u00fd\u0005",
    "\u0013\n\u0002\u00fd\u00fe\u0005\u0005\u0003\u0002\u00fe\u00ff\u0005",
    "+\u0016\u0002\u00ff\u0100\u0005)\u0015\u0002\u0100\u0101\u0005\u000b",
    "\u0006\u0002\u0101\u0102\u0007a\u0002\u0002\u0102\u0103\u0005\u001d",
    "\u000f\u0002\u0103\u0104\u0005\u001f\u0010\u0002\u0104\u0105\u0005)",
    "\u0015\u0002\u0105\u0106\u0007a\u0002\u0002\u0106\u0107\u0005\u000b",
    "\u0006\u0002\u0107\u0108\u00051\u0019\u0002\u0108\u0109\u0005\u0013",
    "\n\u0002\u0109\u010a\u0005\'\u0014\u0002\u010a\u010b\u0005)\u0015\u0002",
    "\u010b\u010c\u0005\'\u0014\u0002\u010c`\u0003\u0002\u0002\u0002\u010d",
    "\u010e\u0005\u0003\u0002\u0002\u010e\u010f\u0005)\u0015\u0002\u010f",
    "\u0110\u0005)\u0015\u0002\u0110\u0111\u0005%\u0013\u0002\u0111\u0112",
    "\u0005\u0013\n\u0002\u0112\u0113\u0005\u0005\u0003\u0002\u0113\u0114",
    "\u0005+\u0016\u0002\u0114\u0115\u0005)\u0015\u0002\u0115\u0116\u0005",
    "\u000b\u0006\u0002\u0116\u0117\u0007a\u0002\u0002\u0117\u0118\u0005",
    ")\u0015\u0002\u0118\u0119\u00053\u001a\u0002\u0119\u011a\u0005!\u0011",
    "\u0002\u011a\u011b\u0005\u000b\u0006\u0002\u011bb\u0003\u0002\u0002",
    "\u0002\u011c\u011d\u0005\u0005\u0003\u0002\u011d\u011e\u0005\u000b\u0006",
    "\u0002\u011e\u011f\u0005\u000f\b\u0002\u011f\u0120\u0005\u0013\n\u0002",
    "\u0120\u0121\u0005\u001d\u000f\u0002\u0121\u0122\u0005\'\u0014\u0002",
    "\u0122\u0123\u0007a\u0002\u0002\u0123\u0124\u0005/\u0018\u0002\u0124",
    "\u0125\u0005\u0013\n\u0002\u0125\u0126\u0005)\u0015\u0002\u0126\u0127",
    "\u0005\u0011\t\u0002\u0127d\u0003\u0002\u0002\u0002\u0128\u0129\u0005",
    "\u0007\u0004\u0002\u0129\u012a\u0005\u001f\u0010\u0002\u012a\u012b\u0005",
    "\u001d\u000f\u0002\u012b\u012c\u0005)\u0015\u0002\u012c\u012d\u0005",
    "\u0003\u0002\u0002\u012d\u012e\u0005\u0013\n\u0002\u012e\u012f\u0005",
    "\u001d\u000f\u0002\u012f\u0130\u0005\'\u0014\u0002\u0130f\u0003\u0002",
    "\u0002\u0002\u0131\u0132\u0005\'\u0014\u0002\u0132\u0133\u0005\u0013",
    "\n\u0002\u0133\u0134\u00055\u001b\u0002\u0134\u0135\u0005\u000b\u0006",
    "\u0002\u0135h\u0003\u0002\u0002\u0002\u0136\u0137\u0005\u0019\r\u0002",
    "\u0137\u0138\u0005\u0013\n\u0002\u0138\u0139\u0005\'\u0014\u0002\u0139",
    "\u013a\u0005)\u0015\u0002\u013a\u013b\u0007a\u0002\u0002\u013b\u013c",
    "\u0005\u0003\u0002\u0002\u013c\u013d\u0005!\u0011\u0002\u013d\u013e",
    "\u0005!\u0011\u0002\u013e\u013f\u0005\u000b\u0006\u0002\u013f\u0140",
    "\u0005\u001d\u000f\u0002\u0140\u0141\u0005\t\u0005\u0002\u0141j\u0003",
    "\u0002\u0002\u0002\u0142\u0143\u0005\u0013\n\u0002\u0143\u0144\u0005",
    "\r\u0007\u0002\u0144\u0145\u0007a\u0002\u0002\u0145\u0146\u0005\u001d",
    "\u000f\u0002\u0146\u0147\u0005\u001f\u0010\u0002\u0147\u0148\u0005)",
    "\u0015\u0002\u0148\u0149\u0007a\u0002\u0002\u0149\u014a\u0005\u000b",
    "\u0006\u0002\u014a\u014b\u00051\u0019\u0002\u014b\u014c\u0005\u0013",
    "\n\u0002\u014c\u014d\u0005\'\u0014\u0002\u014d\u014e\u0005)\u0015\u0002",
    "\u014e\u014f\u0005\'\u0014\u0002\u014fl\u0003\u0002\u0002\u0002\u0150",
    "\u0152\u0007<\u0002\u0002\u0151\u0150\u0003\u0002\u0002\u0002\u0151",
    "\u0152\u0003\u0002\u0002\u0002\u0152\u0154\u0003\u0002\u0002\u0002\u0153",
    "\u0155\u0007%\u0002\u0002\u0154\u0153\u0003\u0002\u0002\u0002\u0154",
    "\u0155\u0003\u0002\u0002\u0002\u0155\u0157\u0003\u0002\u0002\u0002\u0156",
    "\u0158\t\u001c\u0002\u0002\u0157\u0156\u0003\u0002\u0002\u0002\u0158",
    "\u0159\u0003\u0002\u0002\u0002\u0159\u0157\u0003\u0002\u0002\u0002\u0159",
    "\u015a\u0003\u0002\u0002\u0002\u015an\u0003\u0002\u0002\u0002\u015b",
    "\u015c\t\u001d\u0002\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d",
    "\u015e\b8\u0002\u0002\u015ep\u0003\u0002\u0002\u0002\u0006\u0002\u0151",
    "\u0154\u0159\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function conditionLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

conditionLexer.prototype = Object.create(antlr4.Lexer.prototype);
conditionLexer.prototype.constructor = conditionLexer;

Object.defineProperty(conditionLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

conditionLexer.EOF = antlr4.Token.EOF;
conditionLexer.SET = 1;
conditionLexer.REMOVE = 2;
conditionLexer.ADD = 3;
conditionLexer.DELETE = 4;
conditionLexer.AND = 5;
conditionLexer.OR = 6;
conditionLexer.NOT = 7;
conditionLexer.BETWEEN = 8;
conditionLexer.GT = 9;
conditionLexer.GE = 10;
conditionLexer.LT = 11;
conditionLexer.LE = 12;
conditionLexer.EQ = 13;
conditionLexer.NE = 14;
conditionLexer.PLUS = 15;
conditionLexer.MINUS = 16;
conditionLexer.LPAREN = 17;
conditionLexer.RPAREN = 18;
conditionLexer.COMMA = 19;
conditionLexer.ATTR_EXIST = 20;
conditionLexer.ATTR_NOT_EXIST = 21;
conditionLexer.ATTR_TYPE = 22;
conditionLexer.BEGINS_WITH = 23;
conditionLexer.CONTAINS = 24;
conditionLexer.SIZE = 25;
conditionLexer.LIST_APPEND = 26;
conditionLexer.IF_NOT_EXISTS = 27;
conditionLexer.OPERAND = 28;
conditionLexer.WS = 29;

conditionLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

conditionLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

conditionLexer.prototype.literalNames = [ null, null, null, null, null, 
                                          null, null, null, null, "'>'", 
                                          "'>='", "'<'", "'<='", "'='", 
                                          "'<>'", "'+'", "'-'", "'('", "')'", 
                                          "','" ];

conditionLexer.prototype.symbolicNames = [ null, "SET", "REMOVE", "ADD", 
                                           "DELETE", "AND", "OR", "NOT", 
                                           "BETWEEN", "GT", "GE", "LT", 
                                           "LE", "EQ", "NE", "PLUS", "MINUS", 
                                           "LPAREN", "RPAREN", "COMMA", 
                                           "ATTR_EXIST", "ATTR_NOT_EXIST", 
                                           "ATTR_TYPE", "BEGINS_WITH", "CONTAINS", 
                                           "SIZE", "LIST_APPEND", "IF_NOT_EXISTS", 
                                           "OPERAND", "WS" ];

conditionLexer.prototype.ruleNames = [ "A", "B", "C", "D", "E", "F", "G", 
                                       "H", "I", "J", "K", "L", "M", "N", 
                                       "O", "P", "Q", "R", "S", "T", "U", 
                                       "V", "W", "X", "Y", "Z", "SET", "REMOVE", 
                                       "ADD", "DELETE", "AND", "OR", "NOT", 
                                       "BETWEEN", "GT", "GE", "LT", "LE", 
                                       "EQ", "NE", "PLUS", "MINUS", "LPAREN", 
                                       "RPAREN", "COMMA", "ATTR_EXIST", 
                                       "ATTR_NOT_EXIST", "ATTR_TYPE", "BEGINS_WITH", 
                                       "CONTAINS", "SIZE", "LIST_APPEND", 
                                       "IF_NOT_EXISTS", "OPERAND", "WS" ];

conditionLexer.prototype.grammarFileName = "condition.g4";



exports.conditionLexer = conditionLexer;

