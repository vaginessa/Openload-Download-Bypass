// ==UserScript==
// @name         Openload Download Bypass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Openload Download Bypass [2018]
// @icon         http://pics.smotri.com/cskins/blue/smiles/ai.gif
// @downloadURL  https://gist.github.com/TwelveCharzz/393603140883a9672ec8/raw/Openload_download_bypass.user.js
// @updateURL    https://gist.github.com/TwelveCharzz/393603140883a9672ec8/raw/Openload_download_bypass.user.js
// @author       Diegiwg
// @match        http*://oload.win/f/*
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.display = "none";

    $('#realdl a').attr("href",'/stream/'+$('#DtsBlkVFQx').text());
    $("#realdl").slideDown();

    var realdl = document.getElementById("realdl").innerHTML;
    document.head.innerHTML = "";
    document.body.innerHTML = realdl;

    var href = document.getElementsByClassName("main-button dlbutton")[0].href;
    GM_setClipboard(href);
    location.href = href;
})();
