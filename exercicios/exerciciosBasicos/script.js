//exercícios 1: strings com '," " e `` 
/*

console.log("Stringer");
console.log('stringerberg');
console.log(`Strinbergerrr`);

let nome = ("emanuel");
console.log(`meu nome é ${nome}`);

// exercício 2: number inteiro, com casa decimal e por aritmética; 

console.log(18);
console.log(18.9);
console.log(9 + 9);


// exercício 3: escreva três comparações com boolean; uma com >, <= e != ;

console.log(15 > 11);
console.log(15 <= 16);
console.log(15 != 12);

// exercício 4: escreva três comparações com operadores lógicos; and or e not;

console.log(13 == 13 && 5 > 3);
console.log(true != false || 15 >= 30);
console.log(!(12 == 12 && 9 >= 6));


//functions 

let maiorNumero = Math.max(1, 52, 9);
console.log(maiorNumero);

let nome = "emanuel";


for (let i = 0; i< 10; i = i ++){  
    if (i==3) {
        nome="NOEL";
    }
    if (i == 5 && nome == "NOEL"){
        console.log('o nome é NOEL, stop MF');
        break;
    }
    console.log(i);
}


let strings = "strings";
let numbers = 123;
let booleans = true;


let idade = prompt("Digite sua idade");
    if (idade >= 18) {
        alert("pode entrar");
    }else{
        alert("no way babes");
    }



const name = prompt("quem és tu, urubu?"); 
    if (name == "emanuel"){
        alert(`saudações ${name}`);
    }else {
        alert("who are you, urubu?");
    }

let potencia = Math.pow(5,3);
    console.log(potencia);
    

    let potenciaa = Math.pow(2,2);
    console.log(potenciaa);


let potenciab = Math.pow(3,2);
console.log(potenciab);

let potenciac = Math.pow(18,2);
    console.log(potenciac);

    
let idade = prompt("quantos anos tens?"),
    cnh = "";

if (idade >= 18) {
    cnh = prompt("tem carteira? s ou n");
}

if (cnh == "s") {
    alert(" dirige");
} else {
    alert("não dirige");
}

let contador = 0;
while (contador < 10) {
    contador++;
    console.log(contador);
}

for (let i = 100; i > 50; i -= 3){ 
    console.log(i);
}

for (let i=0; i <100; i++){
    
    if (i % 2 == 0){
        console.log(`o ${i} é par `);
    }else {
        console.log(`o ${i} e ímpar`);
        
    }
}

let numero = 15;
let divisoes = 0;

for (let i= 0; i <= numero; i++){
    if (numero % i == 0){
        divisoes++;
    }
}
        if (divisoes == 2 ){
            console.log(`o ${numero} é primo`)    
        }else{
                console.log(`o ${numero} não é primo`);
        }
*/