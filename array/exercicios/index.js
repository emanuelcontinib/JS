let itemArray = ['bonobo', 'chimpanzé', 'gorila', 'macaco prego', 'babuíno'];
console.log(itemArray[1]);
console.log(itemArray[3]);
console.log(itemArray[4]);

let itemArray = ['bonobo', 'chimpanzé', 'gorila', 'macaco prego', 'babuíno'];
let itemArrayy = ['bonobo', 'chimpanzé'];
console.log(itemArray.length);
console.log(itemArrayy.length);

let onibus = {
  rodas: 8,
  janelas: 'a lot',
  limiteDePassageiros: 40,
  portas: 2
};

delete onibus.rodas; //remove propriedades
onibus.janelas = 20; //adiciona propriedades

console.log(onibus.janelas);
console.log(onibus.limiteDePassageiros);
console.log(onibus.rodas);

let names = ['emanuel', 'sofia', 'tedesco', 'aurelio', 'gentile']
if (names.includes('emanuel')) {
  console.log(`o nome buscado foi encontrado`)
}

console.log(names.indexOf("emanuel")); //aponta a localização do elemento no array;

let arrayMenor = [1, 5, 4];
let arrayMaior = [1, 6, 5, 3, 5, 8, 7];

function verifyLength(arr) {

  if (arr.length < 5) {
    console.log('o array é pequeno demais');
  } else {
    console.log('o array está de bom tamanho');
  };
};

verifyLength(arrayMenor);
verifyLength(arrayMaior);
for (let i = 0; i <= arrayMaior.length; i++) {
  console.log(arrayMaior[i]);
};
const frase = 'California rest in peace';
const arrFrase = frase.split(' ');
for (let i = 0; i < arrFrase.length; i++) {
  console.log(arrFrase[i]);


}