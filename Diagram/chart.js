var ctx = document.getElementById("myChart"); // Получение контекста холста для отображения графика
Chart.defaults.font.size = 18; // Установка размера шрифта по умолчанию для графика
var myChart = new Chart(ctx, { // Создание нового экземпляра графика
    type: 'line', // Указание типа графика (линейный)
    data: {
        labels: ['Ethereum', 'BNB', 'Litecoin', 'Solana', 'AAve', 'Gnosis', 'Montero'], // Метки для оси X (названия альткоинов)
        descr:[''], // Описание (не используется)
        datasets: [{ // Набор данных для графика
            label: 'Цена (в долларах США) Альткоины', // Название набора данных
            backgroundColor: [ // Цвета для фона данных (для красоты, не влияют на график)
                'red',   
                'blue',   
                'green',  
                'black',
                'violet',
                'yellow',
                'brown' 
            ],
            data: [3464, 612, 96, 167.94, 113.23, 368.32, 134.25], // Данные для отображения на графике (цены)
        }]
    },
    options: {
        borderWidth:10, // Ширина рамки графика
        borderRadius:3, // Радиус скругления углов рамки графика
        plugins:{
            tooltip: {
                callbacks: { // Коллбэки для кастомизации всплывающей подсказки при наведении на точку графика
                    label: function(context) {
                        var label = context.label || '';
                        if (label) {
                            label += ': $'; // Добавление долларовой валюты к значению подсказки
                        }
                        label += context.formattedValue;
                        return label;
                    }
                },
                displayColors: true, // Отключает отображение цветовых иконок в подсказке
            },
            legend: {
                labels: {
                    font: {
                        size: 30 // Установка размера шрифта для легенды
                    }
                },
                display: false // Отключает отображение легенды
            },
        },
    },
});
