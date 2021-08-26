const buttonsNumbers = document.querySelectorAll('button');
const inputVisor = document.querySelector('input');

// Control Buttons
const buttonsControls = document.querySelectorAll('a');
const buttonClear = document.querySelector('.clear');
const buttonCalculate = document.querySelector('.calculate');

const viewNumbersInVisor = () => {
    buttonsNumbers.forEach((numbers) => {
        numbers.addEventListener('click', () => {
            inputVisor.value += numbers.textContent;
        });
    });
}
viewNumbersInVisor();

const checkedInputVisor = () => {
    buttonsControls.forEach((buttons) => {
        buttons.addEventListener('click', () => {
            if (inputVisor.value === "") {
                window.alert('Insira ao menos um valor');
            } else {
                inputVisor.value += buttons.textContent;
            }
        });
    });
}
checkedInputVisor();

const calculate = () => {
    buttonCalculate.addEventListener('click', () => {
        inputVisor.value = eval(inputVisor.value);
    });
}
calculate();

const clearInput = () => {
    buttonClear.addEventListener('click', () => {
        inputVisor.value = "";
    });
}
clearInput();