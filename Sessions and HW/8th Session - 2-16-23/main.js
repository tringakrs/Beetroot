//Konverto Object ne Array nese kemi objekt {name: “Albert”, age: 20} metoda duhet te kthej [[“name”, “Albert”], [“age”, 20]]

const person = {
    name: 'Albert',
    age: 20
};

const entries = Object.entries(person);

console.log(entries);


//Shkruaj nje funksion qe ka emrin removeDuplicates dhe hiq te gjitha vlerat qe riperseriten brenda nje array p.sh [1, 2, 2, 3, 4, 2] fuhet te kthehet [1, 2, 3, 4]

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  const arr = [1, 2, 2, 3, 4, 2];
  const result = removeDuplicates(arr);
  console.log(result);
  //Bojna req qe thojme merrna krejt user qe ekzistojne psh qe jon te bazun me 1 shtet psh nuk kena 
  //nevoje req per scilin user a e ka 1 shtet po i bojna set permes shtetin qe mos 
  //me u perserite edhe na i kthen psh veq per USA nese i lypim