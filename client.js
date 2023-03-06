console.log('Hello World');

window.onload = function () {

    let screen = document.getElementById('screen');

    let buttons = document.querySelectorAll("button[id^='number']");

    for(let i =0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            screen.value += this.textContent;
        });
    }
}

let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function() {
    screen.value = "";
})

let equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("click", function() {
        screen.value = eval(screen.value);
    });

    
