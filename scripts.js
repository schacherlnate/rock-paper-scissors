function getComputerChoice() {
    // declare randNum variable, set equal to randomly gen #
    const randNum = Math.random();
    // initialize choice variable as rock
    let choice = "rock";
    // check if randNum is less than 1/3
    //      then set choice to be paper
    // else check if randNum is less than 2/3
    //      then set choice to be scissors
    // return choice
    if (randNum < (1/3)) {
        choice = "paper";
    } else if (randNum < (2/3)) {
        choice = "scissors";
    }
    return choice
}

function getUserChoice() {
    // declare choice variable
    let choice;
    let isGoing = true;
    const message = "rock, paper, or scissors?";
    while (isGoing) {
        choice = prompt(message).toLowerCase();
        condition = (choice==="rock")||(choice==="paper")||(choice==="scissors");
        if (condition) {
            isGoing = false;
        } else {
            console.log("Invalid input! try again.");
        }
    }
    return choice
    // prompt user with message "rock, paper, or scissors?"
    // set choice equal to user input
    // check if input is one of rock, paper, or scissors
    //      if not, return to message
}

function getResult(choice1, choice2) {
    choice1 = choice1.toLowerCase();
    choice2 = choice2.toLowerCase();
    let result;

    if (choice1==choice2) {
        result = 'tied';
    } else if (choice1=='rock') {
        result = (choice2=='paper') ? 'lose' : 'win';
    } else if (choice1=='paper') {
        result = (choice2=='rock') ? 'win' : 'lose';
    } else if (choice1=='scissors') {
        result = (choice2=='rock') ? 'lose' : 'win';
    }

    return result;
}

function playRound(userChoice, computerChoice) {
    let result = getResult(userChoice, computerChoice);
    let message;

    if (result=='tied') {
        message = `You tied. ${userChoice} vs ${computerChoice}.`;
    } else if (result=='win') {
        message = `You won! ${userChoice} beats ${computerChoice}!`;
    } else {
        message = `You lost :( ${userChoice} loses to ${computerChoice}.`;
    }

    console.log(message);
    return result

    // check if choices equal
    //      if so, return "tie" message, no update
    // check if human equals rock
    //      check if computer equals paper
    //          increment computerScore
    //          print message `${computerChoice} beats ${userChoice}!`
    //      check if computer equals scissors
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let timesPlayed = 0
    let message;
    let result;

    while (timesPlayed < 5) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        result = playRound(userChoice, computerChoice);       
        if (result==='lose') {
            computerScore++;
        } else if (result==='win') {
            humanScore++;
        }
        timesPlayed++;
    }

    if (humanScore==computerScore) {
        message = `Tie! The score was ${humanScore}-${computerScore}.`;
    } else if (humanScore<computerScore) {
        message = `Tough luck! The score was ${humanScore}-${computerScore}.`;
    } else {
        message = `You win! The score was ${humanScore}-${computerScore}.`;
    }
    console.log(message);
}

playGame();