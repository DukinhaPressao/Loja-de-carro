document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicators li');
    const numberDisplay = document.querySelector('.number');
    let currentIndex = 0;

    function showitem(index) {
        items.forEach(item => item.classlist.remove('active'));
        indicators.forEach(indicators => indicators.classList.remove('active'));
        
        items[index].classList.add('active');
        indicators[index].classlist.add('active');
        numberDisplay.textcontent = (index + 1). toString().padStart(2, '0');
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showitem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showitem(currentIndex);
    }

    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);

    //Inicializar
    showitem(currentIndex);
});