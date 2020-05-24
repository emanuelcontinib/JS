const pessoa  ={
  maos: 2,
};

console.log(Object.getPrototypeOf(pessoa));

console.log(pessoa.hasOwnProperty('maos')); //busca no objeto a presença da propriedade "mãos"

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos); //herda propriedade do objecto hierárquico superior


  
