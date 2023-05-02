import '../styles/style.scss'
import 'virtual:svg-icons-register'
import 'lazysizes'
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
import uiInput from '../blocks/_ui/ui-input/ui-input'
// import uiRange from '../blocks/_ui/ui-range/ui-range'
import uiSelect from '../blocks/_ui/ui-select/ui-select'
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea'
// import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip'
// import gallery from '../blocks/gallery/gallery'
import slider from '../blocks/slider/slider'
// import tabs from '../blocks/tabs/tabs'
import header from '../blocks/header/header'
import mainBan from '../blocks/main-ban/main-ban'
import form from '../blocks/form/form'
import video from '../blocks/video/video'
import popup from '../blocks/popup/popup'
import accordions from '../blocks/accordions/accordions'
import galleryCard from '../blocks/gallery-card/gallery-card'

document.addEventListener('DOMContentLoaded', function () {
  uiDatepicker()
  uiInput()
  // uiRange()
  uiSelect()
  uiTextarea()
  // uiTooltip()
  // sliderInit()
  // gallery()
  // tabs()
  window.isMobile = () => window.matchMedia('(max-width: 767px)').matches

  accordions()
  header()
  mainBan()
  slider()
  form()
  video()
  popup()
  galleryCard()
})
