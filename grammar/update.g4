grammar update;

update
  : updateaction+
  ;

updateaction
  : SET setaction (COMMA setaction)*            #setUpdate
  | REMOVE removeaction (COMMA removeaction)*   #removeUpdate
  | ADD addaction (COMMA addaction)*            #addUpdate
  | DELETE deleteaction (COMMA deleteaction)*   #deleteUpdate
  ;

setaction
  : path=OPERAND EQ result=setvalue             #setAction
  ;

removeaction
  : path=OPERAND                                #removeAction
  ;

addaction
  : path=OPERAND value=OPERAND                  #addAction
  ;

deleteaction
  : path=OPERAND value=OPERAND                  #deleteAction
  ;

setvalue
  : leftVal=setvalue PLUS rightVal=setvalue     #incSetValue
  | leftVal=setvalue MINUS rightVal=setvalue    #decSetValue
  | setfunc                                     #setFuncSetValue
  | op=OPERAND                                  #valSetValue
  ;

setfunc
  : IF_NOT_EXISTS LPAREN path=OPERAND COMMA val=OPERAND RPAREN    #ineSetFunc
  | LIST_APPEND LPAREN list1=OPERAND COMMA list2=OPERAND RPAREN   #laSetFunc
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
EQ              : '=' ;
PLUS            : '+' ;
MINUS           : '-' ;
LPAREN          : '(' ;
RPAREN          : ')' ;
COMMA           : ',' ;
LIST_APPEND     : L I S T '_' A P P E N D ;
IF_NOT_EXISTS   : I F '_' N O T '_' E X I S T S ;

OPERAND : ':'? '#'? [0-9a-zA-Z.]+ ;

WS : [ \r\n] -> skip ;
