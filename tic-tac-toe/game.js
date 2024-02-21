let boxes = document.querySelectorAll('.box');
let reset_game = document.querySelector("#reset");
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let turn = true;
let newgame = document.querySelector("#new-game");
let winner = document.querySelector(".winner");
winner.style.visibility = "hidden";

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
        }
        else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })

});
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos1 === pos3) {
                winner.style.visibility = "visible";
                winner.style.color = "black";
                winner.innerText = `Player ${pos1} wins!`;
                disable();
            }
        }
    }
}
const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enable = () => {
    winner.style.visibility = "hidden";
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}

reset_game.addEventListener('click', () => {
    reset()
});
newgame.addEventListener('click', () =>{
    enable();
})

const reset = () => {
    winner.style.visibility = "hidden";
    for(let box of boxes){
        box.innerText = "";
        turn = true;
        box.disabled=false;
    }
}