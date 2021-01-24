const userName = document.querySelector('#name').focus();
const selectJobTitle = document.querySelector('#title');
const otherJobRole = document.querySelector('#other-job-role');
const colorSelect = document.querySelector('#color');
const designSelect = document.querySelector('#design');
const regForActivities = document.querySelector('#activities');
let totalCost = document.querySelector('#activities-cost');
let calculatedTotalCost = 0;

//Hides the text field to describe a job when "other" is selected by default

otherJobRole.style.display = 'none';

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



