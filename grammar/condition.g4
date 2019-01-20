grammar condition;

condition
  : leftOp=OPERAND comp=comparator rightOp=OPERAND      #compCond
  | op=OPERAND BETWEEN lb=OPERAND AND ub=OPERAND        #betweenCond
  | condfunc                                            #funcCond
  | leftCond=condition bit=bitwise rightCond=condition  #bitCond
  | NOT condition                                       #notCond
  | LPAREN condition RPAREN                             #parenCond
  ;

comparator
  : EQ
  | NE
  | LT
  | LE
  | GT
  | GE
  ;

bitwise
  : AND
  | OR
  ;

condfunc
  : ATTR_EXIST LPAREN path=OPERAND RPAREN                   #attrExistsCondFunc
  | ATTR_NOT_EXIST LPAREN path=OPERAND RPAREN               #attrNotExistsCondFunc
  | ATTR_TYPE LPAREN path=OPERAND COMMA op=OPERAND RPAREN   #attrTypeCondFunc
  | BEGINS_WITH LPAREN path=OPERAND COMMA op=OPERAND RPAREN #beginsWithCondFunc
  | CONTAINS LPAREN path=OPERAND COMMA op=OPERAND RPAREN    #containsCondFunc
  | SIZE LPAREN path=OPERAND RPAREN                         #sizeCondFunc
  ;

fragment A : [aA]; // match either an 'a' or 'A'
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];

SET             : S E T ;
REMOVE          : R E M O V E ;
ADD             : A D D ;
DELETE          : D E L E T E ;
AND             : A N D ;
OR              : O R ;
NOT             : N O T;
BETWEEN         : B E T W E E N;
GT              : '>' ;
GE              : '>=' ;
LT              : '<' ;
LE              : '<=' ;
EQ              : '=' ;
NE              : '<>' ;
PLUS            : '+' ;
MINUS           : '-' ;
LPAREN          : '(' ;
RPAREN          : ')' ;
COMMA           : ',' ;
ATTR_EXIST      : A T T R I B U T E '_' E X I S T S ;
ATTR_NOT_EXIST  : A T T R I B U T E '_' N O T '_' E X I S T S ;
ATTR_TYPE       : A T T R I B U T E '_' T Y P E ;
BEGINS_WITH     : B E G I N S '_' W I T H ;
CONTAINS        : C O N T A I N S ;
SIZE            : S I Z E ;
LIST_APPEND     : L I S T '_' A P P E N D ;
IF_NOT_EXISTS   : I F '_' N O T '_' E X I S T S ;

OPERAND : ':'? '#'? [0-9a-zA-Z.]+ ;

WS : [ \r\n] -> skip ;
