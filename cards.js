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

var re = new RegExp ("^[0-9]+$");
var re2 = new RegExp ("^[a-zA-Z ]+$");



inputName.addEventListener("input", (e) => {
    cardName.innerHTML = e.target.value.toUpperCase();
    if(re2.test(inputName.value)) {
        document.getElementById("errorname").style.visibility = "hidden";
    } else {
        document.getElementById("errorname").style.visibility = "visible";
    }
});

inputNumber.addEventListener("input", (e) => {
    cardNumber.innerHTML = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ');
    if(re.test(inputNumber.value)) {
        document.getElementById("errornum").style.visibility = "hidden";
    } else {
        document.getElementById("errornum").style.visibility = "visible";
    }
});

dateMonth.addEventListener("input", (e) => {
    month.innerHTML = e.target.value.replace(/[^\dA-Z]/g, '');
    if(re.test(dateMonth.value)) {
        document.getElementById("errordate").style.visibility = "hidden";
    } else {
        document.getElementById("errordate").style.visibility = "visible";
    }
})

dateYear.addEventListener("input", (e) => {
    year.innerHTML = e.target.value.replace(/[^\dA-Z]/g, '');
    if(re.test(dateYear.value)) {
        document.getElementById("errordate").style.visibility = "hidden";
    } else {
        document.getElementById("errordate").style.visibility = "visible";
    }
})

cvcInput.addEventListener("input", (e) => {
    CVC.innerHTML = e.target.value.replace(/[^\dA-Z]/g, '');
    if(re.test(cvcInput.value)) {
        document.getElementById("errorcvc").style.visibility = "hidden";
    } else {
        document.getElementById("errorcvc").style.visibility = "visible";
    }
})

//when button is pressed check all fields filled and (&&) no errors if true execute function and transform container to "thank you we've added your card details"//