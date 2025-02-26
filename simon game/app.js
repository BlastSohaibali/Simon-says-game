let forgame = [];
let foruser = [];
let btns = ["green", "red", "yellow", "blue"];

let h2 = document.querySelector("h2");
let start = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (start === false) {
        start = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("pressed");
    setTimeout(function () {
        btn.classList.remove("pressed");
    }, 500);
}

function levelup() {
    foruser = [];
    level++;
    h2.innerText = "Level " + level;

    // Random colour chosen
    let random = Math.floor(Math.random() * 4);
    let randombtn = btns[random];
    let randbtn = document.querySelector("." + randombtn);
    forgame.push(randombtn);
    btnflash(randbtn);
}

function check() {
    let idx = foruser.length - 1;
    if (forgame[idx] === foruser[idx]) {
        if (forgame.length === foruser.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over, your score was <b>${level}</b> <br> Press any key to restart`;
        restart();
    }
}

function btnpress() {
    let btn = this;
    btnflash(btn);
    foruser.push(btn.classList[1]); // Fix: Store user's choice
    check(); // Fix: Remove wrong argument
}

let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function restart() {
    level = 0;
    forgame = [];
    foruser = [];
    start = false;
}
