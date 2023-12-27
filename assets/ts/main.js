"use strict";
// 0 = papier, 1 = schere, 2 = stein
let cpu = 0;
let cpuElement = document.body.querySelector("#cpuSelection");
let cpuCounter = 0;
let cpuCounterElement = document.body.querySelector("#cpuScore");
let playerCounter = 0;
let playerCounterElement = document.body.querySelector("#playerScore");
let roundsCounter = 999;
let roundsCheck = 0;
let setRoundsInput = document.body.querySelector("#roundsNumber");
let roundsLeftElement = document.body.querySelector("#roundsLeft");
let roundsCounterDisplay = 999;
roundsLeftElement.innerHTML = roundsCounterDisplay;
// ----------------------------------------------------------
// game functions
// ----------------------------------------------------------
const startRound = (value) => {
    cpu = Math.floor(Math.random() * 3);
    if (roundsCounter < roundsCheck) {
        roundsCounter = 0;
    }
    else if (roundsCounter > roundsCheck) {
        if (cpu === 0) {
            cpuElement.innerHTML = `<img src="./assets/images/Papier.png" id="papier">`;
            if (value === 0) {
            }
            else if (value === 1) {
                playerCounter++;
            }
            else if (value === 2) {
                cpuCounter++;
            }
        }
        else if (cpu === 1) {
            cpuElement.innerHTML = `<img src="./assets/images/Schere.png" id="schere">`;
            if (value === 0) {
                cpuCounter++;
            }
            else if (value === 1) {
            }
            else if (value === 2) {
                playerCounter++;
            }
        }
        else if (cpu === 2) {
            cpuElement.innerHTML = `<img src="./assets/images/Stein.png" id="stein">`;
            if (value === 0) {
                playerCounter++;
            }
            else if (value === 1) {
                cpuCounter++;
            }
            else if (value === 2) {
            }
        }
        cpuCounterElement.innerHTML = cpuCounter;
        playerCounterElement.innerHTML = playerCounter;
        roundsCheck++;
        roundsCounterDisplay--;
        if (roundsCounter === roundsCheck) {
            if (playerCounter > cpuCounter) {
                alert("you win");
                resetScore();
            }
            else if (playerCounter < cpuCounter) {
                alert("you lose");
                resetScore();
            }
            else if (playerCounter === cpuCounter) {
                alert("it's a draw");
                resetScore();
            }
        }
    }
    roundsLeftElement.innerHTML = roundsCounterDisplay;
};
// ----------------------------------------------------------
// setting game rounds
// ----------------------------------------------------------
const setRounds = () => {
    roundsCounter = Number(setRoundsInput.value);
    roundsCounterDisplay = roundsCounter;
    roundsLeftElement.innerHTML = roundsCounterDisplay;
    roundsCheck = 0;
    cpuCounterElement.innerHTML = 0;
    cpuCounter = 0;
    playerCounterElement.innerHTML = 0;
    playerCounter = 0;
    cpuElement.innerHTML = `<img src="./assets/images/Papier.png" alt="papier" id="papier" class="papierCPUImage">
    <img src="./assets/images/Schere.png" alt="schere" id="schere" class="schereCPUImage">
    <img src="./assets/images/Stein.png" alt="stein" id="stein" class="steinCPUImage">`;
    return roundsCounter;
};
// ----------------------------------------------------------
// game reset
// ----------------------------------------------------------
const resetScore = () => {
    cpuCounterElement.innerHTML = 0;
    playerCounterElement.innerHTML = 0;
    cpuCounter = 0;
    playerCounter = 0;
    roundsCounter = 999;
    roundsCheck = 0;
    roundsLeftElement.innerHTML = 999;
    roundsCounterDisplay = 999;
    cpuElement.innerHTML = `<img src="./assets/images/Papier.png" alt="papier" id="papier" class="papierCPUImage">
    <img src="./assets/images/Schere.png" alt="schere" id="schere" class="schereCPUImage">
    <img src="./assets/images/Stein.png" alt="stein" id="stein" class="steinCPUImage">`;
};
