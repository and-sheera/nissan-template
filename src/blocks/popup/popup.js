export default function popup() {
  for (const popupElement of document.querySelectorAll('.popup')) {
    popupElement.querySelector('.popup__close').addEventListener('click', function () {
      popupElement.classList.remove('active')
      document.documentElement.style.overflow = ''
    })

    popupElement.addEventListener('click', (event) => {
      if (event.target === popupElement) {
        popupElement.classList.remove('active')
        document.documentElement.style.overflow = ''
      }
    })
  }

  window.openPopup = function (id) {
    const popupElement = document.querySelector(`#${id}`)
    if (popupElement) {
      document.querySelector(`#${id}`).classList.add('active')
      document.documentElement.style.overflow = 'hidden'
    }
  }

  for (const openButton of document.querySelectorAll('[data-popup-open]')) {
    openButton.addEventListener('click', function (event) {
      event.preventDefault()
      const href = this.getAttribute('href')
      if (href) window.openPopup(href.slice(1))
    })
  }
}
