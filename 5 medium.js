
// Task 1

function minimumCuts(n) {

    if (n <= 1) return 0;

    if (n === 2) return 1;
    
    let cuts = 1;

    while (cuts * (cuts + 1) / 2 < n) {

        cuts++;
    }
    return cuts;
}


let guests = 15; 
console.log("Минимальное количество разрезов: " + minimumCuts(guests));

// Task 2 

let apples = 3; 


if (apples % 3 === 0) {

    console.log("Яблоки можно разделить поровну между тремя детьми.");

} else {

    console.log("Яблоки нельзя разделить поровну между тремя детьми.");
}

// Task 3

/* let a = 5; 
let b = 7; 
let c = 10; 

if (a + b > c && a + c > b && b + c > a) {

    console.log("Да");

} else {

    console.log("Нет");
}
*/

// Task 4

let a = 7; 
let b = 5; 
let c = 10; 

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log("Равносторонний");

    } else if (a === b || a === c || b === c) {

        console.log("Равнобедренный");
        
    } else {
        console.log("Разносторонний");
    }
} else {
    console.log("Несуществующий");
}

// Task 5

let weight = +prompt("Введите вес товара (в кг):");
let country = prompt("Введите страну доставки:").toLowerCase();

let cost;

if (weight <= 1) {

    cost = 10;

} else if (weight > 1 && weight <= 5) {

    if (country === "сша" || country === "usa") {

        cost = 20;

    } else {

        cost = 30;
        
    }
} else if (weight > 5) {
    cost = 50;
} else {
    cost = "Некорректный ввод";
}

console.log("Стоимость доставки: $" + cost);
