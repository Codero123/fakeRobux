// ==UserScript==
// @name         Fake Robux Script
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  Replaces your robux amount with a different amount! This doesnt actually change your Robux Balance!
// @author       SPIDERPLAYZ123_YT
// @match        *://*.roblox.com/*
// @icon         https://tr.rbxcdn.com/45dc9e9a53c3551a6940866d183f9993/150/150/AvatarHeadshot/Png
// @grant        none
// ==/UserScript==

function start() {
    var robux = "10M+" //change this to your desired robux amount!
    var precise_robux = "10,986,342" // change this to your precise desired robux amount!
    document.getElementById('nav-robux-amount').innerHTML = robux
    setTimeout(start, 0);
    document.getElementById('nav-robux-balance').innerHTML = precise_robux + " Robux"
    setTimeout(start, 0);
}
start();
