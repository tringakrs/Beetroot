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