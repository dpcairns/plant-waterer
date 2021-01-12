const waterLevelSpan = document.getElementById('water-level');
const plantImg = document.getElementById('plant');

// compose function
export function changeImageAndText(waterState) {
    changeText(waterState);
    changeImg(waterState);
}

function changeText(waterState) {
    waterLevelSpan.textContent = waterState;
}

function changeImg(waterState) {
    if (waterState < 3) {
        plantImg.src = 'assets/dry.png';
    } else if (waterState >= 3 && waterState < 8) {
        plantImg.src = 'assets/healthy.png';
    } else {
        plantImg.ssrc = 'assets/overwatered.png';
    }
}