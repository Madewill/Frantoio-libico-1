import { animate, inView } from 'motion';

const video = document.querySelector("video");
const loaderTag = document.querySelector("div.loader");
const loaderProgress = loaderTag.querySelector("span");

// Function to update loader progress
const updateLoaderProgress = () => {
  const loadedPercentage = (video.buffered.end(0) / video.duration) * 100;
  loaderProgress.textContent = `${loadedPercentage.toFixed(2)}%`;
};

// Event listener for video progress
video.addEventListener("progress", updateLoaderProgress);

// Event listener for video fully loaded
video.addEventListener("canplaythrough", () => {
  loaderProgress.textContent = "100%";
  setTimeout(() => {
    loaderTag.classList.add("closeFromBottom");
    setTimeout(() => {
      loaderTag.remove();

      // Trigger animations or other actions here
      // Animate nav and contents
      animate("nav", {
        translateY: ["-100%", "0%"],
        duration: 1000,
        easing: "easeInOutQuad",
      });

      animate(".contents", {
        translateY: ["100%", "0%"],
        duration: 1000,
        easing: "easeInOutQuad",
      });

    }, 1000); // Remove loader after 1 second (duration of the closing animation)
  }, 500); // Wait for 500ms before closing the loader to ensure smooth transition
});

// Initial loader progress update
updateLoaderProgress();

// Animate footer when it comes into view
inView("footer", (info) => {
  animate("footer", {
    translateY: ["100%", "0%"],
    duration: 1000,
    easing: "easeInOutQuad",
  });
});
