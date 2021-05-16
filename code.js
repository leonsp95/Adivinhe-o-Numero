const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue () {
        return Math.round(Math.random()*this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    if (Guess.attemptsNumber <2) {
        attempt.innerHTML = 'Tentativa: ' + value;
    } else {
        attempt.innerHTML = 'Tentativas: ' + value;
    }
    
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite um valor, por favor')
        return;

    };

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick) {
        playAgain();
        result.style.transition = '0.4s';
        result.style.background = '#37c978';
        result.style.color = '#fff';
        document.getElementById('form').style.display = 'none';
        if (Guess.attemptsNumber == 1) {
            status.innerHTML = 'O valor é ' + numberDrawn + '!</br>Parabéns, você acertou de primeira!';
        } else {
            status.innerHTML = 'O valor é ' + numberDrawn + '!</br>Parabéns, você acertou!';
        }
                        
        clear();

    } else if (numberDrawn > kick) {
        status.innerHTML = 'O número é maior!';
        result.style.background = '#ff7777';
        result.style.color = '#fff';
        clear();
    } else if (numberDrawn < kick) {
        status.innerHTML = 'O número é menor!';
        result.style.background = '#ff7777';
        result.style.color = '#fff';
        clear();
    }

};

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};