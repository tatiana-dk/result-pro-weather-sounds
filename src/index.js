/* eslint-env browser */

import './style.scss';
import { Sound } from './components/sound';
import { Volume } from './components/volume';

const types = ['sunny', 'rainy', 'snowy'];

const sounds = types.map(t => new Sound({
    type: t,
    onClick: () => {onClick(t);}
}));

function onClick(type) {
    sounds.forEach(b => {
        const isClicked = b.type === type;

        if (isClicked) {
            document.querySelector('body').classList.add(b.type);
        } else {
            b.pause();
            b.toggleHighlight();
            document.querySelector('body').classList.remove(b.type);
        }
    });
}

const volume = new Volume({
    el: document.getElementById('sound-volume'),
    onInput: value => { sounds.forEach(b => {b.setVolume(value);});}
});

volume.handleInput();

