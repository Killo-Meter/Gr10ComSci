var randomNumberPassword = Math.floor(Math.random() * 99999999999) + 10000000000;

document.getElementById("newPassord").innerHTML = randomNumberPassword;

function checkPassword() {
	"use strict"
	var inputPassword = document.getElementById("input").value;

	if (inputPassword == randomNumberPassword) {
		window.alert("Cowobunga!");
	}
	else {
		window.alert("Sucks to Suck!");
	}
}