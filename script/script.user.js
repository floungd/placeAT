// ==UserScript==
// @author       floungd
// @name         r/tyles Overlay for TylesAT
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  user overlay for r/tyles canvas
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    const overlaySrc = "https://raw.githubusercontent.com/floungd/placeAT/refs/heads/main/overlay/overlay-01.png"; // dein Overlay

    function waitForCanvas() {
        const canvas = document.querySelector("#canvas-overlay");
        if (!canvas) {
            setTimeout(waitForCanvas, 500);
            return;
        }

        console.log("Canvas gefunden!", canvas);

        const container = canvas;
        const overlay = document.createElement("img");
        overlay.src = overlaySrc;

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
        overlay.style.opacity = "0.5";

        container.appendChild(overlay);

        console.log("Overlay hinzugefügt im Container!");
    }

    waitForCanvas();
})();