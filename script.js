var computerguess;
var userguesslog = [];
var attempts = 0;
var maxguesses = 10;

function gameover() {
document.getElementById('newgamebtn').style.display = 'inline';
document.getElementById('easybtn').style.display = 'none';
document.getElementById('hardbtn').style.display = 'none';
document.getElementById('inputbox').setAttribute('readonly', 'readonly');
}

function easymode() {
    maxguesses = 10;
    document.getElementById('easybtn').className = 'activebutton';
    document.getElementById('hardbtn').className = '';

}

function hardmode() {
    maxguesses = 5;
    document.getElementById('hardbtn').className = 'activebutton';
    document.getElementById('easybtn').className = '';
}

function newgame () {
    window.location.reload();
}
function init () {
    computerguess = Math.floor(Math.random() * 100 + 1);
    //console.log(computerguess);
    document.getElementById('newgamebtn').style.display = 'none';
}

function compareguess () {
    var userguess = " " +  document.getElementById('inputbox').value;
    //console.log(userguess);

    userguesslog.push(userguess);
    //console.log(userguesslog);
    document.getElementById('guesslog').innerHTML = userguesslog;

    attempts++;
    document.getElementById('attempts').innerHTML = attempts;

if (userguesslog.length < maxguesses) {
    if(userguess > computerguess) {
        document.getElementById('textoutput').innerHTML = 'Your guess is too high';
        document.getElementById('inputbox').value ="";
    }else if (userguess < computerguess) {
        document.getElementById('textoutput').innerHTML = 'Your guess is too low';
        document.getElementById('inputbox').value ="";
    }else {
        document.getElementById('textoutput').innerHTML = 'Correct! You guessed it in ' +attempts+ ' attempts';
        document.getElementById('container').style.backgroundColor ='green';
        gameover();
    }
}else {
    if (userguess > computerguess) { 
        document.getElementById('textoutput').innerHTML = 'Sorry! Try Again' + '<br> The Correct Number Was ' + computerguess;
        document.getElementById('container').style.backgroundColor ='#e82c4e';
        gameover();
    }else if (userguess < computerguess) {
        document.getElementById('textoutput').innerHTML = 'Sorry! Try Again' + '<br> The Correct Number Was ' + computerguess;
        document.getElementById('container').style.backgroundColor ='#e82c4e';
        gameover();
    }else{
        document.getElementById('textoutput').innerHTML = 'Correct! You guessed it in ' +attempts+ ' attempts';
        document.getElementById('container').style.backgroundColor ='green';
        gameover();
    }
}
}
