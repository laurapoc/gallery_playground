"use strict";

$('[data-fancybox="gall"]').fancybox({
  loop: true,
  animationDuration: 1000
});

let sort = document.querySelector(".toggle");
let galleryMenu = document.querySelector(".photo");
let scrollElement = function() {
  let scrollButton = document.getElementById("button");
  scrollButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "end" });
  console.log(scrollButton);
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
    scrollElement();
  });
});
