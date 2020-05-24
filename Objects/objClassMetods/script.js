class Chachorro {
  constructor(raca,cor){
    this.raca = raca,
    this.cor = cor
  }
  latir (){
    console.log('au au')
  }
}

Chachorro.prototype.patas = 4;

let labrador = new Chachorro ('Labrador', 'Cinza');
console.log(labrador);
console.log(labrador.patas);
labrador.latir();

