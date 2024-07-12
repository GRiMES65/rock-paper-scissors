console.log("Hello World")

const choice = ["rock", "paper", "scissors"];

function computerChoice(){
    let compChoice = choice[Math.floor(Math.random() * 3)];
    console.log("Computer choice: " + compChoice);
    return compChoice;
}

function humanChoice(){
    let humChoice = prompt("Enter your answer: ").toLowerCase();
    console.log("Human choice: " + humChoice);
    return humChoice;
}


let humanScore = 0; 
let computerScore = 0;


function playRound(computerChoice, humanChoice){
    if (computerChoice === humanChoice){
        console.log("It's a draw!")
    }

    else if (computerChoice === "rock" && humanChoice === "scissors"){
        console.log("You lose! Rock beats scissors.");
        computerScore++;
        
    }

    else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }

    else if (computerChoice === "scissors" && humanChoice === "rock"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }

    else if (computerChoice === "scissors" && humanChoice === "paper"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }

    else if (computerChoice === "paper" && humanChoice === "rock"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }

    else if (computerChoice === "paper" && humanChoice === "scissors"){
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }

    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);

    

}
for (let i=0; i<5; i++){
    let humChoice = humanChoice();
    let compChoice = computerChoice();
    playRound(compChoice, humChoice);

}

if (computerScore > humanScore){
    console.log("Computer wins! Try again.");
}
else if (humanScore > computerScore){
    console.log("You win! Good work.");
}
else {
    console.log("The game is a draw.");
}