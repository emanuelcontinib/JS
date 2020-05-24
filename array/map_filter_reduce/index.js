const pets = [
  {
    name: 'rex',
    type: 'dog',
    age: 3,
    color: 'green',
    weight:33
  },
  {
    name: 'Otto',
    type: 'fckcat',
    age: 2,
    color: 'many',
    weight:6  
    },
  {
    name: 'Tuco',
    type: 'bird',
    age: 26,
    weight:0.3
  },
  {
    name: 'Dino',
    type: 'dinossaur',
    age: 25,
    weight:303
  }
]
/*
const newPets =  pets.filter((pet)=> { //o filter vai iterar todos os elementos e trará um novo array com o resultados
  return pet.age > 5 
})
//console.log(pets);
console.log(newPets);

const petNames = pets.map((pets)=>{ //map retorna array com = numero de objetos, mas que satisfaçam a condição
  return pets.name
})
console.log(petNames);
*/

const totalAge = pets.reduce ((total,pet) => {
  return total + pet.age
},0) // o 0 é o valor inicial do totalque irá somar a cada iteração de item do array

console.log(totalAge);

const ageWeight = pets.reduce ((total, pet) => {
  return {
    totalAge: total.totalAge + pet.age,
    totalWeight: total.totalWeight + pet.weight
  }
  }, { totalAge : 0, totalWeight : 0 }) //iniciando os totais com 0

console.log(ageWeight);

