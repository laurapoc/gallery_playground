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
    let startImage = showNum;
    showNum = showNum + 3;
    for (let i = startImage; i < showNum; i++) {
      let delay = i - startImage;
      console.log(startImage, delay);
      galleryMenu.children[i].classList.add("show");
      galleryMenu.children[i].style.animation = `imageFade 1.5s ease forwards ${delay * 0.2}s`;
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
    console.log(showNum);
    let lastImage = showNum;
    console.log("last image:", lastImage);
    showNum = showNum - 3;
    for (let i = showNum; i < lastImage; i++) {
      let delay = lastImage - i;
      console.log("delay:", delay);
      let stylestr = `lessImageFade 1.5s ease forwards ${delay * 0.2}s`;
      console.log(galleryMenu.children[i], stylestr);
      galleryMenu.children[i].classList.replace("show", "lessImageFade");
      galleryMenu.children[i].style.animation = stylestr;

      
    }
  }
  $(function() {
    scrollLessElement();
  });
});

//  scrolling to "show less" button
let scrollLessElement = function() {
  let scrollLessButton = document.getElementById("button-less");
  scrollLessButton.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  console.log(scrollLessButton);
};


// button "show more" the second version
// let showNum = 3;
// sort.addEventListener("click", function() {
//   if (showNum < galleryMenu.children.length) {
//     showNum.forEach(addShowClass());    
//   }
//   $(function() {
//     scrollElement();
//   });
// });

// function addShowClass() {
//   if (showNum < galleryMenu.children.length) {
//     showNum = showNum + 1;
//     for (let i = 0; i < showNum; i++) {
//       galleryMenu.children[i].classList.add("show");
//     }
//   }
// }
