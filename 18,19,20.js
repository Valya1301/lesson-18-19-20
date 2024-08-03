
// Task 1

let number = 5

if(number % 2 === 0) {

    console.log("четное")

} else {

    console.log("нечетное")
}

// Task 2

let a = prompt("Введите первое число:");

let b = prompt("Введите второе число:");

if(a > b){
    alert("Первое число больше второго.");
} else if(b > a){
    alert("Второе число больше первого.");
} else {
    alert("Числа равны.")
}

// Task 3 

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {

    console.log(year + " год - високосный");

} else {

    console.log(year + " год - не високосный");
}

// Task 4

let variable = "Hello, world!"; 

if (typeof variable === "string") {

    console.log("Переменная является строкой");

} else if (typeof variable === "number") {

    console.log("Переменная является числом");

} else {

    console.log("Переменная не является строкой или числом");
}

// Task 5

let hour = 15;

if (hour >= 6 && hour < 12) {

    console.log('Доброе утро');

} else if (hour >= 12 && hour < 18) {

    console.log('Добрый день');

} else {
    
    console.log('Доброй ночи');
}

// Task 6 

let num1 = 10;

let num2 = 15;

let num3 = 7;

if (num1 >= num2 && num1 >= num3) {

    console.log(num1 + " является наибольшим числом.");

} else if (num2 >= num1 && num2 >= num3) {

    console.log(num2 + " является наибольшим числом.");

} else {

    console.log(num3 + " является наибольшим числом.");
}

// Task 7

let correctLogin = "123user";

let correctPassword = "123password";

let userLogin = prompt("Введите логин:");

let userPassword = prompt("Введите пароль:");

if (userLogin === correctLogin && userPassword === correctPassword) {

    console.log("Доступ разрешен");

} else {
    
    console.log("Доступ запрещен");
}

// Task 8

function determineMonth(number) {

    let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


    if (number >= 1 && number <= 12) {
        return month[number - 1]; 
        
    } else {
        return 'Некорректное число. Введите число от 1 до 12.'; 
    }
}

let introducedNumber = 1; 

console.log( determineMonth(introducedNumber)); 

// Task 9 

function determineAgeCategory(age) {

    if (age < 12) {

        return "Детский возраст";

    } else if (age >= 12 && age < 18) {

        return "Подростковый возраст";

    } else if (age >= 18 && age < 65) {

        return "Взрослый возраст";

    } else if (age >= 65) {

        return "Пожилой возраст";

    } else {

        return "Некорректный возраст";

    }
}


const age = 18; 

console.log(determineAgeCategory(age));

// Task 10

function determineSeason(month) {

    if (month === 12 || month === 1 || month === 2) {

        return "Зима";

    } else if (month >= 3 && month <= 5) {

        return "Весна";

    } else if (month >= 6 && month <= 8) {

        return "Лето";

    } else if (month >= 9 && month <= 11) {

        return "Осень";

    } else {

        return "Неккоректный месяц";
    }
}

let month = +prompt("Введите номер месяца (1 до 12):");

alert(determineSeason(month));
