TypeScipt e ka static type si Java, C#,C++ etj.
Dinamike Python, PHP.
Nuk len me ndryshu type.

Type te TS tuples, enum, function, object, alias/interface etj.

JS prototype language e TS eshte OOP.
TS ka return type.

:any sa ma pak me lon neper projekte se nuk caktohet type
:undefined gjun error amo nese e bojme const i:undefined = undefined; bon

app.ts
const i:number =3;//caktojme data type
console.log(i);

kemi disa loje te return type per obj
//Interface edhe duhet I perpara emerimit psh Itype
interface Itype{
    value:string,
    num:number,
}

const obj1:Itype  = {value:'value 1', num:3}

//Objekte
const obj2  = {value:'value 1', num:3}

/*
difference between types and interfaces
types are like type aliases, where we create new types or new name for types
interfaces are almost the same , but we use interfaces for objects , and types for functions and complex methods
*/
//Type

//Detyre
Shkruani një ts file ku ka metoden  që merr dy numra si parameter nga përdoruesi dhe llogarit shumën, zbtitjen, shumzimin dhe pjestimin e tyre. 
Më pas programi duhet të printojë rezultatet në terminal. Parametrat duhet te validohen nese jane numra.

TS e ka qe mundesh 1 type amo per 2 type kshtu qe sintaksa
const x:number 


Detyre Shtepie
Krijoni një interface file quajtur “Shape” me atributet e mëposhtme:
name (string)
color (string)
Krijoni dy klasa TypeScript quajtur “Rectangle” dhe “Circle” që implementojnë interface “Shape”.
Klasa “Rectangle” duhet të ketë atributet shtesë “width” dhe “height”, dhe një konstruktor që inicializon këto atributet së bashku me atributet “name” dhe “color” që trashëgon nga interface “Shape”. Ajo gjithashtu duhet të ketë një metodë quajtur “area” që kthen sipërfaqen e drejtkëndëshit this.width * this.height;
Klasa “Circle” duhet të ketë një atribut shtesë “radius”, dhe një konstruktor që inicializon këtë atribut së bashku me atributet “name” dhe “color” që trashëgon nga interface “Shape”. Ajo gjithashtu duhet të ketë një metodë quajtur “area” që kthen sipërfaqen e rrethit (e cila është e barabartë me Math.PI * Math.pow(this.radius, 2);
Per gjdo variabel qe deklarohet te vendosen return type.