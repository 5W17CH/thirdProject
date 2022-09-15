//only run the function if every field is filled//

const cardNumber = document.getElementById("cardnumber");
const cardName = document.getElementById("cardname");
const completeDate = document.getElementById("expire");
const Cvc = document.getElementById("cvc");

var finalName = document.getElementById("inputname");
var finalNum = document.getElementById("inputnum");
var finalMonth = document.getElementById("datemonth");
var finalYear = document.getElementById("dateyear");
var finalCvc = document.getElementById("cvcinput");


function start() {
    cardName.innerHTML = finalName.value.toUpperCase();
    cardNumber.innerHTML = finalNum.value;
    completeDate.innerHTML = finalMonth.value + "/" + finalYear.value;
    Cvc.innerHTML = finalCvc.value;
}

function validate() {
    finalName.value = finalName.value.replace(/[^a-zA-Z\s]+/, '');
}

function validateNum() {
    finalNum.value = finalNum.value.replace(/[^0-9\s]+/, '');
    finalMonth.value = finalMonth.value.replace(/[^0-9]+/, '');
    finalYear.value = finalYear.value.replace(/[^0-9]+/, '');
    finalCvc.value = finalCvc.value.replace(/[^0-9]+/, '');
}


