const userName = document.querySelector('#name').focus();
const selectJobTitle = document.querySelector('#title');
const otherJobRole = document.querySelector('#other-job-role');

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