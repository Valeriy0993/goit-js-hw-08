import throttle from 'lodash.throttle';

function loadVimeoPlayerScript(callback) {
  const script = document.createElement('script');
  script.src = 'https://player.vimeo.com/api/player.js';
  script.onload = callback;
  document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
  loadVimeoPlayerScript(() => {
    const iframe = document.getElementById('vimeo-player');
    const player = new Vimeo.Player(iframe);

    const getSavedTime = () => {
      const savedTime = localStorage.getItem('videoplayer-current-time');
      return savedTime !== null ? parseFloat(savedTime) : 0;
    };

    const setPlayerTime = time => {
      player
        .setCurrentTime(time)
        .then(function (seconds) {})
        .catch(function (error) {
          switch (error.name) {
            case 'RangeError':
              break;

            default:
              break;
          }
        });
    };

    player.on('timeupdate', data => {
      const currentTime = data.seconds;
      updateStoredTime(currentTime);
    });

    const savedTime = getSavedTime();
    setPlayerTime(savedTime);

    const updateStoredTime = throttle(currentTime => {
      localStorage.setItem('videoplayer-current-time', currentTime);
    }, 1000);
  });
});
