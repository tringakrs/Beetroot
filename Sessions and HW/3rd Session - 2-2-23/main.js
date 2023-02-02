import http from "http";
import {dbCon, test, stringMethod1, stringMethod2, stringMethod3, stringMethod4, stringMethod5, stringMethod6, stringMethod7} from "./dbCon.js"
//importat e moduleve masi e kena ndrru type ne type="module"

const port = 3000;
const localhost = '127.0.0.1';
const server = http.createServer(function (req, res){
})

server.listen(port,localhost,function () {
    // console.log("Metoda dbCon - kthimi i funksionit: "+dbCon);//per me kthy funksionin
    // console.log("Metoda dbCon - kthimi i rezultatit: "+dbCon());//per me kthy rezultatin e metodes
    // console.log('Metoda test: '+test());
    console.log('server listening on port:'+port);
    console.log("Metoda length: "+stringMethod1('length i metodes'));
    console.log("Metoda toUpperCase: "+stringMethod2('hello'));
    console.log("Metoda toLowerCase: "+stringMethod3('HELLO'));
    console.log("Metoda slice: "+stringMethod4('abcdefHELLOsdfj'));
    console.log("Metoda replace: "+stringMethod5("Hello", "Ckemi"));
    console.log("Metoda split: "+stringMethod6("Hello"));
    console.log("Metoda padEnd: "+stringMethod7("Hello"));
})