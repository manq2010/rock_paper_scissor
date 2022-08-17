const printMessage = document.querySelector('.print')
const updateScorePlayer = document.querySelector('.player')
const updateScoreComputer = document.querySelector('.computer')
const imagesRPS = Array.from(document.querySelectorAll('.image'))
const resetBtn = document.querySelectorAll('.restart-btn')
// const printMessage = document.getElementsByClassName('print')
const updateScore = document.querySelectorAll('.score')
console.log(printMessage)

resetBtn.forEach((resetsBtn) =>
    resetsBtn.addEventListener('click', () => {
        scorePlayer = 0;
        scoreComputer = 0;
        // console.log(resetsBtn)
        updateScorePlayer.textContent = scorePlayer
        updateScoreComputer.textContent = scoreComputer
        printMessage.textContent = ''
    }))

let scorePlayer = 0;
let scoreComputer = 0;

imagesRPS.forEach((imageRPS) =>
    imageRPS.addEventListener('click', () => {
        if (scorePlayer >= 5 || scoreComputer >= 5) {
            return;
        }
        console.log(imageRPS.alt)
        game(imageRPS.alt)
    }))

// resetBtn = () => resets.addEventListener('click', () => {
//     scorePlayer = 0;
//     scoreComputer = 0;
// })

function game(playerSelect) {

    let playerSelection = playerSelect.toUpperCase()
    let computerSelection = getComputerChoice()
    console.log(playerSelection, " : ", computerSelection)

    let RoundResult = playRound(playerSelection, computerSelection)

    if (RoundResult.search('You Won!') > -1) {
        scorePlayer++
    } else {
        scoreComputer++
    }

    updateScorePlayer.textContent = scorePlayer
    updateScoreComputer.textContent = scoreComputer
    printMessage.textContent = RoundResult

    if (scorePlayer >= 5 && scoreComputer < 5) {
        printMessage.textContent = 'Game Over. You Win!\n\n Press Reset to Play again';
      } else if (scorePlayer < 5 && scoreComputer >= 5) {
        printMessage.textContent = 'Game Over. You Lose!\n\n Press Reset to Play again';
      }
    
}

function getComputerChoice() {
    let myArr = ['Rock', 'Paper', 'Scissors']
    let randomNumber = Math.floor(Math.random() * myArr.length)
    return myArr[randomNumber].toUpperCase()
}

function playRound(playerSelection, computerSelection) {

    let result = printMessage.innerText

    playerSelection = playerSelection.charAt(0) + playerSelection.toLowerCase().slice(1)
    computerSelection = computerSelection.charAt(0) + computerSelection.toLowerCase().slice(1)

    if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        result = "You Lose! Scissor beats Paper"
        console.log(result)
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        result = "You Won! Paper beats Rock"
        console.log(result)
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        result = "You Won! Scissor beats Paper"
        console.log(result)
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        result = "You Lose! Rock beats Scissor"
        console.log(result)
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        result = "You Lose! Paper beats Rock"
        console.log(result)
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        result = "You Won! Rock beats Scissor"
        console.log(result)
    } else if (playerSelection == computerSelection) {
        result = "It's a draw!"
        console.log(result)
    }
    else {
        result = "Invalid input"
        console.log(result)
    }
    return result
}

// let playerSelection = prompt("enter a selection from: ['Rock','Paper', 'Scissors']")
// let computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));