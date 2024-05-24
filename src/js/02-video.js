import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { common } from './common';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const getCurrentTime = function (data) {
  localStorage.setItem(common.KEY_CURRENT_TIME, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

const currentTime = Number(localStorage.getItem(common.KEY_CURRENT_TIME));

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

// player.setCurrentTime(
//   JSON.parse(localStorage.getItem(common.KEY_CURRENT_TIME ?? 0))
// );
