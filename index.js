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
const but = document.querySelectorAll('.but');
const sickle = document.querySelector('input');

function funy(){
    let val = document.querySelector('input').value;
    let first = Number(val);
    console.log(first);
}

function input(a){
    sickle.value = sickle.value + a;
    //alert('sku');
}

plus.addEventListener("click",function(){
    funy();
    input('+');
});
minus.addEventListener("click",funy);
times.addEventListener("click",funy);
over.addEventListener("click",funy);
but[0].addEventListener('click',function (){input('0');})
but[1].addEventListener('click',function (){input('1');})
but[2].addEventListener('click',function (){input('2');})
but[3].addEventListener('click',function (){input('3');})
but[4].addEventListener('click',function (){input('4');})
but[5].addEventListener('click',function (){input('5');})
but[6].addEventListener('click',function (){input('6');})
but[7].addEventListener('click',function (){input('7');})
but[8].addEventListener('click',function (){input('8');})
but[9].addEventListener('click',function (){input('9');})
//console.log(Array.from(but));
//console.log(but[1]);