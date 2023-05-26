import $ from 'jquery'

export default function header() {
  const headerElement = document.querySelector('.header')
  if (headerElement) {
    const shadow = headerElement.querySelector('.header__shadow')

    for (const button of headerElement.querySelectorAll('.header__button')) {
      button.addEventListener('click', function () {
        const submenu = this.parentElement.querySelector('.header__submenu')
        if (submenu) {
          const activeButton = headerElement.querySelector('.active.header__button')
          if (activeButton && activeButton !== this && !window.isMobile()) activeButton.classList.remove('active')
          if (!window.isMobile()) this.classList.toggle('active')
          const activeSubmenu = headerElement.querySelector('.active.header__submenu')
          if (activeSubmenu && activeSubmenu !== submenu) {
            activeSubmenu.classList.remove('active')
            if (!window.isMobile()) {
              $(activeSubmenu).fadeOut()
              $(submenu).fadeToggle()
            }
            shadow.classList.add('active')
          } else {
            if (!window.isMobile()) $(submenu).slideToggle()
            shadow.classList.toggle('active')
          }
          submenu.classList.toggle('active')
        }
      })
    }

    const burgerButton = headerElement.querySelector('.header__burger-icon')
    const burgerElement = headerElement.querySelector('.header__burger')
    burgerButton.addEventListener('click', () => {
      document.body.style.overflow = 'hidden'
      burgerElement.classList.add('active')
      shadow.classList.add('active')
    })

    const burgerButtonClose = headerElement.querySelector('.header__burger-close')
    burgerButtonClose.addEventListener('click', () => {
      document.body.style.overflow = ''
      burgerElement.classList.remove('active')
      shadow.classList.remove('active')
    })

    for (const sectionName of headerElement.querySelectorAll('.header__section-name')) {
      sectionName.addEventListener('click', function (event) {
        if (window.isMobile()) {
          event.preventDefault()
          this.parentElement.querySelector('.header__section-list').classList.add('active')
        }
      })
    }

    for (const backButton of headerElement.querySelectorAll('.header__submenu-back')) {
      backButton.addEventListener('click', function (event) {
        if (window.isMobile()) {
          const activeSectionList = this.parentElement.querySelector('.header__section-list.active')
          if (activeSectionList) {
            activeSectionList.classList.remove('active')
          } else {
            this.parentElement.classList.remove('active')
          }
        }
      })
    }

    shadow.addEventListener('click', function () {
      const activeSubmenu = headerElement.querySelector('.active.header__submenu')
      if (activeSubmenu && !window.isMobile()) $(activeSubmenu).slideToggle()
      const activeButton = headerElement.querySelector('.active.header__button')
      if (activeButton) activeButton.classList.remove('active')
      shadow.classList.remove('active')
    })
  }

  headerSize()
  window.addEventListener('load', headerSize)
  window.addEventListener('resize', headerSize)
}

function headerSize() {
  document.documentElement.style.setProperty('--header-height', `${document.querySelector('.header').offsetHeight}px`)
}
