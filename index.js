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

// task1();
function hw1() {
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
}

// hw1();

function hw2() {
  const task1 = () => {
    let a = 1,
      b = 1,
      c,
      d;

    c = ++a;
    console.log(c); // префиксный инкремент сначала присвает переменной заначение а=а+1; , затем происходит присваивание

    d = b++; // постфиксный инкремент имеет приоритет ниже оператора присваивания.
    console.log(d);
    c = 2 + ++a;
    console.log(c); // префиксный инкремент сначала присвает переменной заначение а=а+1; , затем происходит сложение

    d = 2 + b++; // постфиксный инкремент имеет приоритет ниже оператора присваивания и оператора сложения
    console.log(d);

    console.log(`a=${a}, b=${b}`); // над а и b дважды был выполнен инкремент
  };
  // task1();

  const task2 = () => {
    let a = 2,
      x = 1 + (a *= 2); //как в матиматике сначала действие в скобках
    // console.log(`a=${a}, x=${x}`);
  };

  // task2();

  const task3 = (a, b) => {
    if (a >= 0 && b >= 0) return a - b;
    else if (a < 0 && b < 0) return a * b;
    else return a + b;
  };

  const task4_1 = (a, b) => a + b;
  const task4_2 = (a, b) => a - b;
  const task4_3 = (a, b) => a * b;
  const task4_4 = (a, b) => a / b;

  const task5 = (a, b, oper = "+") => {
    switch (oper) {
      case "+":
        return task4_1(a, b);

      case "-":
        return task4_2(a, b);

      case "*":
        return task4_3(a, b);

      case "/":
        return task4_4(a, b);

      default:
        return "не верный символ";
    }
  };
  // console.log(task5(3, 2, "ad"));

  // в задании валидации не было
  const task6 = () => {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Введите сумму ", (answer) => {
      const x = answer % 10;
      let rub;

      if (x == 0) {
        rub = "рублей";
      } else if (x == 1) {
        rub = "рубль";
      } else if (x >= 2 && x < 5) {
        rub = "рубля";
      } else {
        rub = "рублей";
      }
      console.log(`Ваща сумма ${answer} ${rub} успешно зачислена`);

      rl.close();
    });
  };

  task6();
}

hw2();
