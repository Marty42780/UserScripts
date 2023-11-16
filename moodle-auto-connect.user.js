// ==UserScript==
// @name         Moodle auto connect
// @namespace    https://github.com/Marty42780/UserScripts
// @version      1.0
// @description  Automatically connects you to Moodle
// @author       Marty42780
// @match        https://moodle.epita.fr/login/index.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=epita.fr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector("#loginlogo").innerHTML = "Connexion automatique ...";

    document.querySelector(".login-identityprovider-btn").click();
})();