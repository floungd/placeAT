const updateEvery = 30 * 1000;
const src = "https://place.army/overlay_target.png";
const style =
  "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";

let overlayImage = null;
if (window.top !== window.self) {
  window.addEventListener(
    "load",
    () => {
      const canvasContainer = document
        .querySelector("garlic-bread-embed")
        .shadowRoot.querySelector("garlic-bread-canvas")
        .shadowRoot.querySelector(".container");
      const canvas = canvasContainer.querySelector("canvas");

      overlayImage = document.createElement("img");
      overlayImage.style = style;

      const updateImage = () => (overlayImage.src = src + "?" + Date.now());

      updateImage();
      setInterval(updateImage, updateEvery);
      canvasContainer.appendChild(overlayImage);

      const canvasObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes") {
            overlayImage.style.width =
              mutation.target.getAttribute("width") + "px";
            overlayImage.style.height =
              mutation.target.getAttribute("height") + "px";
          }
        });
      });

      canvasObserver.observe(canvas, {
        attributes: true,
      });
    },
    false
  );
}