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

console.log(coiote instanceof Mamifero);
//buscando quem é o pai da criança


