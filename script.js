const track = document.querySelector ('.container');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const dotsNav = document.querySelector ('.dots');
const dots = Array.from(dotsNav.children);
const namesNav = document.querySelector ('.names');
const names = Array.from(namesNav.children);

const moveToSlide = (track, currentSlide, targetSlide)=> {
  slides.forEach (slide => {
    currentSlide.classList.remove('current-slide');
    currentSlide.style.opacity = "0";
    targetSlide.classList.add('current-slide');
    targetSlide.style.opacity = '1';
  });
 
}
/*const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove ('current-dot');
  targetDot.classList.add ('current-slide');
  
}*/

nextButton.addEventListener('click', e => {
  if (track <= 0) return;
  const currentSlide = track.querySelector ('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  console.log (nextSlide.nextElementSibling);

  if (!slides[2].nextElementSibling) {slides[1].closest}
  moveToSlide(track, currentSlide, nextSlide);


})

prevButton.addEventListener ('click', e => {
  if (track <= 0) return;
  const currentSlide = track.querySelector ('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  //if (imageIndex >= slides.length) {imageIndex = 0;}
  moveToSlide(track, currentSlide, prevSlide);

})

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = track.querySelector ('.current-slide');
  const currentDot = dotsNav.getElementsByClassName ('.current-slide');
  console.log (currentDot)
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  //updateDots (currentDot, targetDot);
  
});
/*track.addEventListener (slides, () => {
  if (slides[counter].id === 'lastClone') {
    counter = slides.length - 2;
  }
  if (slides[counter].id === 'firstClone') {
    counter = slides.length - counter;
  }
})
if (slides[1]=== "current-slide" ) {
  cityName.innertext ="Sochi Thieves"
  apartmentArea.innertext = "105 m2"
  repairTime.innertext = "4 months"
}*/