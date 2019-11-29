"use strict";

$('[data-fancybox="gall"]').fancybox({
  loop: true,
  animationDuration: 1000
});

let sort = document.querySelector(".gallery_toggle");
let galleryMenu = document.querySelector(".photo");
let focusElement = function () {
 let focusButton = document.getElementById("gallery-toggle");
 focusButton.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  console.log(focusButton);
};
let showNum = 3;
sort.addEventListener("click", function() {
  
  if (showNum < galleryMenu.children.length) {
    showNum = showNum + 3;
    for (let i = 0; i < showNum; i++) {
      galleryMenu.children[i].classList.add("show");
      galleryMenu.children[i].children[0].classList.add("enableTransition");
    }
  } else {
    for (let i = 0; i < showNum; i++) {
      galleryMenu.children[i].classList.remove("show");
      galleryMenu.children[i].children[0].classList.remove("enableTransition");
    }
    showNum = 3;
  }
  $(function() {
    focusElement();
 });
});
