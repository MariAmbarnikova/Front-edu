// 1.Напишите после каждого выражения ответ

6 > 4 && 10 < 5 // false
    (30 + 4) > (7 ** 2) // false

null && true // null
!('hi' + 'hi') && true  // false
!('hi' + 'hi') && false  // false


// 2. Объясните разницу выполнения данного кода

'Привет' + 'Друг' == !null // сравнение только значений без учета типа данных
'Привет' + 'Друг' === !null // строгое стравнение значения и типа данных


// 3. Каким будет результат 

const ten = 10;
const hundred = 100;
const thousand = 1000;

console.log((ten * ten + hundred) * hundred >= thousand * ten)  // true
