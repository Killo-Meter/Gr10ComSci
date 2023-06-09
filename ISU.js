var output = "";
var sum = document.getElementById("equal")
var toggle = 0;
var operator;
var operand1;
var operand2 = "";

function clearCalculator() {
	document.getElementById("sum").innerHTML = "";
	output = "";
	operand2 = "";
	operand1 = "";
	toggle = 0;
}
function numberPress(value){
	output+= value;
	document.getElementById("sum").innerHTML = output;
	if (toggle == 1) {
		operand2 += value;
	}
}
function operatorPress(value) {
	operand1 = output;
	operator = value;
	output+= value;
	document.getElementById("sum").innerHTML = output;
	toggle = 1;
}

function calculate() {
if (operator == '+'){
	document.getElementById("sum").innerHTML = Number.parseInt(operand1) + Number.parseInt(operand2);
}
if (operator == '-'){
	document.getElementById("sum").innerHTML = Number.parseInt(operand1) - Number.parseInt(operand2);
}
if (operator == 'x'){
	document.getElementById("sum").innerHTML = Number.parseInt(operand1) * Number.parseInt(operand2);
}
if (operator == '÷'){
	document.getElementById("sum").innerHTML = Number.parseInt(operand1) / Number.parseInt(operand2);
}
	operand2 = "";
	operand1 = "";
	toggle = 0;
	output = "";
}