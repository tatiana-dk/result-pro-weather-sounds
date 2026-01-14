/* eslint-env browser */

import './style.scss';
import { Sound } from './components/sound';

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

const volume = document.getElementById('sound-volume');
volume.addEventListener('input', () => {
    let value = (volume.value - volume.min) / (volume.max - volume.min);
    value = Number(value.toFixed(1));

    sounds.forEach(b => {b.setVolume(value);});
});

