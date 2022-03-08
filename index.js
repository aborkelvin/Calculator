let sickle = document.querySelector('input');


function add(a,b){
    let sum = a + b;
    //alert(sum);
    sickle.value = sum;

}

function subtract(a,b) {
    let diff = a - b;
    //alert(diff);
    sickle.value = diff;
}

function multiply(a,b){
    let product = a * b;
    //alert(product);
    sickle.value = product;
}

function divide(a,b) {
    let quot= a/b;
    //alert(quot);
    sickle.value = quot;
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
const clear = document.querySelector('.clear');


/*function funy(){ //No use
    let val = document.querySelector('input').value;
    let first = Number(val);
    console.log(first);
}*/

function input(a){
    sickle.value = sickle.value + a;
    let store = sickle.value;
}

plus.addEventListener("click",function(){input('+');});

minus.addEventListener("click",function(){input('-');});
times.addEventListener("click",function(){input('*');});
over.addEventListener("click",function(){input('/');});

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


/*for(var i = 0; i<10;i++){ this didn't work though,should have done the above list of codes.
    but[i].addEventListener('click',function (){input(i.toString);})
}

but.forEach(function(item){ This too
    let itsarray = Array.from(but);
    let ind = itsarray.indexOf(item);
    item.addEventListener('click',function (){input(ind.toString());})
})
*/ 


equals.addEventListener('click',function(){
    let hold = sickle.value;
    let fas = hold.split('');
    for(let i =0;i<hold.length;i++){
        if(fas[i] == '+'){
            let book = hold.split('+');
            let first = Number(book[0]);
            let sec = Number(book[1]);
            operate(first,'+',sec);
        }else if(fas[i] == '-'){
            let book = hold.split('-');
            let first = Number(book[0]);
            let sec = Number(book[1]);
            operate(first,'-',sec);
        }else if(fas[i] == '*'){
            let book = hold.split('*');
            let first = Number(book[0]);
            let sec = Number(book[1]);
            operate(first,'*',sec);
        }else if(fas[i] == '/'){
            let book = hold.split('/');
            let first = Number(book[0]);
            let sec = Number(book[1]);
            operate(first,'/',sec);
        }

    }
    
    
})

clear.addEventListener('click',function(){sickle.value = ''});