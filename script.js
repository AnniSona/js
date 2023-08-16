// К А Л Ь К У Л Я Т О Р

const operation = prompt("Введите операцию");
const num1 = +prompt("Введите число");
const num2 = +prompt("Введите второе число");

let result;

const divide = (firstNumber, secondNumber) => {
  if (!firstNumber) {
    console.log("Вы не ввели первое число");
    return;
  }
  if (secondNumber === "") {
    console.log("Вы не ввели второе число");
    return;
  }
  if (secondNumber === 0) {
    console.log("Нельзя делить на ноль");
    return;
  }
  const result = +firstNumber / +secondNumber;

  return result;
};

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    result = divide(num1, num2);

    break;

  default:
    console.log("Недопустимая операция");
}

console.log(result);

/* const summ = (num1, num2) => {
  if (typeof num1 !== "number") {
    console.log("Первая переменная не число, введите числа заново");
  }

  if (typeof num2 !== "number") {
    console.log("Вторая переменная не число, введите числа заново");
  }

  console.log(num1 + num2);
}; */

const div = document.querySelector(".result");
div.innerHTML = "сюда писать переменную";
