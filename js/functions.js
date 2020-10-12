function utilBtnPressed(modifier) {
    if (keyMap[modifier] && getElement('display').innerHTML.endsWith(modifier))
        return;

    addToDisplay(modifier);
}

const Clear = () => getElement('display').innerHTML = ' ';

const Backspace = () => {
    let screen = getElement('display');
    screen.innerHTML = screen.innerHTML.slice(0, -1);
}

function Answer() {
    let screen = getElement('display');
    answer = math.evaluate(screen.innerText);

    getElement('history').innerHTML += `${screen.innerHTML} = ${answer}<br>`
    screen.innerHTML = answer;
}

function onInput(value) {
    if (answer) {
        answer = null;
        Clear();
    }

    if (value >= 0 && value <= 9) return addToDisplay(value);
    if (keyMap[value]) keyMap[value](value);
}

var keyMap = {
    '=': Answer,
    'c': Clear,
    'Backspace': Backspace,
    'B': Backspace,
    '+': utilBtnPressed,
    '-': utilBtnPressed,
    '*': utilBtnPressed,
    '/': utilBtnPressed,
    '.': utilBtnPressed,
}

var answer = null;

const getElement = (id) => document.getElementById(id);
const addToDisplay = (value) => getElement('display').innerHTML += value;

document.addEventListener('keydown', (e) => onInput(e.key), true);

const callback = (e) => e.target.tagName === 'BUTTON' ? onInput(e.target.innerHTML) : null;

if (document.addEventListener)
   document.addEventListener('click', callback, false);
else
    document.attachEvent('onclick', callback);