import playList from './playList.js';

let indexOfPlayingAudioInPlayList = 0;

let audio = new Audio();

const playButton = document.querySelector('.play-btn');
const nextBtn = document.querySelector('.play-next');
const prevBtn = document.querySelector('.play-prev');

let songActiveTime = document.querySelector(".time-active");
let songDuration = document.querySelector(".duration");
let progressBar = document.querySelector('.progress');
let timeline = document.querySelector(".duration-player");
let soundVolume = document.querySelector(".soundVolume");
let muteButton = document.querySelector(".muteButton");

let amountOfSongs = playList.length - 1;

audio.addEventListener("ended", playNextSongInFlow);
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrev);
soundVolume.addEventListener('input', volume);

muteButton.addEventListener("click", mute);


function Initial() {
  playButton.addEventListener('click', playAudio);
  createNewElementAndAddEventsForThem();
  preparingFirstSong();
}


function preparingFirstSong() {
  changeAudio(playList[0].src);
  document.querySelector('.play-item').classList.add("opacity");
}


function createNewElementAndAddEventsForThem() {
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
  if (indexOfPlayingAudioInPlayList === +e.target.dataset.musicIndex) {
    playAudio();
    return;
  }
  indexOfPlayingAudioInPlayList = +e.target.dataset.musicIndex;
  changeAudio(e.target.dataset.musicUrl);
  audio.currentTime = 0;
  playAudio();
}


function changeAudio(src) {
  audio?.pause();
  audio.src = src;
}


function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;
  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
   seconds % 60
  ).padStart(2, 0)}`;
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


audio.addEventListener("loadeddata",
 () => {
   songDuration.textContent = `/ ` + getTimeCodeFromNum(audio.duration);
 }
);


function volume() {
  audio.volume = soundVolume.value;
}


function mute() {
  muteButton.classList.toggle("chb");
  audio.muted = !audio.muted;
}


setInterval(() => {
  songActiveTime.textContent = getTimeCodeFromNum(
   audio.currentTime
  );
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%"
}, 100);


timeline.addEventListener("click", e => {
  let timelineWidth = window.getComputedStyle(timeline).width;
  audio.currentTime = e.offsetX / parseInt(timelineWidth) * audio.duration;
}, false);


function playNextSongInFlow() {
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


Initial();




