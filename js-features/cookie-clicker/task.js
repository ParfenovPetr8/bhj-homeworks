document.addEventListener('DOMContentLoaded', () => {
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    let clickCount = 0;
    let isCookieLarge = true;

    cookie.addEventListener('click', () => {
        // Увеличение счётчика кликов
        clickCount++;
        counter.textContent = clickCount;

        // Чередование уменьшения и увеличения печеньки
        if (isCookieLarge) {
            cookie.style.width = '180px';
            cookie.style.height = '180px';
        } else {
            cookie.style.width = '200px';
            cookie.style.height = '200px';
        }
        isCookieLarge = !isCookieLarge;
    });
});