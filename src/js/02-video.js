import throttle from 'lodash.throttle'
import vimeoPlayer from '@vimeo/player'

const CURRENT_TIME = 'videoplayer-current-time'
const player = new vimeoPlayer(document.querySelector('#vimeo-player'))

player.on('timeupdate', throttle(onPlay, 1000))

if (localStorage.getItem(CURRENT_TIME)) {
  player.setCurrentTime(Number.parseFloat(localStorage.getItem(CURRENT_TIME)))
}

function onPlay(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds === event.duration ? 0 : event.seconds)
}
