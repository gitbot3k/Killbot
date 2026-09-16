const audio= document.createElement("audio");
audio.src = "Revenge of the dogwalkers.wav";
audio.loop = true;

const musicButton = document.getElementById("music-button");
musicButton.addEventListener("click", playMusic);
musicButton.addEventListener("click", checkText);

function checkText(){
    if (musicButton.textContent ==='Listen to my robo music') {
        musicButton.textContent = 'pause my robo music';
    }else {
        musicButton.textContent = 'Listen to my robo music';
    }
    }




function playMusic() {
    if (!audio.paused){
        audio.pause();
    }
    else{
        audio.play ();
    }
}