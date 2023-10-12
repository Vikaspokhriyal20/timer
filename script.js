// target dom element
// 1. timer 
let hours = document.getElementById('hour');
let minutes = document.getElementById('minute')
let seconds = document.getElementById('second')

// 2. button
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')

let time = [0, 0, 0];
let timeId = 0;


startBtn.addEventListener('click', function () {
    if (timeId != 0) {
        return;
    }

    startBtn.classList.add('disable');
    timeId = setInterval(() => {
        time[2]++
        if (time[2] == 60) {
            time[1]++;
            time[2] = 0;
        }
        if (time[1] == 60) {
            time[0]++;
            time[1] = 0;
        }
        displayTime();
    }, 1000);
})


stopBtn.addEventListener('click',function () {
    stopBtn.classList.add('disable');
    startBtn.classList.remove('disable');
    clearInterval(timeId);
})

resetBtn.addEventListener('click',function () {
    startBtn.classList.remove('disable');
    stopBtn.classList.remove('disable');
    clearInterval(timeId);
    time = [0, 0, 0];
    timeId = 0;
    displayTime();
})

function displayTime() {
    hours.innerText = time[0].toString().padStart(2, '0');
    minutes.innerText = time[1].toString().padStart(2, '0');
    seconds.innerText = time[2].toString().padStart(2, '0');

}


