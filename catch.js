const divs = ['div1', 'div2', 'div3', 'div4', 'div5'];
const colors = ["rgb(233, 176, 255)", "rgb(245, 181, 203)", "rgb(233, 205, 149)", "rgb(235, 236, 146)", "rgb(173, 248, 158)"];
const colors2 = ["rgb(170, 50, 218)", "rgb(231, 42, 105)", "rgb(221, 154, 19)", " rgb(236, 240, 9)", "  rgb(44, 248, 3)"];
let color = " rgb(245, 243, 194)";
let points = 0;
let count = 0;
var currentColor;
let flag = 0;
let flag2 = 0;
let previndex;
let previd;
var pid;
let Continue = true;
let life = 3;
var changeid;
var lightid;
var offid;
let n1;
let n2;
let highScores = [];
function start(n1, n2) {
    Timer();
    flag2 = 1;
    document.getElementById('l1').disabled = "disabled";
    document.getElementById('l2').disabled = "disabled";
    changeid = setInterval("changeColor()", 5000);
    lightid = setInterval("LightCircles()", n1);
    offid = setInterval("OffCircles()", n2);
    localStorage.setItem('n1', n1);
    localStorage.setItem('n2', n2);

}
function rand() { return Math.floor(Math.random() * 5); }
function rand2() { return Math.floor(Math.random() * 330); }
function changeColor() {

    if (!flag) {
        previndex = rand();
        previd = divs[previndex];
        flag = 1;
    }
    let index = rand();
    while (index == previndex) {
        index = rand();
    }
    let id = divs[index];

    f1(id);
    f2(previd);

    previd = id;
    previndex = index;
}
function f1(id) {
    let div = document.getElementById(id);
    switch (id) {
        case 'div1': div.style.backgroundColor = colors2[0]; break;
        case 'div2': div.style.backgroundColor = colors2[1]; break;
        case 'div3': div.style.backgroundColor = colors2[2]; break;
        case 'div4': div.style.backgroundColor = colors2[3]; break;
        case 'div5': div.style.backgroundColor = colors2[4]; break;
    }
    currentColor = div.style.backgroundColor;
}
function f2(id) {
    let div = document.getElementById(id);
    switch (id) {
        case 'div1': div.style.backgroundColor = colors[0]; break;
        case 'div2': div.style.backgroundColor = colors[1]; break;
        case 'div3': div.style.backgroundColor = colors[2]; break;
        case 'div4': div.style.backgroundColor = colors[3]; break;
        case 'div5': div.style.backgroundColor = colors[4]; break;
    }
}

function CreateCircles() {
    document.getElementById('points').textContent = "Scores: " + points;
    document.getElementById('StopContinue').addEventListener("click", StopOrContinue);
    for (let i = 0; i < 330; i++) {
        let btn = document.createElement('button');
        btn.setAttribute('class', 'cir');
        btn.setAttribute('id', 'cir' + i);
        document.getElementById('container').appendChild(btn);
    }

}

function LightCircles() {
    for (let i = 0; i < rand(); i++) {
        let c = document.getElementById('cir' + rand2());
        c.style.backgroundColor = colors2[rand()];
        c.style.borderColor = "rgb(163, 157, 157)";
        c.addEventListener("click", CheckValid);
    }

}
function OffCircles() {
    for (let j = 0; j < rand(); j++) {
        let c = document.getElementById('cir' + rand2());
        c.style.backgroundColor = color;
        c.style.borderColor = color;
    }
}
function CheckValid() {
    if (this.style.backgroundColor == currentColor) {
        console.log("hnjhlkjh");
        points++;
        document.getElementById('points').textContent = "Scores: " + points;
        this.style.backgroundColor = color;
        this.style.borderColor = color;
    }
    else {
        points--;
        document.getElementById('points').textContent = "Scores: " + points;
        if (points < 0)
            points = 0;
        count++;
        if (count == 3) {
            life--;
            count = 0;
        }
        if (life == 0)
            EndGame();
        document.getElementById('p' + (life + 1)).style.display = "none";

    }

    clicks.push(this);
    this.disabled = true;
    document.getElementById('points').textContent = "Scores: " + points;
    console.log(points);
}

function EndGame() {

    if (points > localStorage.getItem('points'))
        localStorage.setItem('points', points);
    clearInterval(changeid);
    clearInterval(lightid);
    clearInterval(offid);
    document.getElementById('StopContinue').disabled = "disabled";
    setTimeout(() => {
        alert('your life were over!')
    }, 500);
    clearInterval(timer);
}

function StopOrContinue() {
    if (flag2) {
        if (Continue) {
            this.textContent = "continue";
            window.clearInterval(changeid);
            window.clearInterval(lightid);
            window.clearInterval(offid);
            Continue = false;
        }
        else {
            this.textContent = "stop";
            changeid = setInterval("changeColor()", 5000);
            lightid = setInterval("LightCircles()", localStorage.getItem('n1'));
            offid = setInterval("OffCircles()", localStorage.getItem('n2'));
            Continue = true;
        }
    }
}

function Name() {
    let name = prompt('enter your name');
    localStorage.setItem('n', name);
    let newname = localStorage.getItem('n');
    document.getElementById('h').innerHTML = "Hey " + newname + ", choose your fevorite game";
    document.getElementById('h2').textContent = "We hope you will enjoy!";

}
function viewingRecords() {
    document.getElementById('local').textContent = localStorage.getItem('points');
}
function Timer() {
    const timerElement = document.getElementById("timer");
    let timeLeft = 150;
    const timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
        timerElement.innerHTML = `${minutes}:${secondsString}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerElement.innerHTML = "Time's up!";
            EndGame();
        }
        else {
            timeLeft--;
        }
    }, 1000);
}
