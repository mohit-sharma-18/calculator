let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

let screenValue = '';

for (elem of buttons) {
    elem.addEventListener('click', (e) => {
        buttonValue = e.target.innerText;
        console.log('button value is', buttonValue);
        if (buttonValue == 'AC') {
            screenValue = '';
            screen.value = screenValue;
            console.log('screen is reset');
        }
        else if (buttonValue == '=') {
            screen.value = eval(screenValue);
            console.log('calculation is done', screenValue);
        }
        else if (buttonValue == 'Del') {
            screenValue = screen.value.slice(0, - 1);
            screen.value = screenValue;
        }

        else {
            screenValue += buttonValue;
            screen.value = screenValue;
        }
    })
};
