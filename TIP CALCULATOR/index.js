// VARIABLES
const billInput = document.getElementById("bill");
const numberOfPeopleInput = document.getElementById("people");
const custom = document.getElementById("custom")
const tipPerPerson = document.getElementById("tip");
const total = document.getElementById("total");
var porcentage = 0;

const calculateTotalPerPerson = () => {
    const billValue = parseFloat(billInput.value);
    const numberOfPeopleValue = parseFloat(numberOfPeopleInput.value);

    if (isNaN(billValue) || isNaN(numberOfPeopleValue)) {
        // if the value is not a number return this
        total.innerHTML = "$0.00";
    } else {
        if (porcentage <= 0) {
            const resultado = billValue / numberOfPeopleValue;
            total.innerHTML = "$" + resultado.toFixed(2);
        } else {
            const resultado = ((billValue * porcentage) + billValue) / numberOfPeopleValue;
            const tipPP = (((billValue * porcentage) + billValue) - billValue) / numberOfPeopleValue;
            tipPerPerson.innerHTML = "$" + tipPP.toFixed(2);
            total.innerHTML = "$" + resultado.toFixed(2); 
        }
    }
};

billInput.addEventListener("input", calculateTotalPerPerson);
numberOfPeopleInput.addEventListener("input", calculateTotalPerPerson);
custom.addEventListener("input", calculateTotalPerPerson)
calculateTotalPerPerson()

// PORCENTAGES
const cinco = () => {
    porcentage = 0.05
    calculateTotalPerPerson()
}

const diez = () => {
    porcentage = 0.10
    calculateTotalPerPerson()
}

const quince = () => {
    porcentage = 0.15
    calculateTotalPerPerson()
}

const veinticinco = () => {
    porcentage = 0.25
    calculateTotalPerPerson()
}

const cincuenta = () => {
    porcentage = 0.50
    calculateTotalPerPerson()
}

const customNumber = () => {
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
    custom.value = ""
}