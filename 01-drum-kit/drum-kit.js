const drum = {
    "Q": "clap",
    "S": "hihat",
    "D": "kick",
    "F": "openhat",
    "G": "boom",
    "H": "ride",
    "J": "snare",
    "K": "tom",
    "L": "tink",
};

const createInstruments = () => {
    const instruments = document.createElement("div");
    instruments.classList = "instruments";
    Object.keys(drum).forEach((instrumentKey) => {
        addInstrument(instruments, instrumentKey);
    });
    document.body.appendChild(instruments);
}

const addInstrument = (instruments, instrumentKey) => {
    const instrumentAudio = document.createElement("audio");
    instrumentAudio.id = "audio-" + instrumentKey;
    instrumentAudio.src = "sounds/" + drum[instrumentKey] + ".wav"

    const instrumentButton = document.createElement("div");
    instrumentButton.id = instrumentKey;
    instrumentButton.classList = "button";

    const keyLabel = document.createElement("div");
    keyLabel.classList = "key";
    keyLabel.innerHTML = instrumentKey;
    instrumentButton.appendChild(keyLabel);

    const instrumentLabel = document.createElement("div");
    instrumentLabel.classList = "instrument";
    instrumentLabel.innerHTML = drum[instrumentKey];
    instrumentButton.appendChild(instrumentLabel);

    instruments.appendChild(instrumentButton);
    instruments.appendChild(instrumentAudio);
}

const onKeyDown = (event) => {
    const instrumentId = event.key.toUpperCase();
    if (instrumentId) {
        document.getElementById(instrumentId).classList += " loading";
        const audio = document.getElementById("audio-" + instrumentId);
        audio.currentTime = 0;
        audio.play();
    }
}

const onKeyUp = (event) => {
    const instrumentId = event.key.toUpperCase();
    if (instrumentId) {
        document.getElementById(instrumentId).classList.remove("loading");
    }
}

createInstruments();
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);
