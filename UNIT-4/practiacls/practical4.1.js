function toggleNutrition() {
    const box = document.getElementById('nutrition');
    if (box.style.display === 'none' || box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
}

function toggleVarieties() {
    const box = document.getElementById('varieties');
    const arrow = document.getElementById('arrowBtn');
    
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        arrow.textContent = '▲';
    } else {
        box.classList.add('hidden');
        arrow.textContent = '▼';
    }
}

function highlightFact() {
    const fact = document.getElementById('fact');
    fact.classList.toggle('highlight');
}