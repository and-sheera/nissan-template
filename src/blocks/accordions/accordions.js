import $ from 'jquery'

export default function accordions() {
  document.addEventListener('click', (event) => {
    const head = event.target.closest('.accordions__head')
    if (head) {
      const accordionElement = head.closest('.accordions__item')

      const accordionBlock = head.closest('.accordions')
      if (accordionBlock) {
        const activeItem = accordionBlock.querySelector('.accordions__item.active')
        if (activeItem && activeItem !== accordionElement) {
          activeItem.classList.remove('active')
          $(activeItem.querySelector('.accordions__body')).slideUp()
        }
      }

      const body = accordionElement.querySelector('.accordions__body')
      accordionElement.classList.toggle('active')
      $(body).slideToggle()
    }
  })
}
