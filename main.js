// Using jQuery, build a login form. The form should check to ensure that the username and password 
//are filled in before checking to see if the username/password combination is in the list below.

// The login form should display the following errors to the user if their * input is invalid:
// Please enter an email address before logging in.
// Please enter a password before logging in.
// Your user was not found.
// The password you entered is incorrect.
// If the user logs in successfully they should be redirected to http://* theironyard.com
// The email address field should not allow non-email address input.
// The password address field should have the letters obfuscated.
// The form should submit if the user types enter or clicks the submit button.
// Valid username / password combinations should be:
// aaron@theironyard.com / password123
// admin@google.com / pandas / honeycrisp

var form = $('form');
var userFound = false;  
var passwordCorrect = false;

form.on('submit', function(e) {

	//this prevents the form from re-loading
	e.preventDefault();

	var userName = $('.userName').val();
	var password = $('.password').val();

	//check if userName is empty 
	//use indexOf to check for @ symbol in email address, dont need regex  

	if ((userName === '') || (userName.indexOf('@') === -1)) {
		alert('Please enter an email address before loggin in.');
	}
	else if (password === '') {
		alert('Please enter a password before logging in.');
	}
	
	//need to check first for found user names.
	//then check that password for found user is correct.  

	userFound = checkUser(userName);
	if (!userFound) {
		alert('Your user was not found');		
	}

	passwordCorrect = checkFoundUserPassword(userName, password)

	if (!passwordCorrect) {
		alert('The password you entered is incorrect')
	}

	else {
		$(location).attr('href', 'http://www.theironyard.com')
	}
});

function checkUser(userName) {

	if ((userName === 'aaron@theironyard.com') || (userName === 'admin@google.com')) {
		return true; 
	}
	else {
		return false;  
	}
}

function checkFoundUserPassword(userName, password) {
	if (userName === 'aaron@theironyard.com' && (password === 'password123') || 
		(userName === 'admin@google.com' && (password === honeycrisp))) {
		return true;
	}
	else {
		return false;  
	}
}




