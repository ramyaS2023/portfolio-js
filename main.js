// const menuIcon = document.getElementById("menu-icon")
// const navBar = document.querySelector(".navbar")

// menuIcon.addEventListener("click", ()=>{
//     navBar.classList.toggle("active")
// })


const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    menuIcon.classList.toggle("fa-xmark"); 
    menuIcon.classList.toggle("fa-bars");  
});


const text = "Frontend Developer";
const typedText = document.getElementById("typed-text");

let index = 0;

function typeLetter() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeLetter, 100); 
    } else {
       
        setTimeout(() => {
            typedText.innerHTML = "";
            index = 0;
            typeLetter();
        }, 1000); 
    }
}

window.addEventListener("load", typeLetter); // start typing when page loads



// Chat button............................
// Scroll to top smoothly when Chat button is clicked
const chatButton = document.getElementById("chat-button");

chatButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Download cv

const downloadBtn = document.querySelector('.home-btn');

downloadBtn.addEventListener('click', function() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
});



// Multiple slider.....
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});




// circle kill------------------------------------------
 


const circles = document.querySelectorAll('.circle');

circles.forEach(elem=>{
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points ="";
  var rotate = 360 / dots;


  for(let i =0; i<dots ;i++)
  {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;


  const pointsMarked = elem.querySelectorAll('.points');
  for(let i = 0; i<percent; i++)
  {
    pointsMarked[i].classList.add('marked')
  }
})


// mix it up portfolio section------------------------------------------------------------------>

var mixer = mixitup('.portfolio-gallery');
