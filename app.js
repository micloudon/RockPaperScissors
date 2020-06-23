//domselectors
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


//Math.floor(Math.random() * 3); is used to get a random number between 1-3
//math.floor is added to give us whole numbers instead of decimals
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    return "scissors";

}

function win(userChoice, computerChoice){
    const smallUserWord = " your ";
    const smallCompWord = " computers ";
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} beats ${smallCompWord}${convertToWord(computerChoice)} 
    <br><br> YOU WIN `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);

} 


function lose(userChoice, computerChoice){
    const smallUserWord = " your ";
    const smallCompWord = " computers ";
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${smallCompWord}${convertToWord(computerChoice)} beats ${smallUserWord}${convertToWord(userChoice)} 
    <br><br> YOU LOSE `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}

function draw(userChoice, computerChoice){
    const smallUserWord = " your ";
    const smallCompWord = " computers ";
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${smallUserWord}${convertToWord(userChoice)} equals ${smallCompWord}${convertToWord(computerChoice)} 
    <br><br> DRAW    `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp": 
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice); 
            break; 
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;  
    }
   
} 

game("c");


function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();
