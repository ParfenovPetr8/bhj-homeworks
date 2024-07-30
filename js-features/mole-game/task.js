(() => {
  // Инициализация переменных для отслеживания состояния игры
  let playing = true,      // Переменная, указывающая на состояние игры (игра продолжается или нет)
      activeHole = 1,      // Переменная для хранения активной лунки с кротом
      dead = 0,            // Счетчик убитых кротов
      lost = 0;            // Счетчик промахов

  // Функция для получения элемента лунки по индексу
  const getHole = index => document.getElementById(`hole${index}`),
        // Функция для деактивации лунки (удаления крота)
        deactivateHole = index => getHole(index).className = 'hole',
        // Функция для активации лунки (появления крота)
        activateHole = index => getHole(index).className = 'hole hole_has-mole',
        // Функция для обновления счетчиков на странице
        updateScore = () => {
          document.getElementById('dead').textContent = dead;
          document.getElementById('lost').textContent = lost;
        },
        // Функция для проверки завершения игры
        checkGameOver = () => {
          if (dead === 10) { // Проверка на выигрыш
            alert('Вы победили!'); // Сообщение о победе
            resetGame(); // Сброс игры
          } else if (lost === 5) { // Проверка на проигрыш
            alert('Игра окончена. Вы проиграли.'); // Сообщение о проигрыше
            resetGame(); // Сброс игры
          }
        },
        // Функция для сброса игры (обнуление счетчиков)
        resetGame = () => {
          dead = 0;
          lost = 0;
          updateScore();
        },
        // Функция для перехода к следующему раунду (перемещение крота)
        next = () => setTimeout(() => {
          if (!playing) return; // Проверка состояния игры, если не играет, то выход
          deactivateHole(activeHole); // Деактивация текущей лунки
          activeHole = Math.floor(1 + Math.random() * 9); // Выбор новой случайной лунки
          activateHole(activeHole); // Активация новой лунки
          next(); // Рекурсивный вызов для продолжения игры
        }, 800); // Задержка 800 миллисекунд

  // Регистрация обработчиков событий для всех лунок
  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', () => {
      if (getHole(i).classList.contains('hole_has-mole')) { // Проверка, есть ли в лунке крот
        dead++; // Увеличение счетчика убитых кротов
      } else {
        lost++; // Увеличение счетчика промахов
      }
      updateScore(); // Обновление счетчиков на странице
      checkGameOver(); // Проверка условий окончания игры
    });
  }

  next(); // Запуск игры
})();