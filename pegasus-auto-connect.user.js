// ==UserScript==
// @name         Pegasus auto connect
// @namespace    http://github.com/Marty42780/UserScripts
// @version      1.0
// @description  Automatically connects you to Pegasus for EPITA students
// @author       Marty42780
// @match        https://prepa-epita.helvetius.net/pegasus/index.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=helvetius.net
// @downloadURL  https://raw.githubusercontent.com/Marty42780/UserScripts/main/pegasus-auto-connect.user.js
// @updateURL    https://raw.githubusercontent.com/Marty42780/UserScripts/main/pegasus-auto-connect.user.js
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	if (document.getElementsByClassName("parametrage item").length == 0) {
		window.location.href =
			"https://prepa-epita.helvetius.net/pegasus/o365Auth.php";
	}

	document.querySelector("section.block_calendar_month").remove();
	document.querySelector("footer").remove();
})();
P;
