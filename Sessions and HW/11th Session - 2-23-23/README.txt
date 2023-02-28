Cka jon callback function?

Promise
Klase globale nga paketa UTL. 2 param resolve dhe reject. 

//resolve kthen then, kurse reject catch
const promis = new Promise ((resolve, reject) => {
    const i =1;
    if(i===1){
        resolve()
    }else{
        reject()
    }
});
console.log(promis)

promis.then(function(){
    console.log('Pass');
}).catch(function(){
    console.log('Error')
})

Promise perdoret ku kodi eshte asinkron psh file system, third party paketa ose ndonje resurs i jashtem qe bejme fetch(fetch dhe axios), mbrenda serverit tone gjithashtu sepse
eshte dicka jashte env te node.

How does programming language communicate with database?
Permes driver-ave POST, Port, username etj

Pse eshte bo TypeScript?
Se js nuk ka pase Data Type e me ja shtu ato.