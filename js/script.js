var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  // spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// dark mood
var darkMode = document.getElementById("dark-mode");
var imgLogo = document.getElementById("header-logo");
var footer = document.getElementById("footer");
var footerHeader1 = document.getElementById("footer-header1");
var footerHeader2 = document.getElementById("footer-header2");
var footerHeader3 = document.getElementById("footer-header3");
var footerHeader4 = document.getElementById("footer-header4");

darkMode.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    imgLogo.src = "images/logo_light.png";
    footer.style.backgroundColor = "black";
    footerHeader1.style.color = "white";
    footerHeader2.style.color = "white";
    footerHeader3.style.color = "white";
    footerHeader4.style.color = "white";

  }
  else{
    imgLogo.src = "images/logo_dark.png";
  }
};


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}