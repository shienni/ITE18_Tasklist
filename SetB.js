const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if (display.value.includes('/0')) {
        display.value = 'undefined';
    } else {
        display.value = result;
    }
}   