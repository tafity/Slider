const track = document.querySelector ('.container');
const movement = document.querySelector ('.content_p_2_')
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const dotsNav = document.querySelector ('.dots');
const dots = Array.from(dotsNav.children);
const namesNav = document.querySelector ('.names');
const names = Array.from(namesNav.children);
const vectors = document.querySelector ('.vectorss');


let direction;
const moveToSlide = (track, currentSlide, targetSlide)=> {
  vectors.style.marginTop = '-280px';
  /*if (direction === -1){
    track.appendChild(track.firstElementChild);
  } else if (direction === 1){
    track.prepend(track.lastElementChild)
  }*/
  slides.forEach (slide => {
    currentSlide.classList.remove('current-slide');
    currentSlide.style.opacity = "0";
    targetSlide.classList.add('current-slide');
    targetSlide.style.opacity = '1';
  });
}

nextButton.addEventListener('click', e => {
  if (track <= 0) return;
  //direction = -1;
  const currentSlide = track.querySelector ('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  track.appendChild(track.firstElementChild);
  moveToSlide(track, currentSlide, nextSlide);
})
prevButton.addEventListener ('click', e => {
  if (track <= 0) return;
  const currentSlide = track.querySelector ('.current-slide');
  let prevSlide = currentSlide.previousElementSibling;
  console.log (prevSlide)
  track.prepend(track.lastElementChild);
  moveToSlide(track, currentSlide, prevSlide);

})
console.log (track.prepend)

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = track.querySelector ('.current-slide');
  const currentDot = dotsNav.getElementsByClassName ('.current-slide');
  console.log (currentDot)
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  slides.forEach (slide => {
    currentSlide.style.marginTop = '-280px';
  })
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