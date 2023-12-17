let hand = ["rock", "paper", "scissor"];
let i = Math.floor(Math.random() * 3);

 function playerChoice() {
    myChoice = prompt("Choose rock, paper, or scissor");  
    lowCase = myChoice.toLowerCase("");
}

function computerChoice() {
    hand[i]
}

function playGame(playerSelection, computerSelection) {
    myChoice = prompt("Choose rock, paper, or scissor");  
    playerSelection = myChoice.toLowerCase("");
    computerSelection = hand[i];
    
    if (playerSelection == computerSelection) {
        alert("It is a Tie")
    }

    else if (playerSelection == "rock" && computerSelection == "scissor") {
        alert("You won")
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You lose")
    }

    else if (playerSelection == "paper" && computerSelection == "scissor") {
        alert("You lose")
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("You won")
    }

    else if (playerSelection == "scissor" && computerSelection == "paper") {
        alert("You won")
    }

    else if (playerSelection == "scissor" && computerSelection == "rock") {
        alert("You lose")
    }
}

playGame();




