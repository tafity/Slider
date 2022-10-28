let Divimages = document.querySelector ('.images')
// Image factory
/*var createImage = function(src, title) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    return img; 
  };
  
  // array of images
  var images = [];
  
  // pushing images to the array
  images.push(createImage("images/image 2.1.png", "interier"));
  images.push(createImage("images/image 2 (2).png", "interier"));
  images.push(createImage("images/image 3 (2).png", "interier"));
  
  console.log(images);*/
const arrows = document.querySelectorAll ('[data-carousel-button]')
arrows.forEach(button => {
  button.addEventListener('click', ()=> {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1
    const slides = button
    .closest('[data-carousel]')
    .querySelector('[data-slides]')

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length -1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
} )
let dots = document.querySelector ('.dots')

/*initImages ();
initArrows ();
initDots ();

function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      images.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    arrows.querySelectorAll(".arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let currNum = +Divimages.querySelector(".active").dataset.index;
        let nextNum;
        if (arrow.classList.contains("left")) {
          nextNum = currNum === 0? Divimages.length - 1 : currNum - 1;
        } else {
          nextNum = currNum === Divimages.length - 1? 0 : currNum + 1;
        }
        moveSlider(nextNum);
      });
    });
  }*/