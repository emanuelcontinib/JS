const reg1 = new RegExp ('bola');

console.log(reg1.test('tem bola nessa string?'));
console.log(reg1.test('aqui não tem'));

const reg2 = /bola/;

let text = 'tem bola ou não tem?';

console.log(reg1.test('aqui não tem'));
console.log(reg1.test('tem bola nessa string?'));
console.log(reg1.test(text));

console.log(/quadrado/.test('tem quadrado nessa string?'));
console.log(/quadrado/.test('3456789quadrado456789'));





