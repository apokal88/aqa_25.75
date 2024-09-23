function divide (numerator, denominator) {
    try {
        if (denominator == 0){
            throw new Error("Denominator is equal to Zero");
        }
        
        if (isNaN(numerator) || isNaN(denominator)) {
            throw new Error("Numerator or denominator is not a number");
        }

        return numerator / denominator;
        
     } catch(error) {
        console.log(error);
     } finally {
        console.log("Робота завершена");
     }
}
let result1 = divide(3,"s");
console.log(result1);

let result2 = divide(3,0);
console.log(result2);

let result3 = divide(4,2);
console.log(result3);

