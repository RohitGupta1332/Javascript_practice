let options = document.querySelectorAll(".option");
let userBtn = document.querySelector(".user-score");
let compBtn = document.querySelector(".comp-score");
let compChoice = document.querySelector(".comp-choice");
compChoice.disabled = true;
let userScore = 0
let compScore = 0

options.forEach((option) => {
    option.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 3);
        if(option === options[0]){ // user chose rock
            if(randomNumber === 1) //computer chose paper
                compScore++;
            else if(randomNumber === 2)//computer chose scissor
                userScore++;
        }
        else if(option === options[1]){ //user chose paper
            if(randomNumber === 0){ //comp chose rock
                userScore++;
            }
            else if(randomNumber === 2){ //comp chose scissor
                compScore++;
            }
        }
        else{ //user chose scissor
            if(randomNumber === 0){ //comp chose rock
                compScore++;
            }
            else if(randomNumber === 1){ //comp chose paper
                userScore++;
            }
        }
        compChoice.innerText = `Computer chose ${options[randomNumber].innerText}!`;
        userBtn.innerText = userScore;
        compBtn.innerText = compScore;
    })
})