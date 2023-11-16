// ==UserScript==
// @name         Moodle force french
// @namespace    http://github.com/Marty42780/UserScripts
// @version      1.0
// @description  Force Moodle to display in French
// @author       Marty42780
// @match        https://moodle.epita.fr/my/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=epita.fr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.includes("lang=fr") == false)
    {
        window.location.href = "https://moodle.epita.fr/my/index.php?lang=fr";
    };
})();