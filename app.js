import { changeImageAndText } from './domUtils.js';
const waterButton = document.getElementById('water-button');

// NOTE: we cannot export state. it doesn't work!
let waterLevel = 0;

waterButton.addEventListener('click', () => {
    // change the water level
    ++waterLevel;

    // use the water level to update the view
    changeImageAndText(waterLevel);
});
