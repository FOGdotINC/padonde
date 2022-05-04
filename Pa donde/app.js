const computerChoiceDisplay= document.getElementById('computer-choice')
const camiChoiceDisplay = document.getElementById('cami-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let camiChoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    camiChoice = e.target.id
    camiChoiceDisplay.innerHTML = camiChoice
    generateComputerChoice()
    getResult()
}) )

function generateComputerChoice() {
    const randomNumber = Math.floor (Math.random() * possibleChoices.length + 1)

    if (randomNumber === 1 ) {
        computerChoice = 'dinner'
    }
    if (randomNumber === 2 ) {
        computerChoice = 'farra'
    }
    if (randomNumber === 3 ) {
        computerChoice = 'pelicula'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === camiChoice) {
        result = 'empate'
    }
    if (computerChoice === 'dinner' && camiChoice === 'farra') {
        result = 'perdiste'
    }
    if (computerChoice === 'farra' && camiChoice === 'pelicula') {
        result = 'perdiste'
    }
    if (computerChoice === 'pelicula' && camiChoice === 'dinner') {
        result = 'perdiste'
    }
    if (computerChoice === 'farra' && camiChoice === 'dinner') {
        result = 'ganaste'
    }
    if (computerChoice === 'pelicula' && camiChoice === 'farra') {
        result = 'ganaste'
    }
    if (computerChoice === 'dinner' && camiChoice === 'pelicula') {
        result = 'ganaste'
    }
    resultDisplay.innerHTML = result
}