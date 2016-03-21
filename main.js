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

form.on('submit', function() {

	//var userName = $('.userName');
	//var password = $('.password');

	if ($('.userName').val() === '') {
		alert('Please enter an email address before loggin in.');
	}
	else if ($('.password').val() === '') {
		alert('Please enter a password before logging in.');
	}
	
	//check if password and user name are found

	userFound = checkUser(userName, password);
	if (!userFound) {
		alert('Your user was not found');		
	}

});

function checkUser(userName, password) {

	if (userName === 'aaron@theironyard.com') && (password === 'password123') {
		return true; 
	}
	else if (userName === 'admin@google.com') && (password === 'honeycrisp') {
		return true;
	}
	else {
		return false;  
	}
}





