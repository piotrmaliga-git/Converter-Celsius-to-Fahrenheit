const input = document.querySelector('.section__input');
const output = document.querySelector('.section__output');
const convertButton = document.querySelector('.section__convert-button');
const resetButton = document.querySelector('.section__reset-button');
const changeButton = document.querySelector('.section__change-button');
const C = document.querySelector('.C')
const F = document.querySelector('.F')

const swap = () => {
    if (C.innerHTML === '°C') {
        C.innerHTML = '°F';
        F.innerHTML = '°C';
        document.title = "Converter °F to °C";
        input.placeholder = "°F";

    } else {
        F.innerHTML = '°F';
        C.innerHTML = '°C';
        document.title = "Converter °C to °F";
        input.placeholder = "°C";
    };
};

const reset = () => {
    input.value = '';
    output.innerHTML = '';
}

const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(input.value)) {
        output.style.color = "yellow"
        if (C.innerHTML === '°C') {
            let value = (input.value * 1.8) + 32;
            output.innerHTML = `${input.value}°C to ${value.toFixed(2)}°F`;
        } else {
            let value = (input.value - 32) / 1.8;
            output.innerHTML = `${input.value}°F to ${value.toFixed(2)}°C`;
        }
    } else if (input.value == '') {
        output.style.color = "#993300"
        output.innerHTML = 'Write correct value!';
    } else {
        output.style.color = "#993300"
        output.innerHTML = 'Wrong value!';
    }
}

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);