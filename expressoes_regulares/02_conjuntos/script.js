const reg1 = /[12345]/ //busca esses valores;
const reg2 = /[0-9]/ //busca se a string contem números

console.log(reg1.test('6'));//false
console.log(reg1.test('temos o numero 2?'));//true

console.log(reg2.test('10'));




