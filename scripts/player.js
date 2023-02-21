import playList from './playList.js';
let indexOfPlayingAudioInPlayList = 0;

const playButton = document.querySelector('.play-btn');
let audio = new Audio();

const nextBtn = document.querySelector('.play-next');
const prevBtn = document.querySelector('.play-prev');

let amountOfSongs = playList.length - 1;

function Initial(){
  playButton.addEventListener('click', playAudio);

  let playListContainer;
  let divWithSong;
  for (let i = 0; i < playList.length; i++) {
    playListContainer = document.querySelector(".play-list");
    divWithSong = document.createElement('div');
    divWithSong.dataset.musicUrl = playList[i].src;
    divWithSong.dataset.musicIndex = i.toString();
    divWithSong.classList.add('play-item');
    divWithSong.textContent = playList[i].title;
    playListContainer.append(divWithSong);
    divWithSong.addEventListener('click', e => {
      console.log(e.layerX, e.layerY);
      opacity(e.target);
      playMusOnList(e);
    });
  }
  audio.src = playList[indexOfPlayingAudioInPlayList].src;
  audio.currentTime = 0;
  document.querySelector('.play-item').classList.add("opacity");

}


function opacity(element) {
  document.querySelectorAll('.play-item').forEach(element => {
    element.classList.remove("opacity");
  });
  if (!(element.classList.contains('opacity'))) {
    element.classList.add("opacity")

  } else if (element.classList.contains("opacity")) {
    element.classList.remove("opacity")
  }
}


function playMusOnList(e) {
  indexOfPlayingAudioInPlayList = +e.target.dataset.musicIndex;
  changeAudio(e.target.dataset.musicUrl);

  audio.currentTime = 0;
  playAudio();
}




function changeAudio(src) {
  audio.pause();
  audio = new Audio();
  audio.src = src;
}

function playAudio() {
  if (audio.paused === true) {
    audio.play();
    playButton.classList.remove("play");
    playButton.classList.add("pause");
  } else {
    audio.pause();
    playButton.classList.remove("pause");
    playButton.classList.add("play");
  }
}

nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrev);

function playNext() {
  indexOfPlayingAudioInPlayList++;
  if (indexOfPlayingAudioInPlayList > amountOfSongs) {
    indexOfPlayingAudioInPlayList = 0;
  }
  let srcOfNextMusic = playList[indexOfPlayingAudioInPlayList].src;
  changeAudio(srcOfNextMusic);
  let elementWithCurrentSrc = document.querySelector(`.play-item[data-music-url="${srcOfNextMusic}"]`);
  opacity(elementWithCurrentSrc);
  playAudio();
}

function playPrev() {
  indexOfPlayingAudioInPlayList--;
  if (indexOfPlayingAudioInPlayList < 0) {
    indexOfPlayingAudioInPlayList = amountOfSongs;
  }
  let srcOfNextMusic = playList[indexOfPlayingAudioInPlayList].src;
  changeAudio(srcOfNextMusic);
  let elementWithCurrentSrc = document.querySelector(`.play-item[data-music-url="${srcOfNextMusic}"]`);
  opacity(elementWithCurrentSrc);
  playAudio()
}
Initial();
// playNext();
// playPrev();

