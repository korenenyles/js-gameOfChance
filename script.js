let userChoice = document.getElementById("rock").addEventListener(click, myFunction)
    
let computerChoice = Math.random();
  if (computerChoice < 0.25) {
	computerChoice = "Rock";
  } else if(computerChoice <= 0.70) {
	computerChoice = "Paper";
  } else {
	computerChoice = "Scissors";
  } 

let compare = function(choice1,choice2) {
    
    if (choice1 === choice2) {
        
        return "Tie!" + " " + "Play Again?" ;
    }
    
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors") {
            return "Rock Wins" + "<br>" + "You're the WINNER!";
        }
        else {
            return "Paper Wins" + "<br>" + "You LOST!";
        }
    }
    
    else if (choice1 === "paper") {
        
        if (choice2 === "rock") {
            return "Paper Wins" + "<br>" + "You Win!";
        }
        else {
            return "Scissors Wins" + "<br>" + "You Lose!";
        }
            
    }
    
    else if (choice1 === "scissors") {
        
        if (choice2 === "rock") {
            return "Rock Wins" + "<br>" + "You Lost!";
        }
        else {
            return "Scissors Win" + "<br>" + "WINNER WINNER!";
        }
    }
    
    
    } 

    
    let computerChoose = document.createElement('div')
        computerChoose.textContent = "The Computer Chose:" + computerChoice + "<br>" + compare(userChoice,computerChoice);
        document.body.appendChild
//    document.write("Computer chose: " + computerChoice + "<br>");
//    document.write(compare(userChoice,computerChoice));