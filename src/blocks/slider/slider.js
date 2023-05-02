import Swiper from 'swiper/bundle'

export default function slider() {
  for (const sliderElement of document.querySelectorAll('.slider')) {
    const swiperSlider = new Swiper(sliderElement, {
      slidesPerView: 1,
      spaceBetween: 10,
      watchSlidesProgress: true,
      pagination: {
        el: '.slider .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: sliderElement.querySelector('.ui-swiper-buttons .swiper-button-next'),
        prevEl: sliderElement.querySelector('.ui-swiper-buttons .swiper-button-prev')
      },
      breakpoints: {
        768: {
          spaceBetween: 25,
          slidesPerView: sliderElement.classList.contains('slider--1slide') ? 1 : 2
        },
        1201: {
          spaceBetween: 25,
          slidesPerView: (() => {
            if (sliderElement.classList.contains('slider--1slide')) {
              return 1
            }
            return sliderElement.classList.contains('slider--3slides') ? 3 : 4
          })()
        }
      }
    })
  }

}
