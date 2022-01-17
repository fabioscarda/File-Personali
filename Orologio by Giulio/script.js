//CLOCK
var oraclock, minuticlock, secondiclock;
setInterval(function () {
    oraclock = new Date().getHours();
    minuticlock = new Date().getMinutes();
    secondiclock = new Date().getSeconds();

    var orario1 = document.querySelector(".orario:nth-child(1)");
    var orario2 = document.querySelector(".orario:nth-child(2)");
    var orario3 = document.querySelector(".orario:nth-child(3)");
    var orario4 = document.querySelector(".orario:nth-child(4)");
    orario1.innerHTML = oraclock > 9 ? oraclock.toString()[0] : "0";
    orario2.innerHTML = oraclock < 10 ? oraclock.toString()[0] : oraclock.toString()[1];
    orario3.innerHTML = minuticlock > 9 ? minuticlock.toString()[0] : "0";
    orario4.innerHTML = minuticlock < 10 ? minuticlock.toString()[0] : minuticlock.toString()[1];

    var lancettaore = document.getElementById("lancettaore");
    var lancettaminuti = document.getElementById("lancettaminuti");
    var lancettasecondi = document.getElementById("lancettasecondi");
    lancettasecondi.style.transform = "rotate(" + secondiclock * 360 / 60 + "deg)"
    lancettaminuti.style.transform = "rotate(" + minuticlock * 360 / 60 + "deg)"
    if (oraclock > 12) {
        oraclock = oraclock - 12;
    }
    lancettaore.style.transform = "rotate(" + oraclock * 360 / 12 + "deg)"
}, 1000)

//STOPWATCH

var stopwatchstart = false;
var orastopwatch = 0, minutistopwatch = 0, secondistopwatch = 0, centesimistopwatch = 0;
function startcronometro() {
    if (stopwatchstart == true) {
        stopwatchstart = false;
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "play.png";
    }
    else {
        stopwatchstart = true;
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "pause.png";

    }
}
function resetcronometro() {
    stopwatchstart = false;
    orastopwatch = 0;
    minutistopwatch = 0;
    secondistopwatch = 0;
    centesimistopwatch = 0;
    document.querySelector("#mediaplayer div img:nth-child(1)").src = "play.png";
}

setInterval(function () {
    if (stopwatchstart == true) {
        centesimistopwatch++;
    }

    if (centesimistopwatch > 99) {
        centesimistopwatch = 0;
        secondistopwatch++;
    }
    if (secondistopwatch > 59) {
        secondistopwatch = 0;
        minutistopwatch++;
    }
    if (minutistopwatch > 99) {
        minutistopwatch = 0;
        orastopwatch++;
    }

    var cronometro1 = document.querySelector(".cronometro:nth-child(1)");
    var cronometro2 = document.querySelector(".cronometro:nth-child(2)");
    var cronometro3 = document.querySelector(".cronometro:nth-child(3)");
    var cronometro4 = document.querySelector(".cronometro:nth-child(4)");
    var cronometro5 = document.querySelector(".cronometro:nth-child(5)");
    var cronometro6 = document.querySelector(".cronometro:nth-child(6)");
    var cronometro7 = document.querySelector(".cronometro:nth-child(7)");
    var cronometro8 = document.querySelector(".cronometro:nth-child(8)");
    cronometro1.innerHTML = orastopwatch > 9 ? orastopwatch.toString()[0] : "0";
    cronometro2.innerHTML = orastopwatch < 10 ? orastopwatch.toString()[0] : orastopwatch.toString()[1];
    cronometro3.innerHTML = minutistopwatch > 9 ? minutistopwatch.toString()[0] : "0";
    cronometro4.innerHTML = minutistopwatch < 10 ? minutistopwatch.toString()[0] : minutistopwatch.toString()[1];
    cronometro5.innerHTML = secondistopwatch > 9 ? secondistopwatch.toString()[0] : "0";
    cronometro6.innerHTML = secondistopwatch < 10 ? secondistopwatch.toString()[0] : secondistopwatch.toString()[1];
    cronometro7.innerHTML = centesimistopwatch > 9 ? centesimistopwatch.toString()[0] : "0";
    cronometro8.innerHTML = centesimistopwatch < 10 ? centesimistopwatch.toString()[0] : centesimistopwatch.toString()[1];
}, 10)
//TIMER
var timerstart = false, allarm = false;
var oratimer = 0, minutitimer = 0, seconditimer = 0;

function starttimer() {
    if (timerstart == false && seconditimer != 0 && minutitimer != 0 && oratimer != 0) {
        timerstart = true;
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "pause.png";
    }
    else if (timerstart == false && (seconditimer != 0 || minutitimer != 0 || oratimer != 0)) {
        timerstart = true;
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "pause.png";
    }
    else {
        timerstart = false;
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "play.png";
    }
}
function resettimer() {
    timerstart = false;
    allarm = false;
    oratimer = 0;
    minutitimer = 0;
    seconditimer = 0;
    centesimitimer = 0;
    document.querySelector("#mediaplayer div img:nth-child(1)").src = "play.png";
}

setInterval(function () {
    if (timerstart == true) {
        seconditimer--;

        if (seconditimer < 0) {
            minutitimer--;
            seconditimer = 59;
        }
        if (minutitimer < 0) {
            oratimer--;
            minutitimer = 59;
        }
    }

    if (seconditimer == 0 && minutitimer == 0 && oratimer == 0) {
        document.querySelector("#mediaplayer div img:nth-child(1)").src = "play.png";
        if (timerstart == true) {
            allarm = true;
        }
        timerstart = false;


    }
}, 1000)

function impostatimer(hours, minutes, seconds) {
    timerstart = false
    oratimer = hours;
    minutitimer = minutes;
    seconditimer = seconds;
}

setInterval(function () {
    var timer1 = document.querySelector(".timer:nth-child(1)");
    var timer2 = document.querySelector(".timer:nth-child(2)");
    var timer3 = document.querySelector(".timer:nth-child(3)");
    var timer4 = document.querySelector(".timer:nth-child(4)");
    var timer5 = document.querySelector(".timer:nth-child(5)");
    var timer6 = document.querySelector(".timer:nth-child(6)");
    timer1.innerHTML = oratimer > 9 ? oratimer.toString()[0] : "0";
    timer2.innerHTML = oratimer < 10 ? oratimer.toString()[0] : oratimer.toString()[1];
    timer3.innerHTML = minutitimer > 9 ? minutitimer.toString()[0] : "0";
    timer4.innerHTML = minutitimer < 10 ? minutitimer.toString()[0] : minutitimer.toString()[1];
    timer5.innerHTML = seconditimer > 9 ? seconditimer.toString()[0] : "0";
    timer6.innerHTML = seconditimer < 10 ? seconditimer.toString()[0] : seconditimer.toString()[1];
}, 10)


setInterval(function () {
    var body = document.querySelector("body");
    if (allarm == true) {
        body.style.backgroundColor = "red";
        setTimeout(function () {
            body.style.backgroundColor = "#C2DFE3";

        }, 500)
    }
    else {
        body.style.backgroundColor = "#C2DFE3";
    }

}, 1000)