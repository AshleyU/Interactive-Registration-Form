const userName = document.querySelector('#name').focus();
const selectJobTitle = document.querySelector('#title');
const otherJobRole = document.querySelector('#other-job-role');
const colorSelect = document.querySelector('#color');
const designSelect = document.querySelector('#design');
const regForActivities = document.querySelector('#activities');
let totalCost = document.querySelector('#activities-cost');
let calculatedTotalCost = 0;
const paymentMethod = document.querySelector('#payment');
const creditCard = document.querySelector("#credit-card");
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
const emailAddress = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const formElement = document.getElementsByTagName('form')[0];


//Sets the default payment method as Credit Card

const defaultPaymentMethod = paymentMethod.children[1].setAttribute("selected", "selected");

//Hides the "other" job description text field by default

otherJobRole.style.display = 'none';

//Hides the paypal and bitcoin payment descriptions by default

paypal.style.display = 'none';

bitcoin.style.display = 'none';

/*Listens for "other" to be selected from the drop down menu and if
it is then displays the "other job role?" text area */

selectJobTitle.addEventListener('change', (event) => {

	if (event.target.value === "other") {
		otherJobRole.style.display = 'block';
	} else {
		otherJobRole.style.display = 'none';
	}

});

//Disables the color select drop down menu by default

colorSelect.disabled = true;

/*Listens for which shirt design is choosen and changes
which color options are available for that design*/

designSelect.addEventListener('change', (event) => {

	for (let i = 0; i < colorSelect.children.length; i++) {
		colorSelect.disabled = false;
		let shirtDesign = event.target.value;
		let currentColorOption = colorSelect.children[i];
		let shirtTheme = currentColorOption.getAttribute("data-theme");

		if ( shirtDesign == shirtTheme ) {
			currentColorOption.hidden = false;
			shirtTheme = true;
		} else if ( shirtDesign != shirtTheme ) {
			currentColorOption.hidden = true;
			shirtTheme = false;
		}
	}
});

/*Listens for which activites are choosen and add or subtracts the
total and displays it in real time.*/

regForActivities.addEventListener('change', (event) => {
	let clickedActCost = event.target.getAttribute("data-cost");
	let actCostNumber = parseInt(clickedActCost);
	if (event.target.checked) {
		calculatedTotalCost += actCostNumber;
	} else {
		calculatedTotalCost -= actCostNumber;
	}
	totalCost.innerHTML = `Total: $${calculatedTotalCost} `;

});

/*Listens for which payment method is selected and changes
which displays accordingly.*/

paymentMethod.addEventListener('change', (event) => {
	let selectedPaymentMethod = event.target.value;

	if (selectedPaymentMethod == "paypal" ) {
		paypal.style.display = 'block';
		creditCard.style.display = 'none';
		bitcoin.style.display = 'none';

	} else if (selectedPaymentMethod == "bitcoin") {
		bitcoin.style.display = 'block';
		paypal.style.display = 'none';
		creditCard.style.display = 'none';
	}
});

/*Listens for the form to submit and checks if the 
name field is filled in or not. If the field is empty it won't submit.*/

formElement.addEventListener('submit', (event) => {
	let nameFieldValue = document.querySelector('#name').value;
	let nameTest = /s/.test(nameFieldValue);
	if (nameTest == false) {
		event.preventDefault();
	} 
});

/*Listens for the form to submit and checks if the 
email field is a vaild email format. If not, it won't submit.*/

formElement.addEventListener('submit', (event) => {
	let emailFieldValue = document.querySelector('#email').value;
	let emailTest = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailFieldValue);
	if (emailTest == false) {
		event.preventDefault();
	} 
});

/*Listens for the form to submit and checks to make sure
at least 1 activity has been selected. If not the form won't submit.*/

formElement.addEventListener('submit', (event) => {
	let isChecked = false;
	const activitiesBox = document.querySelector('#activities-box');
	const ActivitiesBoxInput = activitiesBox.querySelectorAll("input"); 
	for (let i = 0; i < ActivitiesBoxInput.length; i++) {
		if (ActivitiesBoxInput[i].checked) {
			isChecked = true;
			break;
		}
	} 
	if (!isChecked) {
		event.preventDefault();
	}
});

formElement.addEventListener('submit', (event) => {
	let creditCardNumberValue = document.querySelector('#cc-num').value;
	let ccTest = /^[0-9]{13,16}$/.test(creditCardNumberValue);
	if (ccTest == false) {
		event.preventDefault();
	} 
});


