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
// hw2();

function hw3() {
  const task1 = () => {
    for (let i = 0; i <= 10; i++) {
      if (i === 0) {
        console.log(`${i}-это ноль`);
      } else if (i % 2 == 0) {
        console.log(`${i}-четное число`);
      } else {
        console.log(`${i}- нечетное число`);
      }
    }
  };
  task1();

  const task2 = () => {
    const post = {
      author: "John",
      pastId: 23,
      comments: [
        {
          userId: 10,
          userName: "Alex",
          text: "lorem ipsum",
          raing: { likes: 10, dislikes: 2 },
        },
        {
          userId: 5,
          userName: "Jane",
          text: "lorem ipsum 2",
          raing: { likes: 3, dislikes: 1 },
        },
      ],
    };

    console.log(post.author);
    console.log(post.comments[0].raing.dislikes);
    console.log(post.comments[1].text);
  };

  task2();

  const task3 = () => {
    const product = [
      { id: 3, price: 200 },
      { id: 4, price: 900 },
      { id: 1, price: 1000 },
    ];

    product.map((item) => (item.price *= 0.85));
    console.log(product);
  };
  task3();

  const task4 = () => {
    const product = [
      { id: 3, price: 127, photos: ["1.jpg", "2.jpg"] },
      { id: 5, price: 499, photos: [] },
      { id: 10, price: 26, photos: ["3.jpg"] },
      { id: 8, price: 78, photos: [] },
    ];

    console.log(product.filter((number) => number.photos.length > 0));
    console.log("");
    console.log(product.sort((a, b) => a.price - b.price));
  };
  task4();

  const task5 = () => {
    for (
      let i = {
        ref: 0,
        lef() {
          console.log(this.ref);
          this.ref++;
        },
      };
      i.ref < 10;
      i.lef()
    ) {}
  };
  task5();

  const task6 = (h) => {
    for (let i = "#"; i.length < h + 1; i += "#") {
      console.log(i);
    }
  };
  task6(20);
}
// w3();

function hw4() {
  function task1(number) {
    if (+number != +number) return;
    if (number < 0 || number > 999) return;
    if (number % 1 > 0) return;
    this.units = number % 10;
    this.tens = ((number - this.units) % 100) / 10;
    this.hundreds = (number - (number % 100)) / 100;
  }

  let task = new task1(222);
  // console.log(task);

  //task1.1
  function ProductEs5(name, price) {
    this.name = name;
    this.price = price;
  }

  ProductEs5.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
  };

  class ProductEs6 {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    make25PercentDiscount() {
      this.price *= 0.75;
    }
  }

  //task1.2
  function PostEs5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  PostEs5.prototype.edit = function () {
    this.text = text;
  };

  function AttachedPostEs5(author, text, date) {
    PostEs5.call(this, author, text, date);
    this.highlighter = false;
  }

  AttachedPostEs5.prototype = Object.create(PostEs5.prototype);
  AttachedPostEs5.prototype.constructor = AttachedPostEs5;

  AttachedPostEs5.prototype.makeTextHighlighted = function () {
    this.highlighter = true;
  };

  class PostEs6 {
    constructor(author, text, date) {
      this.author = author;
      this.text = text;
      this.date = date;
    }
    edit(text) {
      this.text = text;
    }
  }

  class AttachedPostEs6 extends PostEs6 {
    constructor(author, text, date) {
      super(author, text, date);
      this.highlighter = false;
    }
    makeTextHighlighted() {
      this.highlighter = true;
    }
  }

  const task3 = () => {
    let Millioner = {
      questions: [],
      set addQustion(q) {
        this.questions.push(q);
      },
      run() {
        this.question.forEach((element) => {});
      },
    };

    Millioner.addQustion = "asda";
    console.log(Millioner);
  };
  task3();
}
hw4();
