// bool for answered state
let answered = false;

// trigger when number button is pressed
function BtnPressed(PressedNumber) {
    // console.log("clicked number " + PressedNumber);

    if (answered) {
        answered = false;
        Clear();
    }

    document.getElementById("scherm").innerHTML += PressedNumber;
}

// trigger when utility button is pressed
function UBtnPressed(PressedUtil) {
    // console.log("clicked util " + PressedUtil);
    if (ContainsUtility(PressedUtil)) {
        return;
    }

    document.getElementById("scherm").innerHTML += PressedUtil;
}

// check if last character was a utility returns true/false
function ContainsUtility(PressedUtil) {
    let screen = document.getElementById("scherm");

    if (PressedUtil == ".") {
        if (screen.innerHTML.includes(".")) {
            return true;
        }
    }

    if (screen.innerHTML.endsWith("+") || 
        screen.innerHTML.endsWith("*") || 
        screen.innerHTML.endsWith("/") || 
        screen.innerHTML.endsWith("-")) {
        return true;
    }

    return false;
}

// clear calculator screen
function Clear() {
    // console.log("cleared the screen");
    document.getElementById("scherm").innerHTML = "";
}

// display answer and add to history
function Answer() {
    let screen = document.getElementById("scherm");
    let history = document.getElementById("history");
    var answer = eval(screen.innerText);
    // console.log("answer is: " + answer);
    answered = true;
    history.innerHTML += screen.innerHTML + "=" + answer + "<br>"
    screen.innerHTML = answer;
}

// remove last character 
function Backspace() {
    let screen = document.getElementById("scherm");
    screen.innerHTML = screen.innerHTML.slice(0, -1);
}

// listen to keydown event
document.addEventListener("keydown", onKeyDown, true);

// see which key is pressed
function onKeyDown(e) {
    switch (e.which) {
        case 8:
            Backspace();
            break;
        case 48:
            BtnPressed(0);
            break;
        case 49:
            BtnPressed(1);
            break;
        case 50:
            BtnPressed(2);
            break;
        case 51:
            BtnPressed(3);
            break;
        case 52:
            BtnPressed(4);
            break;
        case 53:
            BtnPressed(5);
            break;
        case 54:
            BtnPressed(6);
            break;
        case 55:
            BtnPressed(7);
            break;
        case 56:
            BtnPressed(8);
            break;
        case 57:
            BtnPressed(9);
            break;
        case 67:
            Clear();
            break;
        case 106:
            UBtnPressed("*");
            break;
        case 107:
            UBtnPressed("+");
            break;
        case 109:
            UBtnPressed("-");
            break;
        case 111:
            UBtnPressed("/");
            break;
        case 187:
            Answer();
            break;
        case 190:
            UBtnPressed(".");
    }
}