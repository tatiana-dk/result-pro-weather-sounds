export class Sound {
    constructor({type, onClick}) {
        this.type = type;
        this.onClick = onClick;
        this.init();
    }

    init() {
        this.button = document.getElementById(`${this.type}-button`);
        this.audio = document.getElementById(`${this.type}-audio`);

        this.button.addEventListener('click', () => {this.handleButtonClick();});
    }

    handleButtonClick() {
        if (this.#isPlaying()) {
            this.pause();
        } else {
            this.play();
        }

        this.toggleHighlight();

        this.onClick();
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    toggleHighlight() {
        this.button.classList.toggle('sound-menu__item--playing', this.#isPlaying());
    }

    setVolume(value) {
        this.audio.volume = value;
    }

    #isPlaying() {
        return !this.audio.paused;
    }
}