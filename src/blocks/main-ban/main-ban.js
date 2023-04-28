import Swiper from 'swiper/bundle'

export default function mainBan() {
  const bannerElement = document.querySelector('.main-ban')
  if (bannerElement) {
    const bannerSlider = new Swiper('.main-ban', {
      autoHeight: true,
      spaceBetween: 0,
      pagination: {
        el: '.main-ban .ui-swiper-bullets .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        1200: {
          autoHeight: false
        }
      },
      navigation: {
        nextEl: '.main-ban .ui-swiper-buttons .swiper-button-next',
        prevEl: '.main-ban .ui-swiper-buttons .swiper-button-prev'
      }
    })

    setTopCoord()
    window.addEventListener('load', setTopCoord)
    window.addEventListener('resize', setTopCoord)
  }
}

function setTopCoord() {
  document.documentElement.style.setProperty('--main-ban-top', `${document.querySelector('.main-ban').getBoundingClientRect().top + window.pageYOffset}px`)
}
