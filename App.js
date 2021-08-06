const msg = document.getElementById('msg');
const submit = document.getElementById('submit');
const input = document.getElementById('input');
const gameDiv = document.getElementById('game');

const attempts = document.createElement('div');
attempts.appendChild(document.createTextNode(' '));
attempts.id = 'attempt' ;
gameDiv.insertBefore( attempts, input)


let inputVal = input.addEventListener('input', function(e){
    return e.target.value
})

const arr = [1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10];

const min = Math.min(...arr);
const max = Math.max(...arr);

let pivet = document.addEventListener('DOMContentLoaded', function (){
    return Math.random(...arr)
})

document.getElementById('min-num').textContent = min;
document.getElementById('max-num').textContent = max;

submit.addEventListener('click', submitFun);

let i = 1; attempt , end = 3; 
function submitFun(e){
    e.preventDefault();
    console.log(pivet, inputVal)
    do{
        if(pivet === inputVal){
            input.style.borderColor = "green";
            msg.textContent = "Yahoo0 ! You cracked"
            msg.style.color = "green"
            input.setAttribute('disabled', true)
            i=3;
        }else{
            msg.textContent = "Try Again"
            msg.style.color = "red";
            attempt = end - i;
            attempts.textContent = `You have ${attempt} attempts left `
            i++;
        }
        
    }while(i < end)
    
    input.setAttribute('disabled')
    
}

