let lightOn = false;
const bulb = document.getElementById('bulb');
const bulbStatus = document.getElementById('bulbStatus');

bulb.addEventListener('mouseenter', function() {
    lightOn = true;
    updateBulb();
});

bulb.addEventListener('mouseleave', function() {
    lightOn = false;
    updateBulb();
});

bulb.addEventListener('click', function() {
    lightOn = !lightOn;
    updateBulb();
});

function updateBulb() {
    if (lightOn) {
        bulb.classList.remove('off');
        bulbStatus.textContent = 'Status: Light is ON ✓';
        bulbStatus.style.background = '#d4edda';
        bulbStatus.style.color = '#155724';
    } else {
        bulb.classList.add('off');
        bulbStatus.textContent = 'Status: Light is OFF';
        bulbStatus.style.background = '#f8d7da';
        bulbStatus.style.color = '#721c24';
    }
}

let volume = 50;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        volume = Math.min(volume + 5, 100);
        updateVolume();
    } else if (event.key === 'ArrowDown') {
        volume = Math.max(volume - 5, 0);
        updateVolume();
    }
});

function updateVolume() {
    document.getElementById('volumeLevel').style.width = volume + '%';
    document.getElementById('volumePercent').textContent = volume;
}

updateVolume();