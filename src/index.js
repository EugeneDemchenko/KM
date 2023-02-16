import { mobileMenu,submitForm } from "./JS/header";
import { selectTour } from "./JS/tours";
mobileMenu()
submitForm()
selectTour()

// const carousel = document.querySelector('.carousel');
// const cellCount = 6;
// let selectedIndex = 0;

// function rotateCarousel() {
//   var angle = selectedIndex / cellCount * -360;
//   carousel.style.transform = 'translateZ(-860px) rotateY(' + angle + 'deg)';
// }

// const prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener( 'click', function() {
//   selectedIndex--;
//   rotateCarousel();
// });

// const nextButton = document.querySelector('.next-button');
// nextButton.addEventListener( 'click', function() {
//   selectedIndex++;
//   rotateCarousel();
// });



// const activeBtn = document.querySelectorAll('.tours__button')
// const handleClick =()=>{console.log(`yep!: ${activeBtn}`);}

// activeBtn.addEventListener('click', handleClick)
// radius = Math.round((972 / 2) / Math.tan(Math.PI / cellCount))
// console.log(radius);