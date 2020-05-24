class Chachorro {
  constructor(raca,patas,cor){
    this.raca = raca,
    this.patas = patas,
    this.cor = cor
  };
  latir (){
    console.log('au au ');
  }
}

let labrador = new Chachorro('Labrador', 4, 'Amarelo');
console.log(labrador);   

Chachorro.prototype.raca ='SRD';
Chachorro.prototype.cor= ' Preto';

let Husky = new Chachorro ('Husky', 4,'preto e branco');
console.log(Husky);


