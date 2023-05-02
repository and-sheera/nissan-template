export default function uiTextarea() {
  const uiTextareas = document.querySelectorAll('.ui-textarea')
  if (uiTextareas) {
    for (const element of uiTextareas) {
      const textarea = element.querySelector('textarea')
      textarea.value === '' ? element.classList.remove('filled') : element.classList.add('filled')
      textarea.addEventListener('input', function () {
        textarea.value === '' ? element.classList.remove('filled') : element.classList.add('filled')
      })
      textarea.addEventListener('blur', function () {
        textarea.value === '' ? element.classList.remove('filled') : element.classList.add('filled')
      })
    }
  }
}
