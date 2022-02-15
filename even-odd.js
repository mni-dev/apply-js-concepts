// is a number an even number?
function isEven (number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

var myNumber = 158;
var isMyNumber = isEven(myNumber);
console.log(isMyNumber);

// is a number an odd number?
function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}

var herNumber = 1586;
var isHerNumber = isOdd(herNumber);
console.log(isHerNumber);