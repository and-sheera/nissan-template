import Cleave from 'cleave.js'

export default function uiInput() {
  inputMask()
  checkInputFill()
}

function inputMask() {
  for (const input of document.querySelectorAll('[data-mask=time]')) {
    const mask = new Cleave(input, {
      time: true,
      timePattern: ['h', 'm']
    })
  }
}

function checkInputFill() {
  const uiInputs = document.querySelectorAll('.ui-input')
  if (uiInputs) {
    for (const element of uiInputs) {
      const input = element.querySelector('input')
      input.value === '' ? element.classList.remove('filled') : element.classList.add('filled')
      input.addEventListener('input', function () {
        input.value === '' ? element.classList.remove('filled') : element.classList.add('filled')
      })
      input.addEventListener('blur', function () {
        input.value === '' ? element.classList.remove('filled') : element.classList.add('filled')
      })

      const clearButton = element.querySelector('.ui-input__clear')
      clearButton.addEventListener('click', function () {
        input.value = ''
        element.classList.remove('filled')
      })
    }
  }
}

