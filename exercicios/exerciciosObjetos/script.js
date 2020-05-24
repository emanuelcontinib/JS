// class Conta {
//     constructor (saldo){
//         this.saldo=saldo;
//     }
//     deposito(valor){
//         this.saldo += valor;
//     }
//     saque (valor){
//         this.saldo -= valor;
//     }
// }

// let conta = new Conta (1000);

// conta.deposito(1000);

// console.log(conta.saldo);

// conta.saque(850);
// console.log(conta.saldo);

// class Carinho {
//     constructor (itens,qtd,valorTotal){
//         this.itens = itens;
//         this.qtd = qtd;
//         this.valorTotal = valorTotal;
//     }
//     addItem (item){
//         let contador =0;

//         for(let itemCarinho in this.itens){

//             if(this.itens [itemCarinho].id == item.id){

//                 this.itens[itemCarinho].qtd += item.qtd;
//             }
//         }
//         if(contador == 0){
//             this.itens.push(item);
//         }
//         this.qtd += item.qtd;
//         this.valorTotal += item.preco * item.qtd;
//     }
//     removeItem (item){
//         for(let itemCarinho in this.itens){
//             if(this.itens [itemCarinho].id == item.id){

//                 let obj = this.itens[itemCarinho];

//                 let index = this.itens.findIndex(function(obj){return obj.id == item.id});

//                 this.qtd -= this.itens[itemCarinho].qtd;
//                 this.valorTotal -= this.itens[itemCarinho].preco * this.itens[itemCarinho.qtd]; 
                                
//                 this.itens.splice(index, 1);
//             }
//         }

//     }
// }
// let carinho = new Carinho ([
//     {
//         id:01,
//         nome:'fone de ouvido',
//         qtd: 1,
//         preco:250.
//     },
//     {
//         id:2,
//         nome:'HD SSD WARRIOR',
//         qtd:1,
//         preco:425,
//     }
// ],1,675);



// carinho.addItem({id:3, nome: 'Cabo HDMI', qtd:5,preco:72})

// console.log(carinho);

// carinho.removeItem({id:3, nome: 'Cabo HDMI', qtd:2, preco:72.5})

// function cutNames (){
//   var str = ('daniel Obara');
//   var res = str.split(' ');
//     const result = res.map(itemAtual => (itemAtual.charAt(0).toUpperCase()));
//     console.log(result.join('.'));
// }
// cutNames()

// class ClientAdress {
//   constructor (rua, bairro,cidade,uf) {
//     this.rua = rua;
//     this.bairro = bairro;
//     this.cidade = cidade;
//     this.uf = uf;
//   }
//   set novaRua (novaRua){
//     this.rua = novaRua;
//   }
//   set novoBairro (novoBairro){
//     this.bairro = novoBairro;
//   }
//   set novaCidade (novaCidade){
//     this.cidade = novaCidade;
//   }
//   set novoUF (novoUF){
//     this.uf = novoUF;
//   }
// }
// let adress = new ClientAdress ('Primeiro de Maio', 'Centro', 'Lindóia do Sul', 'SC')

// console.log(adress);

// adress.novaRua = 'Rua 29 de Julho';
// console.log(adress);


// adress.novoBairro = 'Fundos'.novaCidade = 'Floripa'.novoUF = 'GO';
// console.log(adress);

// class Carro {
//   constructor (marca, cor, combRestante,consumo) {
//     this.marca = marca;
//     this.cor = cor;
//     this.combRestante = combRestante;
//     this.consumo - consumo;
//   }
//   drive(km){
//     let consumo = this.combRestante / km;
//     this.combRestante -= consumo;
//   }

// }
  
//   let auto = new Carro ('vw', 'branco', 75, 35);
//   console.log(auto);
//   auto.drive(35);
  
class Conta {
  constructor(saldoCc, saldoPp,jurosPp){ 
  this.saldoCc = saldoCc;
  this.saldoPp = saldoPp;
  this.jurosPp = jurosPp;
  }
  depositoCc (deposito){
    this.saldoCc += deposito 
  }
  depositoPp (deposito){
    this.saldoPp += deposito
  }
  jurosPp (){
    let juros = (this.saldoPp*this.juros)/100 
    this.saldoPp += juros
  }
  saque (valor) {
    this.saldoCc-= valor
  }
  tranferePp (valor){
    this.saldoCc -= valor
    this.saldoPp += valor
  }
  tranfereCc (valor){
    this.saldoPp -= valor
    this.saldoCc += valor
  }
}

let Cc = new Conta (5000, 3000, 0.3)
console.log(Cc);

Cc.tranferePp(2000)
console.log(Cc);











  
