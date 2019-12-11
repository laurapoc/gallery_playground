"use strict";

$('[data-fancybox="gall"]').fancybox({
  loop: true,
  animationDuration: 1000
});

let sort = document.querySelector(".toggle");
let galleryMenu = document.querySelector(".photo");

// button "show more"
let showNum = 3;
sort.addEventListener("click", function() {
  if (showNum < galleryMenu.children.length) {
    let startImage = showNum;
    showNum = showNum + 3;
    for (let i = startImage; i < showNum; i++) {
      // adding zero opacity, otherwise IE fading out doesn't work
      galleryMenu.children[i].classList.add("set-zero-opacity");
      let delay = i - startImage;

      // adding "show" class
      galleryMenu.children[i].classList.add("show");
      galleryMenu.children[i].style.animation = `imageFade 1.5s ease forwards ${delay * 0.2}s`;

      // resetting opacity
      timeout = setTimeout(function() {
        galleryMenu.children[i].classList.remove("set-zero-opacity");
        
      }, 1500);
    }
  }
  $(function() {
    scrollElement();
  });
});

// scrolling to "Show more" button
let scrollElement = function() {
  let scrollButton = document.getElementById("button");
  scrollButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "end" });
};

// Button "show less"
let sortLess = document.querySelector(".toggle-less");
let timeout = null;
sortLess.addEventListener("click", function() {
  if (showNum > 3) {
    let lastImage = showNum;
    showNum = showNum - 3;
    for (let i = showNum; i < lastImage; i++) {
      let delay = lastImage - 1 - i;

      // adding full opacity
      galleryMenu.children[i].classList.add("set-full-opacity");
      galleryMenu.children[i].style.animation = `lessImageFade 1.5s ease forwards ${delay * 0.4}s`;

      // removing "show" class, resetting opacity
      timeout = setTimeout(function() {
        galleryMenu.children[i].classList.remove("set-full-opacity");
        galleryMenu.children[i].classList.remove("show");
        
      }, 1500);
    }
  }
  $(function() {
    scrollLessElement({ behavior: "smooth" });
  });
});

//  scrolling to "show less" button
let scrollLessElement = function() {
  let scrollLessButton = document.getElementById("button-less");
  scrollLessButton.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
};


