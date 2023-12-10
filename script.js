// Your existing JavaScript code goes here
function calculateRecycling() {
    // Get values from form
    const waterAmount = parseFloat(document.getElementById('inputWaterAmount').value);
    const recyclingType = parseInt(document.getElementById('inputRecyclingType').value);

    // Perform calculation (replace this with your actual calculation logic)
    const result = waterAmount * recyclingType;

    // Display result
    document.getElementById('recyclingResult').innerText = `Recycling Result: ${result} liters of water recycled.`;
    document.getElementById('result').style.display = 'block';
}

let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}
