document.addEventListener('DOMContentLoaded', () => {
    // Получаем элемент таймера
    const timerElement = document.getElementById('timer');
    
    // Читаем текущее значение таймера
    let timerValue = parseInt(timerElement.textContent, 10);
    
    // Функция для обновления таймера
    function updateTimer() {
        // Уменьшаем значение таймера на 1
        timerValue -= 1;
        
        // Обновляем текстовое содержание элемента таймера
        timerElement.textContent = timerValue;
        
        // Проверяем, достиг ли таймер нуля
        if (timerValue <= 0) {
            clearInterval(timerInterval);
            alert('Вы победили в конкурсе!');
        }
    }
    
    // Устанавливаем интервал для вызова функции обновления каждую секунду
    const timerInterval = setInterval(updateTimer, 1000);
});
