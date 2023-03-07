console.log('Hello World');

const screen = document.getElementById('screen');

    const buttons = document.querySelectorAll("button:not(#clear):not(#backspace):not(#power):not(#divide):not(#multiply):not(#subtract):not(#add):not(#decimal):not(#equals)");

    for(let i =0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            screen.value += this.textContent;
        });
    
}

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function() {
    screen.value = "";
});

const backspaceButton = document.getElementById("backspace");

backspaceButton.addEventListener("click", function(){
    screen.value = screen.value.slice(0,-1);
});

const powerButton = document.getElementById("power");

powerButton.addEventListener("click", function() {
    screen.value += "**";

});

const divideButton = document.getElementById("divide");

divideButton.addEventListener("click", function(){
    screen.value += "/";
});

const multiplyButton = document.getElementById("multiply");

multiplyButton.addEventListener("click", function() {
    screen.value += "*"
});

	// Get the subtract button
	const subtractButton = document.getElementById("subtract");

	// Add event listener to the subtract button
	subtractButton.addEventListener("click", function() {
		screen.value += "-";
	});

	// Get the add button
	const addButton = document.getElementById("add");

	// Add event listener to the add button
	addButton.addEventListener("click", function() {
		screen.value += "+";
	});

	// Get the decimal button
	const decimalButton = document.getElementById("decimal");

	// Add event listener to the decimal button
	decimalButton.addEventListener("click", function() {
		if (!screen.value.includes(".")) {
			screen.value += ".";
		}
	});

	// Get the equals button
	const equalsButton = document.getElementById("equals");

	// Add event listener to the equals button
	equalsButton.addEventListener("click", function() {
        console.log("screen.value:", screen.value);
		screen.value = eval(screen.value);
	});


    
