function criaCachorro(raca,patas,cor){
  let cachorro = Object.create({});
  cachorro.patas = patas;
  cachorro.raca = raca;
  cachorro.cor = cor;
  cachorro.latir = function (){
    console.log('au au ');
  };
  return cachorro;
}

let doberman = criaCachorro(4,'Doberman', 'preta');

console.log(doberman);

doberman.latir();