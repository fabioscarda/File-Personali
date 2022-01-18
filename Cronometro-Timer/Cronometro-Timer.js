//Cronometro
//variabili
var playCronometro = false
var centesimiCronometro = 0;
var secondiCronometro = 0;
var minutiCronometro = 0;
var oreCronometro = 0;

setInterval(cronometro, 10);

function cronometro() {
    if (playCronometro) {
        centesimiCronometro++;
    }
    if (centesimiCronometro > 99) {
        centesimiCronometro = 0;
        secondiCronometro++;
    }
    if (secondiCronometro > 59) {
        secondiCronometro = 0;
        minutiCronometro++;
    }
    if (minutiCronometro > 59) {
        minutiCronometro = 0;
        oreCronometro++;
    }

    if (centesimiCronometro < 10) {
        document.getElementById("centesimi0Cronometro").innerHTML = centesimiCronometro;
        document.getElementById("centesimi1Cronometro").innerHTML = 0;
    } else {
        document.getElementById("centesimi1Cronometro").innerHTML = centesimiCronometro.toString()[0];
        document.getElementById("centesimi0Cronometro").innerHTML = centesimiCronometro.toString()[1];
    }
    if (secondiCronometro < 10) {
        document.getElementById("secondi0Cronometro").innerHTML = secondiCronometro;
        document.getElementById("secondi1Cronometro").innerHTML = 0;
    } else {
        document.getElementById("secondi1Cronometro").innerHTML = secondiCronometro.toString()[0];
        document.getElementById("secondi0Cronometro").innerHTML = secondiCronometro.toString()[1];
    }
    if (minutiCronometro < 10) {
        document.getElementById("minuti0Cronometro").innerHTML = minutiCronometro;
        document.getElementById("minuti1Cronometro").innerHTML = 0;
    } else {
        document.getElementById("minuti1Cronometro").innerHTML = minutiCronometro.toString()[0];
        document.getElementById("minuti0Cronometro").innerHTML = minutiCronometro.toString()[1];
    }
    if (oreCronometro < 10) {
        document.getElementById("ora0Cronometro").innerHTML = oreCronometro;
        document.getElementById("ora1Cronometro").innerHTML = 0;
    } else {
        document.getElementById("ora1Cronometro").innerHTML = oreCronometro.toString()[0];
        document.getElementById("ora0Cronometro").innerHTML = oreCronometro.toString()[1];
    }
}

function startcronometro() {
    if (playCronometro) {
        playCronometro = false;
        document.getElementById("start-stopCronometro").src = "img/play.png";
    } else {
        playCronometro = true;
        document.getElementById("start-stopCronometro").src = "img/pause.png";
    }
}

function resetcronometro() {
    playCronometro = false;
    centesimiCronometro = 0;
    secondiCronometro = 0;
    minutiCronometro = 0;
    oreCronometro = 0;
    document.getElementById("start-stopCronometro").src = "img/play.png";
}

// timer
//varibili
var playTimer = false;
var secondiTimer = 0;
var minutiTimer = 0;
var oreTimer = 0;
var allarm = false;

setInterval(timer, 1000);

function timer() {
    if (secondiTimer == 0 && minutiTimer == 0 && oreTimer == 0) {
        //document.getElementById("start-stopTimer").src = "img/Stop.png";
        if (playTimer == true) {
            allarm = true;
            document.getElementById("start-stopTimer").src = "img/stop.png";
        }
        playTimer = false;
    }

    if (playTimer == true) {
        secondiTimer--;

        if (secondiTimer < 0) {
            minutiTimer--;
            secondiTimer = 59;
        }
        if (minutiTimer < 0) {
            oreTimer--;
            minutiTimer = 59;
        }
    }

    if (secondiTimer < 10) {
        document.getElementById("secondi0Timer").innerHTML = secondiTimer;
        document.getElementById("secondi1Timer").innerHTML = 0;
    } else {
        document.getElementById("secondi1Timer").innerHTML = secondiTimer.toString()[0];
        document.getElementById("secondi0Timer").innerHTML = secondiTimer.toString()[1];
    }
    if (minutiTimer < 10) {
        document.getElementById("minuti0Timer").innerHTML = minutiTimer;
        document.getElementById("minuti1Timer").innerHTML = 0;
    } else {
        document.getElementById("minuti1Timer").innerHTML = minutiTimer.toString()[0];
        document.getElementById("minuti0Timer").innerHTML = minutiTimer.toString()[1];
    }
    if (oreTimer < 10) {
        document.getElementById("ora0Timer").innerHTML = oreTimer;
        document.getElementById("ora1Timer").innerHTML = 0;
    } else {
        document.getElementById("ora1Timer").innerHTML = oreTimer.toString()[0];
        document.getElementById("ora0Timer").innerHTML = oreTimer.toString()[1];
    }
    /*if (secondiTimer == 0 && minutiTimer == 0 && oreTimer == 0 && playTimer == true) {
        window.alert("fine timer");
    }*/
}

