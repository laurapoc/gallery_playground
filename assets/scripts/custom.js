"use strict";

$('[data-fancybox="gall"]').fancybox({
  loop: true,
  animationDuration: 1000
});

let sort = document.querySelector(".toggle");
let galleryMenu = document.querySelector(".photo");
// scrolling to "Show more" button
let scrollElement = function() {
  let scrollButton = document.getElementById("button");
  scrollButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "end" });
  console.log(scrollButton);
};
// button "show more"
let showNum = 3;
sort.addEventListener("click", function() {
  if (showNum < galleryMenu.children.length) {
    showNum = showNum + 3;
    for (let i = 0; i < showNum; i++) {
      galleryMenu.children[i].classList.add("show");
    }
  }

  $(function() {
    scrollElement();
  });
});

// Button "show less"
let sortLess = document.querySelector(".toggle-less");
sortLess.addEventListener("click", function() {
  if (showNum > 3) {
    console.log("show num:", showNum);
    let remainingChildren = showNum - 3;
    for (let i = showNum - 1; i >= remainingChildren; i--) {
      console.log("i:", i, galleryMenu.children[i]);
      galleryMenu.children[i].classList.remove("show");
    }
    showNum = remainingChildren;
  }
});
