function add(a,b){
    let sum = a + b;
}

function subtract(a,b) {
    let diff = a - b;
}

function multiply(a,b){
    let product = a * b;
}

function divide(a,b) {
    let quot= a/b;
}

function operate(a,operator,c) {
    switch (operator) {
        case '+':
            add(a,c);
            break;
        case '-':
            subtract(a,c);
            break;
        case '*':
            multiply(a,c);
            break;
        case '/':
            divide(a,c);
            break;
    
        default:
            break;
    }
}

const equals = document.querySelector('.equals');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const over = document.querySelector('.over');
const times = document.querySelector('.times');

function funy(){
    let val = document.querySelector('input').value;
    let first = Number(val);
    console.log(first);
}

plus.addEventListener("click",funy);
minus.addEventListener("click",funy);
times.addEventListener("click",funy);
over.addEventListener("click",funy);
