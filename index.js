//обернул в фукцию
function task1() {
  // объявил переменную до блока с циклом для возможности использовать ее на этом уровне далее
  let temperatireCell;
  do {
    // получаем от пользователя строку и переводим ее в число
    temperatireCell = +prompt(
      "Введите температу в грудусах цельсия (число без знаков)"
    );
    // если строку не удается перевести в число повторяем запрос
    // для отрицательных значений делать не стал
  } while (temperatireCell !== temperatireCell);

  // выводим темп. в градусах F
  alert(`Температура в градусах F ${1.8 * temperatireCell + 32}`);
}

task1();

// все по тексту задания только поменял местами порядок объявления anmin и name
let name = "Василий",
  admin = name;

console.log(admin);

console.log(10 + 10 + "10");
// 10+10 = 20 + "string"=> 20"string"=> 2010 вычисления идут слева на права  (приоритет одинаковый)
console.log(10 + "10" + 10); //аналогично string+ number + string =string_number_string
console.log(10 + 10 + +"10"); // приоритет у преобразования (+"10") выше чем у + сначала строка приводится к числу затем происходит сложение слева на право (аналогично уножению в математике)
console.log(10 / -""); // пустую строку js определяет как 0 число разделить на 0 => бесконечность
console.log(10 / +"2,5"); // 2,5 переводиться в NaN number/NaN == NaN
