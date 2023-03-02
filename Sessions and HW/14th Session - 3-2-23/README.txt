Dallimi mes SQL dhe noSQL db?
SQL kan relacione, kurse noSQL nuk kane.

DDL vs DML?

PostGreSQL connection

Na duhet driver per me komuniku gjuha programuese me db.
Query jane skripta ku i kallxojne nje DBMS cka me bo.
ORM sherben me konvertu(pasqyru) klasen tone apo file ne SQL Query dhe me dite komplet klasen me interpretu dhe me bo run.
ORM dine me konvertu komplet nje obj qe e kemi kriju me map ne SQL.
Secila gjuhe i ka ORM te veta psh php eloquent, springboot hypernetus, .NET entity framework, node typeorm, microorm, prism me se shumti perdoret typeorm.
https://typeorm.io/

Entity
Nje klase ku ne i tregojme typeorm qe e krijojme klasen kur e deklarojme si entitet dhe ajo merr emrin e nje tabele.
Psh deklarojme klasen User ajo eshte entitet dhe e krijome si tabel me te njejtin emer. Kjo klase mund te kete atr si name, age, passw kto i merr tabela si columns.
Ne ketu bejme relacion mes User dhe nje klase tjeter Role atehere ktu bejme nje FK ku mapojme tabelat dhe krijojme relation. 

Seeds
Jane te dhenat qe jane elementare per te startu nje sistem. Ato mundesojne me bo push te dhenat ende pa u startu aplikacioni dmth bojme popullimin si fillim. 
Psh nje sistem per menaxhim te kurseve. Ky kurs ka nje Admin qe i shton llojet e kurseve keshtu qe ai duhet automatikisht te kete nje acc te veten keshtu qe hala 
pa startu app krijojme strukturen e db. 
const user1 = new User();
//save metode e typeorm
user1.save();

Migration
Menaxhimi komplet i workflow te klasave dhe property tone. Psh kur na duhet me bo ndryshime atehere krijojme migration dhe shtohen values apo ato fields tjera.
Na duhet kur ja nisin users edhe app me interact edhe dojna me u rikthy ne verzionet e meparshme te db. Po ashtu ka shume features si testime etj.

typeorm.pdf liber 