const allRecievedAudios = document.querySelectorAll(".recieved-audio");
const allPlayReciedvedBtn = document.querySelectorAll(
  ".play-btn-audio-recieved"
);
const allPlayReciedvedBtnIcons = document.querySelectorAll(
  ".play-btn-audio-recieved i"
);

console.log(allPlayReciedvedBtnIcons);

allRecievedAudios.forEach((item, index) => {
  const wavesurfer = WaveSurfer.create({
    container: item,
    waveColor: "#1D1F5A",
    progressColor: "#1D1F5A",
    url: "/data/clap.mp3",
    barWidth: 2,
    barGap: 1,
    barRadius: 2,
    height: 30,
  });

  wavesurfer.once("interaction", () => {
    wavesurfer.play();
  });

  wavesurfer.on("finish", () => {
    allPlayReciedvedBtnIcons[index].className = "fa-solid fa-play";
    wavesurfer.seekTo(0);
  });

  allPlayReciedvedBtn[index].addEventListener("click", (e) => {
    if (allPlayReciedvedBtnIcons[index].className === "fa-solid fa-play") {
      wavesurfer.play();
      allPlayReciedvedBtnIcons[index].className = "fa-solid fa-pause";
    } else {
      wavesurfer.stop();
      allPlayReciedvedBtnIcons[index].className = "fa-solid fa-play";
    }
  });
});
