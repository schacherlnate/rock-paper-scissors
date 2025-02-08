function getComputerChoice() {
    const randNum = Math.random();
    let choice = "rock";
    if (randNum < (1/3)) {
        choice = "paper";
    } else if (randNum < (2/3)) {
        choice = "scissors";
    }
    return choice
}

function getResult(choice1, choice2) {
    let result = 'tied';

    if (choice1!=choice2) {
        if (choice1=='rock') {
            result = (choice2=='paper') ? 'lose' : 'win';
        } else if (choice1=='paper') {
            result = (choice2=='rock') ? 'win' : 'lose';
        } else if (choice1=='scissors') {
            result = (choice2=='rock') ? 'lose' : 'win';
        }
    }

    return result;
}

function playGame() {

    let result;
    let userChoice;
    let timesPlayed = 0;
    let userScore = 0;
    let computerScore = 0;

    let resultMsg = document.querySelector("#result");
    let userRunningScore = document.querySelector("#user-score");
    let computerRunningScore = document.querySelector("#computer-score");

    let choices = document.querySelectorAll("button");

    choices.forEach((button)=> {
        button.addEventListener("click", function() {

            userRunningScore.textContent = userScore;
            computerRunningScore.textContent = computerScore;

            userChoice=button.id;
            let computerChoice=getComputerChoice();
            result = getResult(userChoice, computerChoice);
            resultMsg.textContent = result;

            if (result=='win') {
                userScore++;
                userRunningScore.textContent = userScore;
            } else if (result=='lose') {
                computerScore++;
                computerRunningScore.textContent = computerScore;
            }

            timesPlayed++;
            if (timesPlayed===5) {
                let msg = (userScore===computerScore) ? "Tie" :
                    (userScore<computerScore) ? "You lose" : "You win";
                resultMsg.textContent = "Game Over: ".concat(msg);
                userScore = 0;
                computerScore = 0;
                timesPlayed = 0;
            }
        });
    });
}

playGame();