const operator = prompt('აირჩიეთ მათემატიკური მოქმედება (  +, -, * ან / ): ');
const number1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი"));
const number2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი"));

let result;

if  (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

window.alert ('პასუხი : ' + result); 