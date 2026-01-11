const visor = document.querySelector("#timer");
const start = document.querySelector("#btnStart");
const pause = document.querySelector("#btnPause");
const reset = document.querySelector("#btnReset");

let tempoRestante = 1500;
let intervalo = null;

function visorUpdate() {
    let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;

    let m = minutos < 10 ? "0" + minutos : minutos;
    let s = segundos < 10 ? "0" + segundos : segundos;

    visor.innerText = `${m}:${s}`;
}

function startTimer() {
    clearInterval(intervalo);

    intervalo = setInterval(function() {

        if(tempoRestante > 0) {
            tempoRestante--;
            visorUpdate();
        } else {
            clearInterval(intervalo);
            alert("Tempo acabou!");
        }
    }, 1000);

};

function pauseTimer() {
    clearInterval(intervalo);
}

function resetTimer() {
    clearInterval(intervalo);
    tempoRestante = 1500;
    visorUpdate();
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);