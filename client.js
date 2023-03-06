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

