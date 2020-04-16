const loginForm = document.getElementById("login-form");
const loginFormPasswordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("error-message");
const userCookie = "prophetic_school_password";
const pw = "timetolearn";

loginFormPasswordInput.addEventListener("input", function () {
	hideErrorMessage();
});

loginForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = loginFormPasswordInput.value;
	if (checkPassword(input)) {
		return logUserIn(input);
	}
	return displayErrorMessage();
});

checkIfLoggedIn();

function checkIfLoggedIn() {
	const pwCookie = getCookie(userCookie);
	if (pwCookie === pw) {
		return hideLoginModal();
	}
	return hideMainContent();
}

function hideLoginModal() {
	const modal = document.getElementById("login-modal");
	modal.classList.remove("is-active");
}

function hideMainContent() {
	const content = document.getElementById("main-content");
	content.innerHTML = "";
}

function checkPassword(string) {
	if (string === pw) {
		return true;
	}
	return false;
}

function displayErrorMessage() {
	errorMessage.classList.remove("is-hidden");
}

function hideErrorMessage() {
	errorMessage.classList.add("is-hidden");
}

function logUserOut() {
	const d = new Date("January 1, 2000 01:00:00");
	document.cookie = `${userCookie}= ; path = / ; expires = ${d.getUTCDate()}`;
	location.reload();
}

function logUserIn(password) {
	const today = new Date();
	const tomorrow = new Date(today.getTime() + 2.16e7);
	if (checkPassword(password)) {
		document.cookie = `${userCookie}=${password} ; path = / ; expires ${tomorrow}`;
		return location.reload();
	} else {
		return false;
	}
}

function getCookie(name) {
	var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	if (match) {
		return match[2];
	} else {
		return false;
	}
}
