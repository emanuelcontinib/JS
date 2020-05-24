let cachorro  ={
  patas:4,
  raca:'srd',
  latir: function(){
    console.log('au au ');
  }
}
let labrador = Object.create(cachorro);

labrador.latir();

//estanciando objetos a partir de uma classe; 
// o objeto labrador foi criado a partir do obj/classe cachorro e a função latir foi herdada;

labrador.raca = 'labrador';

console.log(labrador.raca);
console.log(cachorro.raca);

