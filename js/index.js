const imageClick = document.querySelectorAll('.buttons')
const printMessage = document.querySelector('.inner-text')
const updateScorePlayer = document.querySelector('.man-score')
const updateScoreComputer = document.querySelector('.computer-score')
const resetBtn = document.querySelectorAll('.restart-btn')

// const container = document.querySelector('.restart-game')
// const content = document.createElement('button')
// content.classList.add('restart-btn')
// content.textContent = 'reset'
// content.setAttribute('style', 'font-size: 90%; background-color: brown;')



// console.log(resetBtn)

printMessage.textContent = 'Please Select your Choice to begin Round!'

let scorePlayer = 0;
let scoreComputer = 0;

imageClick.forEach(button => button.addEventListener('click', () => {
    // console.log(button.attributes[1].value)
    if (scorePlayer == 5 || scoreComputer == 5) {
        // container.appendChild(content);
        return
    }
    else {
        game(button.attributes[1].value)
    }
}))



resetBtn.forEach((resetsBtn) =>
    resetsBtn.addEventListener('click', () => {
        scorePlayer = 0;
        scoreComputer = 0;
        // console.log(resetsBtn)
        updateScorePlayer.textContent = scorePlayer
        updateScoreComputer.textContent = scoreComputer
        printMessage.textContent = 'Another Round! Please Select your Choice'
    }))

content.forEach((contents) =>
contents.addEventListener('click', () => {
        scorePlayer = 0;
        scoreComputer = 0;
        // console.log(resetsBtn)
        updateScorePlayer.textContent = scorePlayer
        updateScoreComputer.textContent = scoreComputer
        printMessage.textContent = 'Another Round! Please Select your Choice'
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
    } else if (RoundResult.search('You Lose!') > -1) {
        scoreComputer++
    }

    updateScorePlayer.textContent = scorePlayer
    updateScoreComputer.textContent = scoreComputer
    printMessage.textContent = RoundResult

    if (scorePlayer >= 5 && scoreComputer < 5) {
        container.appendChild(content)
        
        printMessage.textContent = `Game Over. You Win this Round! \n\n You can still win again\n Press Reset to Play again`;

    } else if (scorePlayer < 5 && scoreComputer >= 5) {
        
        container.appendChild(content)
        
        printMessage.textContent = `Game Over. You Lost this Round!\n\n Wanna Try your luck again! \nPress Reset to Play again`;

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
    } else {
        result = "It's a tie!"
        console.log(result)
    }
    return result
}

// let playerSelection = prompt("enter a selection from: ['Rock','Paper', 'Scissors']")
// let computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));