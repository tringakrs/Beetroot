function dbCon(){   
    console.log(' connected in DB ');
    return null;//per mos me kthy perfuni metodes undefined
}

function test(){
    return "test"
}

function stringMethod1(str1){
    return str1.length;
}

function stringMethod2(str1){
    return str1.toUpperCase();
}

function stringMethod3(str1){
    return str1.toLowerCase();
}

function stringMethod4(str1){
    return str1.slice(6, 11);
}

function stringMethod5(str1){;
    return str1.replace(str1, "Ckemi");;
}

export {dbCon, test, stringMethod1, stringMethod2, stringMethod3, stringMethod4, stringMethod5}