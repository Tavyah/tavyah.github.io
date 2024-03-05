let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => { return Math.floor(Math.random() * 10); }

function compareGuesses(humanGuess, robotGuess, targetNumber) {
    let human = getAbsoluteDistance(targetNumber, humanGuess);
    let robot = getAbsoluteDistance(targetNumber, robotGuess);

    if(humanGuess < 0 || humanGuess > 9) {
        alert("Choose a number between 0 and 9!!!");
    }

    if(human > robot) {
        return false;
    }
    else if(human <= robot) {
        return true;
    }
    else {
        return null;
    }
}

function updateScore(winnerString) {
    if(winnerString === 'human') {
        humanScore += 1;
    }
    else {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}

let getAbsoluteDistance = (targetNumber, guessedNumber) => { return Math.abs(targetNumber - guessedNumber); }