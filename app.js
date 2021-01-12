const waterButton = document.getElementById('water-button');
const waterLevelSpan = document.getElementById('water-level');
const plantImg = document.getElementById('plant');

let waterLevel = 0;

waterButton.addEventListener('click', () => {
//         1) State: Water level increments (state)
    ++waterLevel;
//         2) View: Change textContent of water level span
    waterLevelSpan.textContent = waterLevel;
//         3) View: The image changes to match the current water level
    if (waterLevel < 3) {
        plantImg.src = 'assets/dry.png';
    } else if (waterLevel >= 3 && waterLevel < 8) {
        plantImg.src = 'assets/healthy.png';
    } else {
        plantImg.src = 'assets/overwatered.png';
    }
});
