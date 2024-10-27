$(document).ready(function () {
	$(".modal").modal();
});
$(document).ready(function () {
	$("select").formSelect();
});

// JS Donation form validation
const form = document.getElementById("donations-form");
const donation = document.getElementById("donation-input");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const country = document.getElementById("country");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipCode = document.getElementById("zip-code");
const cardNumber = document.getElementById("card-num");
const expiration = document.getElementById("expiration");
const securityCode = document.getElementById("security-code");
const confirmBTN = document.getElementById("confirm-btn");
let isValid = true;
let isEmpty = false;

confirmBTN.addEventListener("click", (e) => {
	e.preventDefault();
	validateForm(e);
});

function validateForm() {
	isValid = true;
	if (donation.value === "" || donation.value <= 0) {
			setInvalid(donation, "Please enter a valid donation");
	} else {
			setValid(donation);
	}
	if (firstName.value.trim() === "") {
			setInvalid(firstName, "Please enter a valid name");
	} else {
			setValid(firstName);
	}
	if (lastName.value.trim() === "") {
			setInvalid(lastName, "Please enter a valid name");
	} else {
			setValid(lastName);
	}
	if (!validateEmail(email.value.trim())) {
			setInvalid(email, "Please enter a valid email");
	} else {
			setValid(email);
	}
	if (!validatePhoneNumber(phoneNumber.value)) {
			setInvalid(phoneNumber, "Please enter a valid phone number");
	} else {
			setValid(phoneNumber);
	}
	if (address.value.trim() === "") {
			setInvalid(address, "Please enter a valid address");
	} else {
			setValid(address);
	}
	if (city.value.trim() === "") {
			setInvalid(city, "Please enter a valid city");
	} else {
			setValid(city);
	}
	if (state.value.trim() === "") {
			setInvalid(state, "Please enter a valid state");
	} else {
			setValid(state);
	}
	if (!validateZipCode(zipCode.value)) {
			setInvalid(zipCode, "Please enter a valid zipcode");
	} else {
			setValid(zipCode);
	}
	if (!validateCardNumber(cardNumber.value)) {
			setInvalid(cardNumber, "Please enter a valid card number");
	} else {
			setValid(cardNumber);
	}
	if (expiration.value === "") {
			setInvalid(expiration, "Please enter a valid expiration date");
	} else {
			setValid(expiration);
	}
	if (securityCode.value === "") {
			setInvalid(securityCode, "Please enter a valid security code");
	} else {
			setValid(securityCode);
	}
	if (isValid) {
			form.submit();
	}
}
// Validate email function
function validateEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}
// Validate phone number
function validatePhoneNumber(phoneNumber) {
	const phonePattern = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
	return phonePattern.test(phoneNumber);
}
// Validate zipcode
function validateZipCode(zipCode) {
	const zipCodePattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
	return zipCodePattern.test(zipCode);
}
// Validate card number
function validateCardNumber(cardNumber) {
	const cardNumberPattern = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
	return cardNumberPattern.test(cardNumber);
}
// Invalid Function
function setInvalid(element, message) {
	const inputField = element.parentElement;
	const errorMessages = inputField.querySelector(".error-message");
	isValid = false;
	errorMessages.innerText = message;
	inputField.classList.add("invalid");
	inputField.classList.remove("valid");
}
// Valid Function
function setValid(element) {
	const inputField = element.parentElement;
	const errorMessages = inputField.querySelector(".error-message");
	isValid = true;
	errorMessages.innerText = "";
	inputField.classList.add("valid");
	inputField.classList.remove("invalid");
}
function emptyInput() {
	isEmpty = true;
}