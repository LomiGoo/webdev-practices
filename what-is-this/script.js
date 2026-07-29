const bttn = document.getElementById("btn1");

bttn.addEventListener("click", secretLink);

function secretLink() {
    window.location.href = "https://cornhub.website/";
}


const buttons = document.querySelectorAll(".secret");
const popup = document.getElementById("popup");
const close = document.getElementById("close");

const video = document.getElementById("myVideo");
const videoSource = document.getElementById("videoSource");


buttons.forEach(button => {
    button.addEventListener("click", () => {

        videoSource.src = button.dataset.video;

        video.load(); // reload new video

        popup.style.display = "flex";

        video.currentTime = 0;
        video.muted = false;
        video.volume = 1;

        video.play();
    });
});


close.addEventListener("click", () => {
    video.pause();
    popup.style.display = "none";
});


video.addEventListener("ended", () => {
    popup.style.display = "none";
});
