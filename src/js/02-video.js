// console.log(player.on());

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = function (e) {
  //   console.log(e.seconds);
  localStorage.setItem(TIME_KEY, e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

//////

const savedTime = localStorage.getItem(TIME_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}

// .then(function (seconds) {
//   // seconds = the actual time that the player seeked to
//   console.log(seconds);
// })
// .catch(function (error) {
//   switch (error.name) {
//     case 'RangeError':
//       // the time was less than 0 or greater than the video’s duration
//       break;

//     default:
//       // some other error occurred
//       break;
//   }
// });
