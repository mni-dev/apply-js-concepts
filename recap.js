//Variables
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

//Array
var partners = ['sajid', 'mojid', 'alia'];
var elementCount = partners.length;
var mojidIndex = partners.indexOf('mojid');
partners.push('kawja');
partners.pop();

//Conditionals
if(bookPrice <120){
    console.log('i will buy this book');
}
else{
    console.log('mama, kitchu discount den')
}

//while $ for loop
var i = 0;
while(i <= 17){
    //do some work
    i++;
}

for (var i = 0; i <= 15; i++){
    //do some coding
    console.log(i);
}

// functions
function isMoonUp(){
    if (time >= 19 && time <= 5){
        return true;
    }
    return false;
}

var moonStatus = isMoonUp();