setInterval(function() {
    console.log(allarm);
    if (allarm) {
        document.getElementById("allarme-Timer").style.backgroundColor = "red";
        setTimeout(function() {
            document.getElementById("allarme-Timer").style.backgroundColor = "rgb(208, 255, 208)"; //#C2DFE3 è un bel colore
        }, 500)
    } else {
        document.getElementById("allarme-Timer").style.backgroundColor = "#rgb(208, 255, 208)";
    }

}, 1000)

function startTimer() {
    allarm = false;
    document.getElementById("start-stopTimer").src = "img/play.png";
    playTimer = true;
    if (playTimer) {
        playTimer = false;
        document.getElementById("start-stopTimer").src = "img/play.png";
    } else {
        playTimer = true;
        document.getElementById("start-stopTimer").src = "img/pause.png";
    }
}

function resetTimer() {
    playTimer = false;
    secondiTimer = 0;
    minutiTimer = 0;
    oreTimer = 0;
    allarm = false;
    document.getElementById("start-stopTimer").src = "img/play.png";
}

function SetTimer() {
    document.getElementById("start-stopTimer").src = "img/play.png";
    playTimer = false;
    secondi = document.getElementById("secondiT").value;
    minuti = document.getElementById("minutiT").value;
    ore = document.getElementById("oraT").value;
    validi = false;
    if (secondi.length > 0 && minuti.length > 0 && ore.length > 0) {
        vuoto = false
        if (IsNumber(secondi)) {
            secondiTimer = parseInt(secondi);
            validi = true;
        } else {
            vuoto = true;
            validi = false;
        }
        if (IsNumber(minuti)) {
            minutiTimer = parseInt(minuti);
            validi = true;
        } else {
            vuoto = true;
            validi = false;
        }
        if (IsNumber(ore)) {
            oreTimer = parseInt(ore);
            validi = true;
        } else {
            vuoto = true;
            validi = false
        }
        if (vuoto) {
            window.alert("non puoi scrivere lettere");
        }
    } else {
        window.alert("non puoi lasciare campi vuoti");
    }

    //minutiTimer = parseInt(minuti);
    //oreTimer = parseInt(ore);

    if (validi) {
        if (secondiTimer < 10) {
            document.getElementById("secondi0Timer").innerHTML = secondiTimer;
            document.getElementById("secondi1Timer").innerHTML = 0;
        } else {
            document.getElementById("secondi1Timer").innerHTML = secondiTimer.toString()[0];
            document.getElementById("secondi0Timer").innerHTML = secondiTimer.toString()[1];
        }
        if (minutiTimer < 10) {
            document.getElementById("minuti0Timer").innerHTML = minutiTimer;
            document.getElementById("minuti1Timer").innerHTML = 0;
        } else {
            document.getElementById("minuti1Timer").innerHTML = minutiTimer.toString()[0];
            document.getElementById("minuti0Timer").innerHTML = minutiTimer.toString()[1];
        }
        if (oreTimer < 10) {
            document.getElementById("ora0Timer").innerHTML = oreTimer;
            document.getElementById("ora1Timer").innerHTML = 0;
        } else {
            document.getElementById("ora1Timer").innerHTML = oreTimer.toString()[0];
            document.getElementById("ora0Timer").innerHTML = oreTimer.toString()[1];
        }
    }
}

function IsNumber(str) {
    const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var validato = false;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < Numbers.length; j++) {
            if (str[i] == Numbers[j])
                validato = true
        }
    }
    return validato;
}