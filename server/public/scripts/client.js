console.log('Hello World');

const SERVER_URL = 'http://localhost:5001';
const screen = document.getElementById('screen');
const historyList = document.getElementById("history-list");


    const buttons = document.querySelectorAll("button:not(#clear):not(#backspace):not(#power):not(#divide):not(#multiply):not(#subtract):not(#add):not(#decimal):not(#equals)");

    for(let i =0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            screen.value += this.textContent;
        });
    
}

//clear button
const clearButton = document.getElementById("clear");

//// Add event listener to the clear button
clearButton.addEventListener("click", function() {
    screen.value = "";
});

//backspace button
const backspaceButton = document.getElementById("backspace");

// Add event listener to the backspace button
backspaceButton.addEventListener("click", function(){
    screen.value = screen.value.slice(0,-1);
});

// power button
const powerButton = document.getElementById("power");

// Add event listener to the power button
powerButton.addEventListener("click", function() {
    screen.value += "**";

});

// divide button
const divideButton = document.getElementById("divide");

// Add event listener to the divide button
divideButton.addEventListener("click", function(){
    screen.value += "/";
});

// multiply button
const multiplyButton = document.getElementById("multiply");

// Add event listener to the multiply button
multiplyButton.addEventListener("click", function() {
    screen.value += "*"
});

	// subtract button
	const subtractButton = document.getElementById("subtract");

	// Add event listener to the subtract button
	subtractButton.addEventListener("click", function() {
		screen.value += "-";
	});

	//  add button
	const addButton = document.getElementById("add");

	// Add event listener to the add button
	addButton.addEventListener("click", function() {
		screen.value += "+";
	});

	//  decimal button
	const decimalButton = document.getElementById("decimal");

	// Add event listener to the decimal button
	decimalButton.addEventListener("click", function() {
			screen.value += ".";
		
	});

	//  equals button
	const equalsButton = document.getElementById("equals");

	// Add event listener to the equals button
	equalsButton.addEventListener("click", function() {
		console.log("screen.value:", screen.value);
		axios.post(`${SERVER_URL}/calculate`, { input: screen.value })
		  .then((response) => {
			console.log("response.data:", response.data);
			axios.get(`${SERVER_URL}/history`)
			  .then((response) => {
				console.log("history response.data:", response.data);
				displayHistory(response.data);
				screen.value = response.data[response.data.length - 1].result;
			  })
			  .catch((error) => {
				console.error(error);
			  });
    })
    .catch((error) => {
      console.error(error);
    });
});

function displayHistory(history) {
	historyList.innerHTML = "";
	for (let i = 0; i < history.length; i++) {
	  const li = document.createElement("li");
	  li.textContent = `${history[i].input} = ${history[i].result}`;
	  historyList.appendChild(li);
	}
  }







    
