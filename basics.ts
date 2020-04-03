function add (n1: number, n2: number, result: boolean, phrase: string) {
  if(result) {
    console.log(`${phrase} ${n1 + n2}`);
  }
  else {
    return n1 + n2;
  }

}

const number1 = 5;
const number2 = 4.5;
const showResult = true;
const showPhrase = 'Result is the following:';

const result = add(number1, number2, showResult, showPhrase);