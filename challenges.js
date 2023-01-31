// Desafio 1 - Crie a função compareTrue
const compareTrue = (bool1, bool2) => bool1 && bool2;
// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => frase.split(' ');
// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins = 0, ties = 0) => wins * 3 + ties;
// Desafio 5 - Crie a função highestCount
const highestCount = (arrayOfNumbers) => {
  let higherNumber = arrayOfNumbers.reduce((a, b) => (a > b ? a : b));
  let sum = 0;
  for (let number of arrayOfNumbers) {
    if (number === higherNumber) {
      sum += 1;
    }
  }
  return sum;
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  switch (form) {
  case 'triângulo':
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  case 'retângulo':
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  default:
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  return 'cat2';
};
// Desafio 8 - Crie a função fizzBuzz
const divisibleBy3 = (number) => number % 3 === 0;
const divisibleBy5 = (number) => number % 5 === 0;
const divisibleBy3or5 = (number) => {
  if (divisibleBy3(number) && divisibleBy5(number)) {
    return 'fizzBuzz';
  }
  if (divisibleBy3(number)) {
    return 'fizz';
  }
  if (divisibleBy5(number)) {
    return 'buzz';
  }
  return 'bug!';
};
const fizzBuzz = (array) => {
  const outputArray = [];
  for (let i = 0; i < array.length; i += 1) {
    outputArray[i] = divisibleBy3or5(array[i]);
  }
  return outputArray;
};

// Desafio 9 - Crie a função encode e a função decode
const encode = (phrase) => {
  let outputString = '';
  const cryptography = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i = 0; i < phrase.length; i += 1) {
    if (cryptography[phrase[i]]) {
      outputString += cryptography[phrase[i]];
    } else {
      outputString += phrase[i];
    }
  }
  return outputString;
};
const decode = (phrase) => {
  let outputString = '';
  let cryptography = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i = 0; i < phrase.length; i += 1) {
    if (cryptography[phrase[i]]) {
      outputString += cryptography[phrase[i]];
    } else {
      outputString += phrase[i];
    }
  }
  return outputString;
};
// Desafio 10 - Crie a função techList
const techList = (stringsArray, string) => {
  const output = [];
  if (stringsArray.length === 0 || string.length === 0) {
    return output;
  }
  stringsArray.sort();
  for (let i = 0; i < stringsArray.length; i += 1) {
    output.push(
      {
        tech: stringsArray[i],
        name: string,
      },
    );
  }
  return output;
};
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
