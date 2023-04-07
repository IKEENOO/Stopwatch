const minutesBlock = document.querySelector('.js__minutes');
const secondsBlock = document.querySelector('.js__seconds');
const hundredthsBlock = document.querySelector('.js__hundredths');

const btnStart = document.querySelector('.js__btn__start');
const btnStop = document.querySelector('.js__btn__stop');
const btnReset = document.querySelector('.js__btn__reset');

let interval;
let minutes = 0;
let seconds = 0;
let hundredths = 0;

btnStart.addEventListener('click', btnStartClick);
btnStop.addEventListener('click', btnStopClick);
btnReset.addEventListener('click', btnResetClick);

function startTimer() {
    hundredths++;
    hundredthsBlock.innerHTML = hundredths;
    if(hundredths == 100) {
         hundredthsBlock.innerHTML = '00';
    }
    if(hundredths > 99) {
        seconds++;
        secondsBlock.innerHTML = '0' + seconds;
        hundredths = 0;
    }
    if(seconds > 9) {
        secondsBlock.innerHTML = seconds;
    }
    if(seconds > 59) {
        minutes++;
        minutesBlock.innerHTML = '0' + minutes;
        seconds = 0;
        secondsBlock.innerHTML = '0' + seconds;
    }
    if(minutes > 9) {
        minutesBlock.innerHTML = minutes;
    }
}

function btnStartClick() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

function btnStopClick() {
    clearInterval(interval);
}

function btnResetClick() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    hundredths = 0;
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    hundredthsBlock.innerHTML = '00';
}