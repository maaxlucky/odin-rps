function getComputerChoice() {
    let posibilities = ['rock', 'paper', 'scissors']
    let randomInt = Math.floor(Math.random() * 3)
    return posibilities[randomInt]

}

export function playGame(userChoice, computerChoice, computerWins = 0, userWins = 0) {
    if (userChoice === 'rock' && computerChoice === 'scissors'){
        userWins++
        let result = document.createElement('p')
        result.textContent = 'User won! Rock beats scissors'
        return [result.textContent, userWins, computerWins]
    }
    else if(userChoice === 'paper' && computerChoice === 'rock'){
        userWins++
        let result = document.createElement('p')
        result.textContent = 'User won! Paper beats rock'
        return [result.textContent, userWins, computerWins]
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper'){
        userWins++
        let result = document.createElement('p')
        result.textContent = 'User won! Scissors beats paper'
        return [result.textContent, userWins, computerWins]
    }
    else if (userChoice === 'rock' && computerChoice === 'paper'){
        computerWins++
        let result = document.createElement('p')
        result.textContent = 'Computer won! Paper beats rock'
        return [result.textContent, userWins, computerWins]
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors'){
        computerWins++
        let result = document.createElement('p')
        result.textContent = 'Computer won! Scissors beats paper'
        return [result.textContent, userWins, computerWins]
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock'){
        computerWins++
        let result = document.createElement('p')
        result.textContent = 'Computer won! Rock beat scissors'
        return [result.textContent, userWins, computerWins]
    }
    else{
        let result = document.createElement('p')
        result.textContent = 'Draw'
        return [result.textContent, userWins, computerWins]
    }
}

let computerWins = 0
let userWins = 0

function startGame(computerWins, userWins) {
    for (let i = 0; i < 3; i++) {
        let computerChoice = getComputerChoice()
        let userChoice = prompt('Your move')
        computerWins += playGame(userChoice, computerChoice)[1]
        userWins += playGame(userChoice, computerChoice)[0]
        // console.log(`user choice was: ${userChoice}, computer choice was: ${computerChoice}`)
    }

    if (computerWins > userWins) {
        console.log('Computer Won game!')
    } else if (userWins > computerWins) {
        console.log('User won game!')
    } else {
        console.log('Game ended with draw!')
    }

    console.log(`computer wins: ${computerWins} and user wins: ${userWins}`)
}
