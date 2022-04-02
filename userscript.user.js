// ==UserScript==
// @name        /r/Kaguya_sama place edit
// @namespace   Violentmonkey Scripts
// @match       https://hot-potato.reddit.com/embed*
// @grant       none
// @version     0.1
// @author      twd + whoever made this originally
// @description 4/2/2022, 2:28:03 PM
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/twoad/test/30127ea0010b101a3515c0024b9cb852bf2ca78e/kaguya-overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            return i;
        })())
    }, false);
}
