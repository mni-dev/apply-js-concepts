// items to Hali
function itemsToHali(items){
    var hali = items / 4;
    return hali;
}

var myItems = 40;
myHali = itemsToHali(myItems);
console.log(myHali);

var youritems = 125;
var yourHali = itemsToHali(youritems);
console.log(yourHali);

// ml to liter
function mlToLiter(ml){
    var liter = ml / 1000;
    return liter;
}

var waterMl = 5500;
var waterLiter = mlToLiter (waterMl);
console.log(waterLiter);
