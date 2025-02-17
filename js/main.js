// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//
// Place any custom JS here
//

function searchButtonToggle() {
  let search_btn = document.querySelector(".search-button");
  let search_section = document.querySelector(".search-section");

  if (search_btn && search_section) {
    search_btn.onclick = function () {
      search_section.classList.toggle("active");
    };
  }
}

function bannerSwiper() {
  const swiper = new Swiper('.swiper_banner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiper2 = new Swiper('.swiper-content', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  const swiper3 = new Swiper('.swiper-gallery-1', {
    slidesPerView: 5,
    spaceBetween: 50,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper4 = new Swiper('.swiper-gallery-2', {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper5 = new Swiper('.swiper-gallery-3', {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function conveyorSlider() {
  $('.js-conveyor-1').jConveyorTicker(
    {reverse_elm: true, force_loop: true}
  );
}

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new bootstrap.Popover(popover);
});

searchButtonToggle();
bannerSwiper();
conveyorSlider();