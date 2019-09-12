    let userScore = 0;
    let compScore = 0;
    const userScoreSpan = document.getElementById("userScore");
    const compScoreSpan = document.getElementById("compScore");
    const scoreCardDiv = document.querySelector("scorecard");
    const resultPara = document.querySelector(".result > p");
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

function getcompChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}    

function win(userChoice, computerChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultPara.innerHTML = userChoice + " beat " + computerChoice + "! Player Wins!!!";
}

function lose(userChoice, computerChoice){
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultPara.innerHTML = userChoice + " beat " + computerChoice + "! Player Loses!!!";
}

function tie(userChoice, computerChoice){
    resultPara.innerHTML = userChoice + " equals " + computerChoice + "! Tie!!!";
}

function game(userChoice){
    const compChoice = getcompChoice();
    switch (userChoice + compChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, compChoice);
        break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, compChoice);
        break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            tie(userChoice, compChoice);
        break;
    }
}


function main(){

    rockButton.addEventListener("click", function(){
        game("Rock"); 
    })

    paperButton.addEventListener("click", function(){
        game("Paper");
    })

    scissorsButton.addEventListener("click", function(){
        game("Scissors");
    })
    
}
main();