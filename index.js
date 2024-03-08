import {playGame} from './rock_paper.js';
const btn = document.querySelector('button')
const pcChoiceText = document.querySelector('p')
const compChoice = document.createTextNode('')
pcChoiceText.appendChild(compChoice)
const choices = ['Rock', 'Paper', 'Scissors']
let result = document.createElement('p')
pcChoiceText.appendChild(result)

let userCounter = document.querySelector('.user-counter')
let pcCounter = document.querySelector('.pc-counter')


btn.addEventListener('click', () => {
    const userChoice = document.querySelector('input[name="rps"]:checked')
    let randomInt = Math.floor(Math.random() * 3)
    compChoice.textContent = choices[randomInt]
    result.textContent = playGame(userChoice.value, compChoice.textContent.toLowerCase())[0]
    if (result.textContent.startsWith('Com')){
        pcCounter.textContent = `${+pcCounter.textContent + 1}`;
    }
    else if (result.textContent.startsWith('User')){
        userCounter.textContent = `${+userCounter.textContent + 1}`;
    }
    if (+userCounter.textContent >= 5){
        gameFinished('User')
        userCounter.textContent = '0';
        pcCounter.textContent = '0';
    }
    else if (+pcCounter.textContent >= 5){
        gameFinished('Computer')
        userCounter.textContent = '0';
        pcCounter.textContent = '0';
    }
})

function gameFinished(winner) {
    alert(`${winner} Won! Congratulations!`)
}

