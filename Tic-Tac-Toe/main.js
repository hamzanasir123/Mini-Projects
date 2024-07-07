<<<<<<< HEAD
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
=======
var boxes = document.querySelectorAll(".Box");
var resetBotton = document.querySelector(".Reset");
var newGameBtn = document.querySelector("#new-btn");
var newGameBtn1 = document.querySelector("#new-btn1");
var msgContainer = document.querySelector(".msg-container");
var peragraph = document.querySelector("#msg");
var turnO = true;
var count = [];
var drawMsg = document.querySelector(".sms-container");
var winSituations = [
>>>>>>> 9239499099e74abcf3251298a283e9a9903c109c
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
<<<<<<< HEAD
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
=======
var resetGame = function () {
    turnO = true;
    enableBoxes();
    msgContainer === null || msgContainer === void 0 ? void 0 : msgContainer.classList.add("hide");
    drawMsg === null || drawMsg === void 0 ? void 0 : drawMsg.classList.add("hide");
    count = [];
};
var showWinner = function (winner) {
    peragraph.innerText = "".concat(winner, " is Winner");
    msgContainer === null || msgContainer === void 0 ? void 0 : msgContainer.classList.remove("hide");
    drawMsg === null || drawMsg === void 0 ? void 0 : drawMsg.classList.add("hide");
    disableBoxes();
};
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        count++;
        for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
            var b = boxes_1[_i];
            if (count == 9 && b !== winSituations) {
                drawMsg === null || drawMsg === void 0 ? void 0 : drawMsg.classList.remove("hide");
>>>>>>> 9239499099e74abcf3251298a283e9a9903c109c
            }
            ;
        }
        ;
    });
});
<<<<<<< HEAD
boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
=======
boxes.forEach(function (Box) {
    Box.addEventListener("click", function () {
>>>>>>> 9239499099e74abcf3251298a283e9a9903c109c
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
<<<<<<< HEAD
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
=======
var disableBoxes = function () {
    for (var _i = 0, boxes_2 = boxes; _i < boxes_2.length; _i++) {
        var box = boxes_2[_i];
        box.disabled = true;
    }
};
var enableBoxes = function () {
    for (var _i = 0, boxes_3 = boxes; _i < boxes_3.length; _i++) {
        var box = boxes_3[_i];
>>>>>>> 9239499099e74abcf3251298a283e9a9903c109c
        box.disabled = false;
        box.innerText = "";
    }
};
<<<<<<< HEAD
const gameWinner = () => {
    for (let situation of winSituations) {
        let position1 = boxes[situation[0]].innerText;
        let position2 = boxes[situation[1]].innerText;
        let position3 = boxes[situation[2]].innerText;
=======
var gameWinner = function () {
    for (var _i = 0, winSituations_1 = winSituations; _i < winSituations_1.length; _i++) {
        var situation = winSituations_1[_i];
        var position1 = boxes[situation[0]].innerText;
        var position2 = boxes[situation[1]].innerText;
        var position3 = boxes[situation[2]].innerText;
>>>>>>> 9239499099e74abcf3251298a283e9a9903c109c
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
