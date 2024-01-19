var num = "1997";
var one = num.charAt(0);
console.log(one);

var num = "1997";
var two = num.charAt(1);
console.log(two);

var num = "1997";
var three = num.charAt(2);
console.log(three);

var num = "1997";
var four = num.charAt(3);
console.log(four);
// Задание номер 1, вывод символа под некоторым номером n

var num = "1997";
var one = num.replace("1", "3");
console.log(one);
// Задание номер 2, замена символа одного значения на другое

var arr = ['cat', 'dog', 'parrot', 'horse'];
var one = arr.indexOf('parrot') + 1;
console.log(one);
// Задание 3, вывод индекса элемента не учитывая индексацию
var arr = ['cat', 'dog', 'parrot', 'horse'];
var two = arr.indexOf('parrot');
console.log(two)
    // Задание 3, вывод индекса элемента учитывая индекссацию

var arr = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
arr.splice(4, 1);
console.log(arr);
//Задание 4, удаление элемента массива fish

var arr = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
arr.splice(0, 1);
console.log(arr);
//Задание 4, удаление элемента массива cat

var arr = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
arr.splice(0, 3);
console.log(arr);
// Задание 4, удаление трех элементов массива

var arr = [31, 10, 'chicken', 9, 'fish', 10];
var change = arr.filter(function(element) {
    return typeof element === 'string'
});
console.log(change);
// Задание 5, фильтрация массива,после которой остаются только строки

var arr = [31, 10, 'chicken', 9, 'fish', 10];
var change = arr.filter(function(element) {
    return typeof element === 'number'
});
console.log(change);
// Задание 5, фильтрация массива, после которой остаются только числ
var arr = [31, 10, 'chicken', 9, 'fish', 10];
var change = arr.filter(function(element) {
    return element == 10;
});
console.log(change);
// Задание 5, фильтрация массива, после которой остаются числа со значением