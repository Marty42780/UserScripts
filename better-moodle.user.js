// ==UserScript==
// @name         Better Moodle for EPITA
// @namespace    https://github.com/Marty42780/UserScripts
// @version      1.1
// @description  Moodle improvements for EPITA students
// @author       Marty42780
// @match        https://moodle.epita.fr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moodle.org
// @updateURL    https://raw.githubusercontent.com/Marty42780/UserScripts/main/better-moodle.user.js
// @downloadURL  https://raw.githubusercontent.com/Marty42780/UserScripts/main/better-moodle.user.js
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	// If the url is the login page, then click the button to connect
	if (document.location.href == "https://moodle.epita.fr/login/index.php") {
		document.querySelector("#loginlogo").innerHTML =
			"Connexion automatique ...";

		document.querySelector(".login-identityprovider-btn").click();
	}
})();
