  let a = 1; /*создал переменную а и присвоил ей значение 1 */
    console.log(a); /*Вывел в консоль страницы текст */
  a = 'test'; /* переприсвоил переменной значение*/
  console.log(a);
const width = 10;
const height = 5;
const space = width * height;
const newWirth = width - 4;
const newWirth2 = width + 4;
const division = newWirth / newWirth2
const volume = 2 ** 3;/*возведение в степень*/
console.log(volume);
console.log(volume);

const city = 'Москва';
const street = 'Новослободская';
console.log(city + ', ' + street + ', ' + 5); /*Объединение строк, тут при смешивании строк и числа число считается строкой*/

//Операторы присваивания
let age = 18;
age += 2;//age = age + 2
age -= 3;//age = age -2 
age *= 3;//age = age * 2 
age /= 3;//age = age / 2 
age++; //age = age + 1
age--; //age = age - 1
console.log(age);

//Сравнение

const vasia = 20;
console.log(age > vasia);
console.log(age < vasia);
console.log(age >= vasia);
console.log(age <= vasia);
console.log(age == vasia);

const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

const b = ( 6 + 10 ) / 2; //сгруппировали значения
console.log(b);

//присваивание суммы
let c;
let d;
d = c = 100 + 50;
console.log(c);
console.log(d);

let q = 5; 
let w = 5.6;
console.log(typeof q); //выводит тип числа
w = 'Строка';
console.log(typeof w);




let isAdmin = false;
console.log(typeof isAdmin);

let e; //переменная объявлена,но значение не было задано
console.log(typeof e);
e = 5;
console.log(typeof e);

let r = null; //задаем пустое значение
console.log( r == null);

