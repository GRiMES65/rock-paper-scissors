const choice = ["Rock", "Paper", "Scissors"];

const resultDiv = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");

let humanScore = 0; 
let computerScore = 0;

function computerChoice(){
    let compChoice = choice[Math.floor(Math.random() * 3)];
    console.log("Computer choice: " + compChoice);
    return compChoice;
}

function updateScore() {
    playerScore.textContent = `Player Score: ${humanScore}`;
    compScore.textContent = `Computer Score: ${computerScore}`;
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function checkWinner() {
    if (humanScore === 5){
        disableButtons()
    }
    else if(computerScore === 5){
        disableButtons();
    }
    
}




function playRound(playerSelection){
    const compSelection = computerChoice();
    let result;
    
    if (playerSelection === compSelection) {
        result = "It's a draw!";
    }
    else if (playerSelection === "Rock" && compSelection === "Scissors" ||
        playerSelection === "Paper" && compSelection === "Rock" ||
        playerSelection === "Scissors" && compSelection === "Paper"
    ) {
        result = `${playerSelection} beats ${compSelection}! You win.`
        humanScore++;
    }
    else {
        result = `You lose. ${compSelection} beats ${playerSelection}. Try again!`
        computerScore++
    }
    console.log(playerSelection);

    
    resultDiv.textContent = result;
    updateScore();
    checkWinner();
    
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));







