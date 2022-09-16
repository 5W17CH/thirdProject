const cardName = document.getElementById("cardname");
const cardNumber = document.getElementById("cardnumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const CVC = document.getElementById("cvc");


const inputName = document.getElementById("inputname");
const inputNumber = document.getElementById("inputnumber");
const dateMonth = document.getElementById("datemonth");
const dateYear = document.getElementById("dateyear");
const cvcInput = document.getElementById("cvcinput");

var re = new RegExp (/^[a-zA-Z]+$/);

inputName.addEventListener("input", (e) => {
    cardName.innerHTML = e.target.value.toUpperCase();
});

inputNumber.addEventListener("input", (e) => {
    cardNumber.innerHTML = e.target.value.replace(/(.{4})/g, '$1 ');
    if(re.test(inputNumber.value)) {
        document.getElementById("popi").style.visibility = "visible";
    } else {
        document.getElementById("popi").style.visibility = "hidden";
    }
});

dateMonth.addEventListener("input", (e) => {
    month.innerHTML = e.target.value.replace(/[^\dA-Z]/g, '');
})

dateYear.addEventListener("input", (e) => {
    year.innerHTML = e.target.value.replace(/[^\dA-Z]/g, '');
})

cvcInput.addEventListener("input", (e) => {
    CVC.innerHTML = e.target.value.replace(/[^\dA-Z]/g, '');
})

