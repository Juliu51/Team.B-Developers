let clientTestimonials = [
  {
      rating: '<i class="zmdi zmdi-star"></i>',       
      title: 'Awesome work',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, vitae.',
      name: 'Jack Daniels',
      company: 'Graphic Designer'
  },
  {
    rating: '<i class="zmdi zmdi-star"></i>',       
    title: 'Awesome work',
    message: 'Everything is Awesome. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, vitae.',
    name: 'BIT',
    company: 'Graphic Designer'
  },
  {
    rating: '<i class="zmdi zmdi-star"></i>',       
    title: 'Awesome work',
    message: 'Nothing works. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, vitae.',
    name: 'Agne R',
    company: 'Graphic Designer'
  }
]


let item = 0;
function getData(data) {
  let HTML = "";
  let DOTS = "";
  let carousel = document.querySelector(".owl-row-outer");
  let carouselDots = document.querySelector(".dots__container");

  if (Array.isArray(data)) {
    for (index of data) {
      HTML += getList(index);
      DOTS += getDots(index);
    }
    return (carousel.innerHTML = HTML, carouselDots.innerHTML = DOTS);
  } else {
    console.log("Nemasyvas");
  }
}


function getList(list) {

  item++;
  let HTML = `<div class="item__client">
                <h4>${list.title}</h4>
                <div class="rating">
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                  <i class="zmdi zmdi-star"></i>
                </div>
                <p>${list.message}</p>
                <div class="info">
                  <h5>${list.name}</h5>
                  <h6>${list.company}</h6>
                </div>
              </div>`;
  return HTML;
}

function getDots() {
  let DOTS = `<div class="dot" onclick="currentSlide(${item})">
                <span></span>
              </div>`;
  return DOTS;
}

getData(clientTestimonials);

//--------------------

let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName(".item__client");
  let dots = document.getElementsByClassName(".dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classname = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}





// let dot = document.getElementsByClassName("dot");
// let slide = document.getElementById("slide");
// let i;



// dot[0].onclick = function () {
//   slide.style.transform = "translateX(0px)";
//   for (i = 0; i < 3; i++) {
//     dot[i].classList.remove("active");
//   }
//   this.classList.add("active");
// }

// dot[1].onclick = function () {
//   slide.style.transform = "translateX(-800px)";
//   for (i = 0; i < 3; i++) {
//     dot[i].classList.remove("active");
//   }
//   this.classList.add("active");
// }

// dot[2].onclick = function () {
//   slide.style.transform = "translateX(-1600px)";
//   for (i = 0; i < 3; i++) {
//     dot[i].classList.remove("active");
//   }
//   this.classList.add("active");
// }

