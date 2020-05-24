class Mamifero{
  constructor (patas){
    this.patas = patas;
  } 
}
class coiote extends Mamifero {
  constructor(raca,cor){
    super (patas, patas)
    this.raca = raca,
    this.cor = cor
  }
}

let cachorro = new Mamifero(4);
console.log(cachorro instanceof Mamifero);//buscando quem é o pai da criança



