// Desafio 11 - Crie a função generatePhoneNumber
const getObjectFromArray = (array) => {
  let numbers = {};
  for (let i = 0; i < array.length; i += 1) {
    if (!numbers[array[i]]) {
      numbers[array[i]] = 0;
    }
    numbers[array[i]] += 1;
  }
  return numbers;
};
const repMoreThan3 = (array) => {
  let numbers = getObjectFromArray(array);
  for (let number in numbers) {
    if (numbers[number] >= 3) {
      return false;
    }
  }
  return true;
};
const greaterThan9 = (array) => array.reduce((a, b) => (a > b ? a : b)) > 9;
const lessThan0 = (array) => array.reduce((a, b) => (a < b ? a : b)) < 0;
const formatNumber = (array) => {
  let output = `(${array[0]}${array[1]}) `;
  output += `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  output += `-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return output;
};
const generatePhoneNumber = (numbersArray) => {
  if (numbersArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (greaterThan9(numbersArray) || lessThan0(numbersArray) || !repMoreThan3(numbersArray)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return formatNumber(numbersArray);
};
// Desafio 12 -  Crie a função triangleCheck
const triangle = (a, b, c) => a < b + c && a > Math.abs(b - c);
const triangleCheck = (a, b, c) => triangle(a, b, c) || triangle(b, a, c) || triangle(c, b, a);
// Desafio 13 - Crie a função hydrate
const hydrate = (string) => {
  let numbers = string.match((/\d/g));
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += Number(numbers[i]);
  }
  const stringS = sum > 1 ? 's' : '';
  return `${sum} copo${stringS} de água`;
};
