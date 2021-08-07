const msg = document.getElementById('msg');
const submit = document.getElementById('submit');
const input = document.getElementById('input');
const gameDiv = document.getElementById('game');
const rangeError = document.getElementById('rangeError');

const attempts = document.createElement('div');
attempts.appendChild(document.createTextNode(' '));
attempts.id = 'attempt' ;
gameDiv.insertBefore( attempts, input)

rangeError.style.color = 'red'

/*
input.addEventListener('input', inputFun); 
function inputFun(e){
    inputVal = parseInt(e.target.value);
    if(inputVal > max || inputVal < min || isNaN(inputVal)) { 
        console.log(inputVal)
        rangeError.textContent = `Guess must be with in ${min} and ${max}`}
}
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10];

const min = Math.min(...arr);
const max = Math.max(...arr);

let pivet,  attempt;
document.addEventListener('DOMContentLoaded', random) 

function random(){
    attempt = 2;
    pivet = Math.floor(Math.random() * 11)
}

document.getElementById('min-num').textContent = min;
document.getElementById('max-num').textContent = max;


gameDiv.addEventListener('mousedown', gameClick);

function gameClick(e){
    inputVal = (input.value);
    inputVal=parseInt(inputVal)
    // click submit
    if(e.target.className === 'submit'){
        
        //compare values
        if(inputVal > max || inputVal < min || isNaN(inputVal)) { 
            rangeError.style.color = 'red';
            rangeError.textContent = 'Enter valid number';
            input.style.borderColor = "red"
            
        }else if(pivet === inputVal){
            rangeError.textContent = '';
            win();

        }else{
            rangeError.textContent = '';
            tryAgain();
        }
    }else if(e.target.className === 'playAgain'){
        console.log('play again')
        location.reload();
        }
}

function win(){
    console.log('wins')
    msg.style.color = 'green';
    input.style.borderColor = 'green'
    msg.textContent = 'Congrats you cracked'
    input.setAttribute('disabled',"")
    
    submit.className = 'playAgain';
    submit.value = 'Play again';
}

function tryAgain(){
    
    if(attempt === 0){
        input.setAttribute('disabled',"")
        msg.textContent = `Game over, ${pivet} is correct guess `;
        submit.className = 'playAgain';
        submit.value = 'Play again';
        
    }else{
        console.log('try again');
        msg.style.color = 'red';
        msg.textContent = `Try again,ve ${attempt} attempts left `;
        input.focus();
        input.value = null;
        
        attempt -= 1;
        console.log(attempt, pivet, inputVal)
    }
    
}











/*
gameDiv.addEventListener('click', function(e){

    if(e.target.className === 'playAgain'){

    console.log('playagain triggered')
    input.disabled = false ;
    submit.disabled = false;
    input.focus()
    pivet = Math.floor(Math.random() * 11);
    inputVal = null;
    input.placeholder = 'Enter first guess'
    i = 0;
    attemptNum(i);
    }
})

function attemptNum(e){
 attempt = e;
}

submit.addEventListener('click', submitFun);

let i = 1, attempt , 0 = 3; 

function submitFun(e){

    inputVal = parseInt(inputVal);
    rangeError.textContent = ''
    console.log('pivet= ',pivet, 'input value =', inputVal)

    // game 0
    if(i === 0){
        //app0 className
        submit.value = 'Play Again'
        submit.className += "playAgain";
        gameOver();
        
    }else{
        
        if(pivet === inputVal){
            console.log('equal');
            msg.textContent = "Yahoo0 ! You cracked";
            msg.style.color = "green";
            input.style.borderColor = 'green'

            submit.value = 'Play Again'
            submit.className += "playAgain";

        }else{
            
            msg.textContent = "Try Again"
            msg.style.color = "red";
            attemptNum(0 - i-1);
            i++;
            attempts.textContent = `You have ${attempt} attempts left `;
            input.focus();
            inputVal = null
            input.placeholder = `Enter ${i+1} value`;

            console.log('else triggered')
            console.log('attempt= ',attempt,'i=', i );
        }
    } 
    
    console.log(attempt,"after",i );
}

function gameOver(){
console.log('gameOver')
    input.setAttribute('disabled', "")
    msg.textContent = "Game Over";
    submit.setAttribute('disabled', "")
    input.placeholder = 'No more attempts left'

}
*/

