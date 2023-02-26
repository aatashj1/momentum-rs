let openButton = document.querySelector(".sett-main-button");
let settingsBlock = document.querySelector(".settings");
let closeButton = document.querySelector(".close-sett-button");


openButton.addEventListener("click", openSettingsBlock);

function openSettingsBlock(){
  openButton.style.display = "none";
  settingsBlock.style.display ="flex";
}

closeButton.addEventListener("click", closeSettingsBlock);

function closeSettingsBlock(){
  openButton.style.display = "flex";
  settingsBlock.style.display ="none";
}

