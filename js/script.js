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

let add = 0;

while (add != 10) {
    localStorage.getItem('counter', counter++);
}