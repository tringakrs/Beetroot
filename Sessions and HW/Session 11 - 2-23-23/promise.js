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