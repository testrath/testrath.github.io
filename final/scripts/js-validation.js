window.onload = init;

function init(){

	$('#btn-submit').on('click', function(event){
		// this is required to make the form not submit when the submit button is clicked
		event.preventDefault();

		required_check();
	});
}

function required_check() {

	// to select the required text input, password, email and textarea
	var required_inputs = $('.required input, .required textarea');

	// $.each loop is used to loop through a Jquery Array 
	// It requires an Array and a iteration function that accesses the index and the value from the array
	$.each(required_inputs, function(input_index, req_input) {
		

		// .closest is direct parent selector in Jquery 
		// this returns the fist element going in parent direction i.e. upward in the DOM that matches the slector mentioned in the ()
		// In this case we are accessing the ('.input-container') parent of the current "req_input"
		var required_container = $(req_input).closest('.input-container');
		var input_label = $(required_container).find('.label-text').text();
		// .find is used to select child and sub children of an element 
		var feedback = $(required_container).find('.feedback');
		// .val() is the jquery function that gives access to the value of an input field
		// .trim() is a javascript function to trim starting and ending spaces from a string
		var input_val = $(req_input).val().trim();

		// console.log is used to display Javascript vaules on the console tab of the browser
		console.log("Label:"+input_label);
		console.log("Value:"+input_val);
		// This hides the feedback before the required validation
		$(feedback).fadeOut(0);
		// this checks if input_val equals to an empty string ''
		if(input_val=='') {

			console.log('empty value')

			$(required_container).addClass('has-error');
			$(required_container).removeClass('has-success');


			// we use .text and + to concatenate and add the desired text for feedback
			// A value is required for "First Name"
			$(feedback).text('A value is required for "'+input_label+'"');

		} else {
			console.log('entered value');

			$(required_container).addClass('has-success');
			$(required_container).removeClass('has-error');

			$(feedback).text('The entered value for "'+input_label+'" is acceptable.');
		}

		// This shows the feedback when validation is complete
		$(feedback).fadeIn(300);


	});

	// select all the required checkbox containers
	var required_checkbox_containers = $('.required-checkbox');

	// loop through the required checkbox containers
	$.each(required_checkbox_containers, function(req_check_container_index, req_check_container){

		// get all the checkboxes in the current checkbox container
		var required_checkboxes = $(req_check_container).find('input[type=checkbox]');
		// select the feedbakc for the current checkbox container
		var checkbox_feedback = $(req_check_container).find('.feedback');
		// get the label text to be used in the feedback
		var checkbox_label = $(req_check_container).find('.label-text').text();
		// check counter to count the number of checkboxes that have been checked
		var check_counter = 0;

		// hide the checkbox feedback
		$(checkbox_feedback).fadeOut(0);

		// we loop through the checkboxes
		$.each(required_checkboxes, function(req_check_index, req_check){
			// .prop('checked') returns true or false based on the fact if the given checkbox is selected or not
			console.log($(req_check).prop('checked'));

			// This if statement determines if the checkbox is checked or not
			if($(req_check).prop('checked')) {
				// if the checkbox is checked we increase the counter by 1
				check_counter++;
			}

		});

		// in this if statement we check and determine if the value of check counter is greater than zero
		if(check_counter>0) {
			// This is a success
			$(req_check_container).addClass('has-success');
			$(req_check_container).removeClass('has-error');
			$(checkbox_feedback).text('The entered value for "'+checkbox_label+'" is acceptable.');

		} else {
			// This is an error
			$(req_check_container).removeClass('has-success');
			$(req_check_container).addClass('has-error');
			$(checkbox_feedback).text('A value is required for "'+checkbox_label+'"');

		}

		// We show the checkbox feedback after the validation
		$(checkbox_feedback).fadeIn(300);
	});
}