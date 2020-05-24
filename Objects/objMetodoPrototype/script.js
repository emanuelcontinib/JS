function Cachorro (raca, patas, cor, porte) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.porte = porte;
  
};

Cachorro.prototype.uivar = function(){
  console.log('auuuuu');
};

let husky = new Cachorro ('Husky', 4, 'preto/cinza', 'grande');
console.log(husky);

husky.uivar();