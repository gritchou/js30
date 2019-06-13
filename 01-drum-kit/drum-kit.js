const drum = {
    "Q": "Bass drum",
    "S": "Floor tom",
    "D": "Snare drum",
    "F": "Hanging toms",
    "G": "Hi-hat",
    "H": "Crash cymbal",
    "J": "Ride cymbal",
    "K": "Splash cymbal",
    "L": "China cymbal",
};

const createInstruments = () => {
    const instruments = document.createElement("div");
    instruments.classList = "instruments";
    Object.keys(drum).forEach((instrumentKey) => {
        addInstrument(instruments, instrumentKey);
    });
    document.body.appendChild(instruments);
}

const addInstrument =(instruments, instrumentKey) => {
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
}

const onKeyDown = (event) => {
    const instrumentId = event.key.toUpperCase();
    if (instrumentId) {
        document.getElementById(instrumentId).classList += " loading";
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

