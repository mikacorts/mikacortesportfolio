// Menu bar toggle
document.addEventListener('DOMContentLoaded', () => {
  const menubar = document.querySelector('#menu');
  const Navbar = document.querySelector('.navbar');

  menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
  };

  // Google Sheets Form Submission
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz2IrgPmhgV_6nYV0WW0jg_lPXje4DFUemHOAyt6lxuuCF8B2Q8pyEITScDzuPv24Sz/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  const popup = document.getElementById('popup');
  const popupMessage = document.querySelector('.popup-content p');

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  });

  

  // First Carousel
  let currentIndex1 = 0;
  window.moveSlide1 = function (direction) {
    const carouselSlide1 = document.querySelector('.carousel-1 .carousel-slide');
    const slides1 = document.querySelectorAll('.carousel-1 .carousel-item');
    const totalSlides1 = slides1.length;

    currentIndex1 += direction;
    if (currentIndex1 < 0) currentIndex1 = totalSlides1 - 1;
    else if (currentIndex1 >= totalSlides1) currentIndex1 = 0;

    carouselSlide1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
  };

  // Second Carousel
  
 let currentIndex2 = 0;

window.moveSlide2 = function (direction) {
  const carouselSlide2 = document.querySelector('.carousel-2 .carousel-slide');
  const slides2 = document.querySelectorAll('.carousel-2 .carousel-item');
  const totalSlides2 = slides2.length;

  currentIndex2 += direction;
  if (currentIndex2 < 0) currentIndex2 = totalSlides2 - 1;
  else if (currentIndex2 >= totalSlides2) currentIndex2 = 0;

  carouselSlide2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
};

});
