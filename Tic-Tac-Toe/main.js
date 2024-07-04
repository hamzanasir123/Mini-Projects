"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let boxes = document.querySelectorAll(".Box");
let resetBotton = document.querySelector(".Reset");
let newGameBtn = document.querySelector("#new-btn");
let newGameBtn1 = document.querySelector("#new-btn1");
let msgContainer = document.querySelector(".msg-container");
let peragraph = document.querySelector("#msg");
let turnO = true;
let count = [];
let drawMsg = document.querySelector(".sms-container");
const winSituations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer?.classList.add("hide");
    drawMsg?.classList.add("hide");
    count = [];
};
const showWinner = (winner) => {
    peragraph.innerText = `${winner} is Winner`;
    msgContainer?.classList.remove("hide");
    drawMsg?.classList.add("hide");
    disableBoxes();
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        for (let b of boxes) {
            if (count == 9 && b !== winSituations) {
                drawMsg?.classList.remove("hide");
            }
            ;
        }
        ;
    });
});
boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        if (turnO) {
            Box.innerText = "O";
            turnO = false;
        }
        else {
            Box.innerText = "X";
            turnO = true;
        }
        ;
        Box.disabled = true;
        gameWinner();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const gameWinner = () => {
    for (let situation of winSituations) {
        let position1 = boxes[situation[0]].innerText;
        let position2 = boxes[situation[1]].innerText;
        let position3 = boxes[situation[2]].innerText;
        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBotton.addEventListener("click", resetGame);
newGameBtn1.addEventListener("click", resetGame);
