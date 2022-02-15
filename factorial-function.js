// let factorial = 1;
// for (let i=1; i<=5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

// function multiFactors(num){
//     let factors = 1;
//     for (let i = 1; i<=num; i++){
//         factors = factors * i;
//     }
//     return factors;
// }

// var firstFactor = 7;
// console.log('factorial of 7 is ', multiFactors(7));


function getFactorial(factorialNum){
    let factorial = 1;
    let i = 1;
    while(i<=factorialNum){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorianNum = 8;
const myFactorial = getFactorial(myFactorianNum);
console.log(myFactorial);