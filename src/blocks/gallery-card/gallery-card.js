import { Fancybox } from '@fancyapps/ui'

export default function galleryCard() {
  Fancybox.bind('[data-fancybox="photo-gallery"]', {
    hideScrollbar: false,
    dragToClose: false,
    Toolbar: {
      display: {
        right: ['close']
      }
    }
  })
}
