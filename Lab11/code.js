// Функция f принимает массив arr и число n,
// возвращает массив, содержащий квадраты элементов массива arr, взятые по модулю n.
function f(arr, n) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        // Для каждого элемента массива arr вычисляем квадрат и берем по модулю n,
        // затем добавляем результат в новый массив new_arr.
        new_arr.push(Math.pow(arr[i], 2) % n);
    }
    return new_arr; // Возвращаем новый массив.
}

// Функция processArray вызывается при нажатии на кнопку "Результат".
// Считывает введенный пользователем массив и значение по модулю,
// затем вызывает функцию f для обработки массива и выводит результат в виде alert.
function processArray() {
    // Получаем значение массива из поля ввода, разбиваем его по запятой и преобразуем в числа.
    var inputArray = document.getElementById("inputArray").value.split(",").map(Number);
    // Получаем значение по модулю из соответствующего поля ввода.
    var n = parseInt(document.getElementById("moduloValue").value);
    // Вызываем функцию f для обработки массива inputArray с помощью значения по модулю n.
    var result = f(inputArray, n);
    // Выводим результат в виде сообщения alert.
    alert("Результат: " + result.join(", "));
}
