var output = "";
var sum = document.getElementById("equal")

function modOutput(value) {
	output += value;
	document.getElementById("sum").innerHTML = output;
}
function clearCalculator() {
	document.getElementById("sum").innerHTML = "";
	output = "";
}
function calculate(){
	
}