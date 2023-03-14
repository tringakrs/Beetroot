ne nestjs fillimisht krijojme nje servis tani kete modul e bejme import tek app module apo super moduli

dto - data transfer obj
kur shkon req nga client shkon ne kontroller dhe aty kemi nje dto ku i qojme parametrat dhe i validon psh name me qene string amo nese nuk validohen e kthen req pa hi neper servise apo repo me humb kohe.

a token typically refers to a string of characters that serves as a unit of data in a programming language, operating system, or network protocol.
tokens may be used to represent authentication credentials or access rights.

In computer programming, annotations are metadata added to source code that provide additional information about the code. Annotations are typically used to convey information to other developers 
or tools that process the code, such as compilers, code analyzers, or frameworks.

presmission vs role based
kur e kemi nje sistem qe e dime perafersisht nr e roleve dhe nuk ka shume features preferohet me bo role based se menaxhohet me leht.
psh kemi nje feature per financa qe duhet me u menaxhu vetem nga admin psh me annotation @Role("Admin")
kemi 4 feature qe nuk guxojme krejt rolet e user me pase qasje psh ne conatact all, order menager dhe ne invoice admin, menager
kemi tabelen user

presmission based eshte me komplekse se edhe mbrenda feature mundemi dicka me pase qe mundemi me pa apo jo psh te financa ka te drejt me read por jo me ndrru ngjyren e pychart po ashtu edhe mbrenda admin me i bo disa admina.

CKA KENA BO SOT NE KOD TE PROJEKTI
kena shtu fields te user ne kod, kena kriju project edhe per kete tabel kena kriju entitet, enums, dtos, interface, model edhe e kena thirre ne app module 