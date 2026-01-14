export class Volume {
    constructor({el, onInput}) {
        this.el = el;
        this.onInput = onInput;

        this.el.addEventListener('input', () => {this.handleInput();});
    }

    getValue() {
        const value = (this.el.value - this.el.min) / (this.el.max - this.el.min);
        return Number(value.toFixed(1));
    }

    handleInput() {
        this.onInput(this.getValue());
    }
}