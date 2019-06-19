function nextSlideButtonClick(){
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    const currentSlides = document.querySelectorAll('#section2 .slide');
    currentSlides[0].classList.add('current');
  }
  //setTimeout(() => current.classList.remove('current'));
}

function prevSlideButtonClick(){
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    const currentSlides = document.querySelectorAll('#section2 .slide');
    currentSlides[currentSlides.length - 1].classList.add('current');
  }
  //setTimeout(() => current.classList.remove('current'));
}

function initSlider(){
  
  $('#section2 .fp-prev').click(function() {
    prevSlideButtonClick()
  });

  $('#section2 .fp-next').click(function() {
    nextSlideButtonClick()
  });
}