import $ from 'jquery'
import 'parsleyjs'
import 'parsleyjs/dist/i18n/ru'
import Cleave from 'cleave.js'

export default function form() {
  for (const telFiled of document.querySelectorAll('.form__tel')) {
    const select = telFiled.querySelector('.ui-select select')
    const input = telFiled.querySelector('.ui-input input')
    let mask = new Cleave(input, getTelInputSetting(select.value))

    select.addEventListener('change', function () {
      mask.destroy()
      input.value = ''
      input.dispatchEvent(new Event('input'))
      mask = new Cleave(input, getTelInputSetting(select.value))
      const length = select.value.length + 14
      input.dataset.parsleyLength = `[${length}, ${length}]`
    })
  }

  $('.form').parsley({
    trigger: 'blur',
    errorsContainer: function (field) {
      return $(field.element).parent()
    }
  })
    .on('field:error', function (field) {
      field.element.parentElement.classList.add('parsley-error')
    })
    .on('field:success', function (field) {
      field.element.parentElement.classList.remove('parsley-error')
    })
}

function getTelInputSetting(code) {
  return {
    numericOnly: true,
    blocks: [code.length, 3, 3, 2, 2],
    delimiter: '-',
    prefix: code,
    noImmediatePrefix: true,
    delimiterLazyShow: true
  }
}
