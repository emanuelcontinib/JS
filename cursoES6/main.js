class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data)
    console.log(this.data);
  }
}
class TodoList extends List {
  constructor() {
    super();
    this.usuario = "emanuel"
  }
  mostraUsuario() {
    console.log(this.usuario);
  }
}
const MinhaLista = new TodoList;
document.getElementById('novoToDo').onclick = function () {
  MinhaLista.add('NOVO ToDo');
}
MinhaLista.mostraUsuario();
const a = 1; //never change
const user = {
  nome: "emanuel"
}
console.log(user.nome);
user.nome = "Noel" //posso mutar o valor do objeto, não o objeto
console.log(user.nome);
function teste(x) {
  let y = 2;
  if (x > 5) {
    console.log(x, y);
  }
}
teste(10)
//--------------------MAP--------------------------
const arr = [1, 2, 5, 4, 5, 6, 9, 8]
const newArr = arr.map(function (item) { //map percorre todo vetor executando a ação
  return item * 2
})
console.log(newArr);
//-------------REDUCE----------------------------
const sum = arr.reduce(function (total, next) { //consumir todo vetor e transformar em um única variável;
  return total + next;
});
console.log(sum);
//------------------------------_FILTER---------------------------------------------
const filter = arr.filter(function (item) {
  return item % 2 === 0; //retorna apenas os números pares. retornando TRUE ou FALSE
});
console.log(filter);
//--------------------------------FIND----------------------------------
const find = arr.find(function (item) { //busca determinada informação dentro do array
  return item === 4; //true
  return item === 3; //undefined
})
console.log(find);
// ----------------------------------ARROW FUNCTIONS--------------------------------------
const arr = [1, 2, 4, 5, 7, 8];
const newArr = arr.map(arr => arr * 2); //quando recebe só uma parâmetro, sem corpo de função
console.log(newArr);
const NewArr = arr.map((item) => {
  return item * item;
})
console.log(NewArr);
const teste = () => {
  return 'teste'
}
console.log(teste());
// --------------------------------------DESTRUCTURING----------------------------
const usuario = {
  nome: 'emanuel',
  idade: 26,
  endereço: {
    rua: 'Diogenes',
    cidade: 'erechim',
    estado: 'rs',
  }
}
const { nome, idade, endereço: { cidade } } = usuario //desestruturação 
console.log(nome, idade, cidade);//desestruturação 
// -----------------------------------operador rest-----------------------------------------
const { nome, ...resto } = usuario //'...nome_variavel:' operados resto, guardo resto da desestruturação do objeto ou vetor
console.log(nome);
console.log(resto);
function soma(a, b, ...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 7, 6, 5, 4));
console.log(soma);
// -------------------------------------operador spread--------------------------------------
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]
const arr3 = [...arr1, ...arr2]   //SPREAD - une os arrays
console.log(arr3);
const usuario1 = {
  nome: 'emanuel',
  idade: 26,
  empresa: 'weecode'
}
const usuario2 = { ...usuario1, idade: 27 } // ...usuario1 = copiou as informações e substitui onde a propriedade for igual.
console.log(usuario2);
class Usuario {
  constructor(email, senha) {
    this.email = email,
      this.senha = senha
  }
  isAdmin() {
    return this.Admin === true;
  }
}
class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha)
    this.Admin = true
  }
};
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
//2.1 Utilizando o map
//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const newArr = usuarios.map(function (item) { //map percorre todo vetor executando a ação
  return item.idade
})
console.log(newArr);
// 2.2 Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
const filtered = usuarios.filter((item) => {
  if (item.empresa == 'Rocketseat' && item.idade > 18)
    return item.nome
})
console.log(filtered);
//2.3 Utilizando o find
//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const finded = usuarios.find((item) => { return item.empresa == 'Google' })
console.log(finded);
//2.4 Unindo operações
//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos:
const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);
console.log(calculo);
const array = [1, 2, 3, 4, 5, 6];
const arr = array.map(item => item + 10)
console.log(arr);
const user = {
  name: 'emanuel',
  age: 26,
}
const mostraIdade = user => console.log(user.age);
mostraIdade(user)
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Emanuel', idade = 26) => {
  console.log(`${nome} ${idade}`)
}
mostraUsuario(nome, idade);
const promise = () => { new Promise((resolve, reject) => { return resolve() }) }
promise()
const usuario = {
  nome: 'emanuel',
  idade: 26,
  endereço: {
    rua: 'Diogenes',
    cidade: 'erechim',
    estado: 'rs',
  }
}
const { nome, idade, endereço: { rua }, endereço: { estado } } = usuario
console.log(nome, idade, rua, estado);
const z = [1, 2, 3, 4, 5, 6, 7, 8, 91];
const [x, ...y] = z
console.log(x, y);
function soma(...value) {
  return value.reduce((total, next) => total + next);
}
console.log(soma(1, 5, 4, 5, 2, 1, 21, 1, 1, 11, 54));
const usuario1 = {
  nome: 'emanuel',
  idade: 26,
  empresa: 'weecode'
}
const usuario2 = { ...usuario1, idade: 27, empresa: 'Xteam' } // ...usuario1 = copiou as informações e substitui onde a propriedade for igual.
console.log(usuario2);

