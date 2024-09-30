// make recieved record waved

const allRecievedAudios = document.querySelectorAll(".msg__wave");
const allPlayReciedvedBtn = document.querySelectorAll(".recorded .icon");
const allPlayReciedvedBtnIcons = document.querySelectorAll(".recorded .icon i");

allRecievedAudios.forEach((item, index) => {
  const wavesurfer = WaveSurfer.create({
    container: item,
    waveColor: "#52B694",
    progressColor: "#52B6",
    url: "/data/clap.mp3",
    barWidth: 2,
    barGap: 1,
    cursorWidth: 0,
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
      wavesurfer.pause();
      allPlayReciedvedBtnIcons[index].className = "fa-solid fa-play";
    }
  });
});

// make personal recieved record waved
const allPersonalRecievedAudios = document.querySelectorAll(".send__wave__msg");
const allPersonalPlayReciedvedBtn = document.querySelectorAll(
  ".recorded__sende__msg .icon"
);
const allPersonalPlayReciedvedBtnIcons = document.querySelectorAll(
  ".recorded__sende__msg .icon i"
);

allPersonalRecievedAudios.forEach((item, index) => {
  const wavesurfer = WaveSurfer.create({
    container: item,
    waveColor: "#52B694",
    progressColor: "#52B6",
    url: "/data/clap.mp3",
    barWidth: 2,
    cursorWidth: 0,
    barGap: 1,
    barRadius: 2,
    height: 30,
  });

  wavesurfer.once("interaction", () => {
    wavesurfer.play();
  });

  wavesurfer.on("finish", () => {
    allPersonalPlayReciedvedBtnIcons[index].className = "fa-solid fa-play";
    wavesurfer.seekTo(0);
  });

  allPersonalPlayReciedvedBtn[index].addEventListener("click", (e) => {
    if (
      allPersonalPlayReciedvedBtnIcons[index].className === "fa-solid fa-play"
    ) {
      wavesurfer.play();
      allPersonalPlayReciedvedBtnIcons[index].className = "fa-solid fa-pause";
    } else {
      wavesurfer.pause();
      allPersonalPlayReciedvedBtnIcons[index].className = "fa-solid fa-play";
    }
  });
});

// add message from input
const messageInput = document.querySelector(".send__message__input input"),
  sendMessage = document.querySelector(".send__message__input img"),
  messagesContainer = document.querySelector(".all__messages"),
  formSendMsg = document.querySelector(".send__message__input .input form");

let message = "";

messageInput.addEventListener("change", (e) => {
  message = e.target.value;
});

sendMessage.addEventListener("click", () => {
  if (message.length > 0) {
    let messageDiv = document.createElement("div");
    messageDiv.className = "sended__message";

    let messageContent = document.createElement("p");
    messageContent.textContent = message;

    messageDiv.appendChild(messageContent);

    messagesContainer.appendChild(messageDiv);

    const scrollableDiv = document.querySelector(".all__messages");
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
  }
});

formSendMsg.addEventListener("submit", (e) => {
  e.preventDefault();

  if (message.length > 0) {
    let messageDiv = document.createElement("div");
    messageDiv.className = "sended__message";

    let messageContent = document.createElement("p");
    messageContent.textContent = message;

    messageDiv.appendChild(messageContent);

    messagesContainer.appendChild(messageDiv);

    const scrollableDiv = document.querySelector(".all__messages");
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
  }
});

// record message
let recordBtn = document.querySelector(".record__message");
let allMessages = document.querySelector(".all__messages");
let mediaRecorder;
let audioChunks = [];
let isRecording = false;

recordBtn.addEventListener("click", async () => {
  if (!isRecording) {
    isRecording = true;
    recordBtn.classList.add("active");

    let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      let audioBlob = new Blob(audioChunks, { type: "audio/mpeg-3" });
      let audioUrl = URL.createObjectURL(audioBlob);

      let messageDiv = document.createElement("div");
      messageDiv.className = "message__send";

      const voiceMessage = document.createElement("div");
      voiceMessage.className = "voice__Message";

      messageDiv.appendChild(voiceMessage);
      allMessages.appendChild(messageDiv);

      let waveformDiv = document.createElement("div");
      waveformDiv.className = "waveform";
      voiceMessage.appendChild(waveformDiv);

      let waveSurfer = WaveSurfer.create({
        container: waveformDiv,
        waveColor: "#52B694",
        progressColor: "#52B6",
        height: 30,
        pixelRatio: 2,
        barWidth: 2,
        barHeight: 2,
        cursorWidth: 0,
        responsive: true,
      });

      let isPlaying = false;

      waveSurfer.load(audioUrl);

      let playButton = document.createElement("div");
      playButton.className = "fa-solid fa-play  play-btn";
      voiceMessage.append(playButton);

      playButton.addEventListener("click", () => {
        if (isPlaying) {
          waveSurfer.pause();
          playButton.className = "fa-solid fa-play  play-btn";
        } else {
          waveSurfer.play();
          playButton.className = "fa-solid fa-pause  play-btn";
        }
        isPlaying = !isPlaying;
      });

      waveSurfer.on("finish", () => {
        waveSurfer.seekTo(0);
        playButton.className = "fa-solid fa-play  play-btn";
        isPlaying = false;
      });

      audioChunks = [];
      recordBtn.classList.remove("active");
      isRecording = false;
    };

    mediaRecorder.start();
  } else {
    mediaRecorder.stop();
  }
});

sendMessage.addEventListener("click", () => {
  const scrollableDiv = document.querySelector(".all__messages");
  scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
});

// responsive chat
const toggleChats = document.querySelector(".people_header");
const allChats = document.querySelector(".people__chats");

toggleChats.addEventListener("click", (e) => {
  allChats.classList.toggle("show");
});
