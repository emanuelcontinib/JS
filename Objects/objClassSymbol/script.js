class Chachorro {
  constructor(raca,cor){
    this.raca = raca,
    this.cor = cor
  }
  latir (){
    console.log('au au')
  }
}

let patas = Symbol ();
Chachorro.prototype[patas] = 4;

let labrador = new Chachorro ('Labrador', 'Cinza');
console.log(labrador);
labrador.latir();

//acessar o symbol
console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);



