localStorage.setItem("a", "1");
localStorage.setItem("b", "2");
localStorage.setItem("c", "3"); // localStorage.setItem(); - Записать данные в локальное хранилище

const sum = +localStorage.getItem('a') + +localStorage.getItem('b') + +localStorage.getItem('c'); // localStorage.getItem(); - Получать данные из локального хранилища

console.log(sum);

let time = localStorage.getItem('time');

if (time === null) {
    let now = Date.now(); // Date.now(); - текущая метка времени
    localStorage.setItem('time', now);
}

console.log(time);

localStorage.setItem('key', '1');
localStorage.setItem('key', '2');
let value1 = localStorage.getItem('key');

console.log(value1);

localStorage.removeItem('key');


localStorage.setItem('counter', 0);

// localStorage.setItem('count', +localStorage.getItem('count') + 1);
const count = +localStorage.getItem('count') + 1;
if (count > 10) {
    count = 0;
}
localStorage.setItem('count', count);
console.log(`Вы ${count} раз обновили страницу`);

console.log(`Количество записей в localStorage ${localStorage.length}`); // Количество записей в localStorage();

// Получение ключа по номеру
let key = localStorage.key(0);
console.log(key);
let value = localStorage.getItem(key);
console.log(value);

// Перебор хранилища по индексам
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(value);
}

// Получить массив ключей и значений хранилища
let keys = Object.keys(localStorage);
let values = Object.values(localStorage);
console.log(`Массив ключей: `, keys);
console.log(`Массив значений: `, values);

// Хранение структур в localStorage();
let arr = [1, 2, 3, 4, 5];

// JSON.stringify для преобразования объектов в JSON
// метод JSON.stringify берёт объект и преобразует его в строку
// Полученна строка json называется JSON - форматированным или сериализованным объектом
// Мы можем отправить его по сети или поместить в обычное хранилище данных

localStorage.setItem('arr', JSON.stringify(arr));