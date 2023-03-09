//Detyre
// Shkruani një ts file ku ka metoden  që merr dy numra si parameter nga përdoruesi dhe llogarit shumën, zbritjen, shumezimin dhe pjestimin e tyre. 
// Më pas programi duhet të printojë rezultatet në terminal. Parametrat duhet te validohen nese jane numra.
function calculate(num1: number, num2: number): void {
    // if (isNaN(num1) || isNaN(num2)) {
    //   console.log("Ju lutem vendosni dy numra të vlefshëm!");
    //   return;
    // }
    //NUK KA NEVOJE PER KTO SE VET E VALIDON MASI ME TYPE
  
    const shuma = num1 + num2;
    const zbritja = num1 - num2;
    const shumezim = num1 * num2;
    const pjesetim = num1 / num2;
  
    console.log(`Shuma: ${shuma}`);
    console.log(`Zbritja: ${zbritja}`);
    console.log(`Shumezimi: ${shumezim}`);
    console.log(`Pjestimi: ${pjesetim}`);
    return;//mundemi me lon kete keyword nese si thojme me return dicka
  }
  // Përdoruesi vendos dy numra dhe i kalon ato si argumente te funksioni "calculate"
  calculate(5, 3);
  