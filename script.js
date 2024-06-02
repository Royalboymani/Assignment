function contactUs(){
    document.querySelector('.ContactUs-form').classList.add("contact");
    // document.querySelector('.ContactUs-form').classList.add("contact");

}
function submitbtn(){
    document.querySelector('.ContactUs-form').classList.add("contact");
}


// // script.js

// let slideIndex = 0;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function showSlides(n) {
//     const slides = document.querySelectorAll(".slide");
//     if (n >= slides.length) { slideIndex = 0 }
//     if (n < 0) { slideIndex = slides.length - 1 }
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     slides[slideIndex].style.display = "block";
// }

// // Automatic slideshow
// let autoSlideIndex = 0;
// autoShowSlides();

// function autoShowSlides() {
//     const slides = document.querySelectorAll(".slide");
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     autoSlideIndex++;
//     if (autoSlideIndex > slides.length) { autoSlideIndex = 1 }
//     slides[autoSlideIndex - 1].style.display = "block";
//     setTimeout(autoShowSlides, 3000); // Change image every 3 seconds
// }
