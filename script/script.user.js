// ==UserScript==
// @author       floungd
// @name         r/tyles Overlay for TylesAT
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  user overlay for r/tyles canvas
// @match        *://www.reddit.com*
// @grant        none
// ==/UserScript==
// feel free to use this!
(function() {
    'use strict';

    console.log("userscript enabled");

    const overlaySrc = "https://raw.githubusercontent.com/floungd/placeAT/refs/heads/main/overlay/overlay-01.png"; // your overlay source 

    function waitForCanvas() {
        const canvas = document.querySelector("#canvas-overlay");
        if (!canvas) {
            setTimeout(waitForCanvas, 500);
            return;
        }

        console.log("found canvas!");

        const container = canvas;
        const overlay = document.createElement("img");
        overlay.src = overlaySrc + "?" + Date.now();

        //position
        overlay.style.position = "absolute";
        overlay.style.zIndex = 9000; //he is over 9000!!!!
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.maxWidth = "100%";
        overlay.style.maxHeight = "100%";
        overlay.style.objectFit = "contain";
        overlay.style.pointerEvents = "none";
        overlay.style.imageRendering = "pixelated";
        overlay.style.opacity = "0.6";

        container.appendChild(overlay);

    }

    waitForCanvas();
})();