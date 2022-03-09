let sickle = document.querySelector('input');
const equals = document.querySelector('.equals');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const over = document.querySelector('.over');
const times = document.querySelector('.times');
const numbtn = document.querySelectorAll('.but');
const clearbtn = document.querySelector('.clear');
const delbtn = document.querySelector('.delbtn');

function add(a,b){
    let sum = a + b;
    sickle.value = sum;

}

function subtract(a,b) {
    let diff = a - b;
    sickle.value = diff;
}

function multiply(a,b){
    let product = a * b;
    sickle.value = product;
}

function divide(a,b) {
    let quot= a/b;
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




function input(a){
    sickle.value = sickle.value + a;
    let store = sickle.value;
}

/* Onclick of the sign(+-/*) buttons, call function checkprevious,which gets the value of the previous values 
in the input displays, runs an array method(filter), to check for previous operator signs,
on seeing one, it runs the solve function on the previous values, then includes the + sign
with the result using the input function */
function checkprevious(){
    let hold = sickle.value;
    let fas = hold.split('');
    fas.filter((item)=>{
        if(item == '+' || item == '-'|| item == '*' || item == '/'){
            solve();
        }
    })
}

plus.addEventListener("click",function(){       
    checkprevious();
    input('+');
});

minus.addEventListener("click",function(){
    checkprevious();
    input('-');
});

times.addEventListener("click",function(){
    checkprevious();
    input('*');});

over.addEventListener("click",function(){
    checkprevious();
    input('/');});

numbtn[0].addEventListener('click',function (){input('0');})
numbtn[1].addEventListener('click',function (){input('1');})
numbtn[2].addEventListener('click',function (){input('2');})
numbtn[3].addEventListener('click',function (){input('3');})
numbtn[4].addEventListener('click',function (){input('4');})
numbtn[5].addEventListener('click',function (){input('5');})
numbtn[6].addEventListener('click',function (){input('6');})
numbtn[7].addEventListener('click',function (){input('7');})
numbtn[8].addEventListener('click',function (){input('8');})
numbtn[9].addEventListener('click',function (){input('9');})
numbtn[10].addEventListener('click',function (){input('.');})



/*for(var i = 0; i<10;i++){ this didn't work though,should have done the above list of codes.
    numbtn[i].addEventListener('click',function (){input(i.toString);})
}

numbtn.forEach(function(item){ This too
    let itsarray = Array.from(numbtn);
    let ind = itsarray.indexOf(item);
    item.addEventListener('click',function (){input(ind.toString());})
})
*/ 
function solve(){
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
    
    
}

equals.addEventListener('click',solve);

clearbtn.addEventListener('click',function(){sickle.value = ''});

//The del btn backspaces by converting to array,removing last element and converting back
delbtn.addEventListener('click',function(){
     let hold = sickle.value;
     let fas = hold.split('');
    fas.pop();
    fas = fas.join('');
    sickle.value = fas;
 })

/*To add event listeners for keys,so numbers and operators can be added with the keyboard*/
document.addEventListener('keydown',function(event){
    //listens for the numbers
    let numbers = [0,1,2,3,4,5,6,7,8,9,'.'];
    for(let i = 0;i<numbers.length;i++){ 
        if(event.key == numbers[i]){
            input(numbers[i].toString());
        }
    }
    
    //listens for the operators
    let ops = ['+','-','*','/'];
    for(let i = 0;i<ops.length;i++){
        if(event.key == ops[i]){
            checkprevious();
            input(ops[i]);
        }
    }
    if (event.key == '=') {
        solve();
    }

})