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
    currentSlide.classList.remove('current-slide');
    currentSlide.style.opacity = "0";
    targetSlide.classList.add('current-slide');
    targetSlide.style.opacity = '1';
}

nextButton.addEventListener('click', e => {
  if (track <= 0) return;
  const currentSlide = track.querySelector ('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  console.log (nextSlide)
  track.appendChild(track.firstElementChild);
  if (slides[0]){
    vectors.style.marginTop= '-580px'}
  if (slides[1]){
    slides[1].style.marginTop = '40px'
    vectors.style.marginTop= '-580px'}
    if (slides[2]){
      slides[2].style.marginTop = '40px'
      vectors.style.marginTop= '-580px'
    }   
  moveToSlide(track, currentSlide, nextSlide);
})
prevButton.addEventListener ('click', e => {
  if (track <= 0) return;
  //const currentSlide = track.querySelector ('.current-slide');
  //const prevSlide = currentSlide.previousSibling;
  //console.log (prevSlide)
  //track.prepend(track.lastElementChild);
  //moveToSlide(track, currentSlide);//, prevSlide);
});

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = track.querySelector ('.current-slide');
  const currentDot = dotsNav.getElementsByClassName ('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  console.log(targetSlide)
  const image = document.querySelector('.images');
  if (slides[0]){
    image.style.display = 'flex'
    slides[0].style.marginTop = '-200px';
  }
  if (slides[1]){
    slides[1].style.marginTop = '-410px'
    slides[1].style.height = '720px'
    slides[0].style.opacity = '0'
    slides[2].style.opacity = '0'
    vectors.style.marginTop = '-170px'
}
if (slides[2]){
  slides[2].style.marginTop = '-830px'
  slides[2].style.height = '1280px'
  slides[0].style.opacity = '0'
  slides[1].style.opacity = '0'
  vectors.style.marginTop = '-170px'
}
  moveToSlide(track, currentSlide, targetSlide); 
  //updateDots (currentDot, targetDot);
});
namesNav.addEventListener ('click', e => {
  const targetName = e.target.closest('button');
  if(!targetName) return;
  const currentSlide = track.querySelector ('.current-slide');
  const currentName = namesNav.getElementsByClassName ('.current-slide');
  const targetIndex = names.findIndex(name => name === targetName);
  console.log(targetIndex)
  const targetSlide = slides[targetIndex];
  if (slides[1]){
    slides[1].style.marginTop = '-510px';
    slides[1].style.height = '720px';
    vectors.style.marginTop = '-410px'
  }
  if (slides[2]){
    slides[2].style.marginTop = '-830px';
    slides[2].style.height = '1020px';
    vectors.style.marginTop = '90px'
  }
  moveToSlide(track, currentSlide, targetSlide);
})