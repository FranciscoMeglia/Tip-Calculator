// VARIABLES

const billInput = document.getElementById("bill");
const numberOfPeopleInput = document.getElementById("people");
const custom = document.getElementById("custom")
const tipPerPerson = document.getElementById("tip");
const total = document.getElementById("total");
var porcentage = 0 ;

const calculateTotalPerPerson = () => {
  const billValue = parseFloat(billInput.value);
  const numberOfPeopleValue = parseFloat(numberOfPeopleInput.value);

  if (isNaN(billValue) || isNaN(numberOfPeopleValue)) {
    // if the value is not a number return this
    total.innerHTML = "$0.00";
  } else {
    if (porcentage <= 0){
        const resultado = billValue  / numberOfPeopleValue;
        total.innerHTML = "$" + resultado.toFixed(2);
    } else {
        const resultado = ((billValue * porcentage) + billValue) / numberOfPeopleValue;
        const tipPP = (((billValue * porcentage) + billValue) - billValue) / numberOfPeopleValue;
        tipPerPerson.innerHTML = "$" + tipPP.toFixed(2);
        total.innerHTML = "$" + resultado.toFixed(2); // Redondear el resultado a dos decimales
    }
  }
};

billInput.addEventListener("input", calculateTotalPerPerson);
numberOfPeopleInput.addEventListener("input", calculateTotalPerPerson);
custom.addEventListener("input" , calculateTotalPerPerson)
calculateTotalPerPerson()

// PORCENTAGES
function cinco() {
    porcentage = 0.05
    calculateTotalPerPerson()
}

function diez() {
    porcentage = 0.10
    calculateTotalPerPerson()
}

function quince() {
    porcentage = 0.15
    calculateTotalPerPerson()
}

function veinticinco() {
    porcentage = 0.25
    calculateTotalPerPerson()
}

function cincuenta() {
    porcentage = 0.50
    calculateTotalPerPerson()
}

function customNumber() {
    const customInput = parseFloat(custom.value)
    porcentage = customInput / 100
    calculateTotalPerPerson()
}

const reset = () => {

    total.innerHTML = "$0.00"
    tipPerPerson.innerHTML = "$0.00"
    porcentage = 0;
    billInput.value = "";
    numberOfPeopleInput.value = "";
}