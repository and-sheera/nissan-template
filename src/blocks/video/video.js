import Plyr from 'plyr'

export default function video() {
  for (const videoElement of document.querySelectorAll('.video video')) {
    const player = new Plyr(videoElement, {
      ratio: '16:9'
    })
  }
}
