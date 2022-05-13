
// window.onscroll = function() {myFunction()};


// var header = document.querySelector(".menu-container");
// var menu = document.querySelector(".menu");
// var sticky = header.offsetTop;



// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }



// var navbar = document.querySelector(".header-nav-bar ");
// var menu = document.querySelector(".menu");
// var sticky = header.offsetTop;

// window.onscroll = function () {
//     if (window.pageYOffset >= menu.offsetTop) {
//         navbar.classList.add("sticky");
//     }
//     else{
//         navbar.classList.remove("sticky");
//     }
// }






$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage div').hide();
  $($(this).attr('href')).show();
});