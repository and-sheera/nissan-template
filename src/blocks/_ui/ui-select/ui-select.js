import TomSelect from 'tom-select'

export default function uiSelect() {
  const selects = document.querySelectorAll('.ui-select select')
  for (const select of selects) {
    const input = select.hasAttribute('placeholder') ? '<input type="text" readonly>' : undefined
    const tomSelect = new TomSelect(select, {
      controlInput: input,
      hidePlaceholder: false,
      onDropdownOpen() {
        const wrapper = select.parentElement.querySelector('.ts-wrapper')
        const list = select.parentElement.querySelector('.ts-dropdown')
        if ((window.innerHeight - wrapper.getBoundingClientRect().top - wrapper.clientHeight) < list.clientHeight) {
          wrapper.classList.add('dropdown-top')
        } else {
          wrapper.classList.remove('dropdown-top')
        }
      },
      onDropdownClose() {
        tomSelect.blur()
      },
      render: select.hasAttribute('data-tel-code') && {
        option: function (data, escape) {
          return `<div> <div class="option__name">${data.text}</div> <div class="option__code">${data.value}</div> </div>`
        },
        item: function (data, escape) {
          return `<div> ${data.short} </div>`
        }
      }
    })
  }
}
