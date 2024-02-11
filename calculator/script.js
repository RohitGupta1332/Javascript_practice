let numbers = document.querySelectorAll(".num");
let screen = document.querySelector(".screen");
let clear = document.querySelector("#clear");
let clearAll = document.querySelector("#clear-all");
let equals = document.querySelector("#equals");
let expression = "";

clear.addEventListener("click", () => {
    expression = expression.substring(0, expression.length - 1);
    display(expression);
});
clearAll.addEventListener("click", () => {
    expression = "";
    display(expression);
})
equals.addEventListener("click", () => {
    try {
        let result = eval(expression);
        display(result);
        expression = result.toString();
    } catch (error) {
        display("Error");
    }
});


numbers.forEach((num) => {
    num.addEventListener("click", () =>{
        expression += num.innerText;
        display(expression);
    })
});

function display(content){
    screen.innerText = content;
};