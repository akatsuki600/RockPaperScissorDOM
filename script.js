const startGameBtn = document.querySelector("#startGameBtn");
const startDialog = document.querySelector("#startDialog");
const choices = document.querySelectorAll("#userChoices > #choices > div");
const resultText = document.querySelector("#resultText");
const gameHeading = document.querySelector("#gameHeading");
const gameWindow = document.querySelector("#gameWindow");
const compChoiceCircle = document.querySelectorAll("#compChoices > #choices > div");
const playAgainGameBtn = document.querySelector("#playAgainGameBtn");
const endDialog = document.querySelector("#endDialog");
const endDialogHeading = document.querySelector("#endDialogHeading");
const endDialogSubHeading = document.querySelector("#endDialogSubHeading");
const clickSound =  new Audio('assets/click.mp3');
const winSound =  new Audio('assets/win.mp3');
const loseSound =  new Audio('assets/lose.mp3');
const tieSound =  new Audio('assets/tie.mp3');
const gameWinSound = new Audio('assets/gameWin.mp3');
const gameLoseSound = new Audio('assets/gameLose.mp3');
let userScoreText = document.querySelector("#userScore");
let compScoreText = document.querySelector("#compScore");
let userScore = 0;
let compScore = 0;


//initial splash screen, for user to start game

startDialog.addEventListener("click",e => {
    if(e.target.matches("button")) {
        clickSound.play()
        startDialog.style.display = "none"
        gameWindow.classList.toggle("hiddenClass")
        gameStart();
    };
})



function gameStart(){

//adds event listener to each option and assign the value to userInput

        const playRound = choices.forEach((element) => {
        element.addEventListener("click",(e)=>{

            let computerChoice = Math.floor(Math.random() * 3) + 1
            const choiceContainer = element.innerText.trim()
            const userChoice = choiceContainer.substr(2,choiceContainer.length).trim();
            //assigns value to random number from comp
            switch (computerChoice){
                case 1:
                    computerChoice = "ROCK";
                    break;
                case 2:
                    computerChoice = "PAPER";
                    break;
                case 3:
                    computerChoice = "SCISSOR";
                    break;
                default:
                    console.log(`${computerChoice} computerChoice error`)
            }

            //compares userChoice with computerChoice 


            gameHeading.innerText = "Choose Your Next Move";
            
            if (userChoice == computerChoice){
                resultText.innerHTML = `<span style=color:purple>TIE!</span>  you both chose ${userChoice}`
                tieSound.play();
            }

            if (userChoice == "ROCK" && computerChoice == "SCISSOR"){
                resultText.innerHTML = `<span style=color:green>YOU WON,</span> ${userChoice} beats ${computerChoice}`;
                userScoreText.innerText = `Score: ${userScore+=1}`
                winSound.play();
            }

            if (userChoice == "PAPER" && computerChoice == "ROCK") {
                resultText.innerHTML = `<span style=color:green>YOU WON,</span> ${userChoice} beats ${computerChoice}`;
                userScoreText.innerText = `Score: ${userScore += 1}`;
                winSound.play()
            }
            if (userChoice == "SCISSOR" && computerChoice == "PAPER") {
                resultText.innerHTML = `<span style=color:green>YOU WON,</span> ${userChoice} beats ${computerChoice}`;
                userScoreText.innerText = `Score: ${userScore += 1}`;
                winSound.play()
            }
            if (userChoice == "ROCK" && computerChoice == "PAPER") {
                resultText.innerHTML = `<span style=color:red>YOU LOST,</span> ${computerChoice} beats ${userChoice}`;
                compScoreText.innerText = `Score: ${compScore += 1}`;
                loseSound.play()
            }
            if (userChoice == "PAPER" && computerChoice == "SCISSOR") {
                resultText.innerHTML = `<span style=color:red>YOU LOST,</span>  ${computerChoice} beats ${userChoice}`;
                compScoreText.innerText = `Score: ${compScore += 1}`;
                loseSound.play()
            }
            if (userChoice == "SCISSOR" && computerChoice == "ROCK") {
                resultText.innerHTML = `<span style=color:red>YOU LOST,</span> ${computerChoice} beats ${userChoice}`;
                compScoreText.innerText = `Score: ${compScore += 1}`;
                loseSound.play()
            }


            //game over condition


            if (userScore >= 5 || compScore >= 5) {
                gameWindow.classList.toggle("hiddenClass")
                endDialog.style.display = "flex"
            }
            if (userScore >= 5) {
                gameWinSound.play();
                endDialogHeading.innerText = "You Won"
                endDialogSubHeading.innerText = `Your Score: ${userScore}`
            }
            if (compScore >= 5) {
                gameLoseSound.play();
                endDialogHeading.innerText = "You Lost"
                endDialogSubHeading.innerText = `Computer won ${compScore} rounds against you`
            }
        });
    })
};

function resetScore(){

    userScore = 0
    compScore = 0
    compScoreText.innerText = `Score: 0`
    userScoreText.innerText = `Score: 0`
    gameHeading.innerText = "Choose Your Move";
    resultText.innerText = ""
    element.replaceWith(element.cloneNode(true));
}   

endDialog.addEventListener("click",e => {
    if(e.target.matches("button")) {
        clickSound.play()
        endDialog.style.display = "none";
        gameWindow.classList.toggle("hiddenClass");
        resetScore();
        gameStart();
    };
})

  
