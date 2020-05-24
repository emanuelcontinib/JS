/*
const multiplica = x => x * 2; // função utilizando arrow
console.log(multiplica(4));


function nomeComIdade(nome, idade) {
    if (idade === undefined) { //utilizando agumentos opcionais;
        console.log(`seu nome é ${nome}`);

    } else {
        console.log(`seu nome é ${nome}, e você tem ${idade} de idade`);

    }
}

//----------------------------------------------------------------------
nomeComIdade("emanuel");
nomeComIdade("emanuel", 27);

function potencia(base, exp = 2) { //utilizando valores default;
    return Math.pow(base,exp);
};

console.log(potencia(2));
console.log(potencia(2,5));

//----------------------------------------------------------------------
CLOSURE função dentro de função
    function lembrarSoma (x){
        return function(y){
        return x+y;
    }
}
let soma = lembrarSoma(2);

console.log(soma(5));

//------------------------------------------------------------------------------------------------------


function escreve(){
    console.log("hello world");
};
escreve();
//------------------------------------------------------------------------------------------------------


function anos () {
    let pede = prompt("digite sua idade");
    console.log(
        (`você tem ${pede} anos;`)
        );
    }
    anos();
//------------------------------------------------------------------------------------------------------
    
    
    
    const soma = (x,y) => x+y;
    console.log(soma(2,5));
//------------------------------------------------------------------------------------------------------
    
    
    function numeroAleatorio (num){
        return Math.floor(Math.random   ()*num) + 1;
    }
    
    console.log(numeroAleatorio(7));
    console.log(numeroAleatorio(700));
    console.log(numeroAleatorio(50));
//------------------------------------------------------------------------------------------------------
    
    function cnh (){
        let idade = (prompt("fala pra mim, quantos anos tu tenxxx"));
        if (idade >=18) {
            console.log("auto-escola");
            
        }else{
            console.log("wait a few years");
        }
    }
    cnh();
//------------------------------------------------------------------------------------------------------
    
    
    var inputs = [23, 5 > 3, "stringer", 5 === 5, "bra dum tss", 17 + 5 == 22];
    function dados() {
        inputs.forEach(valueOfArray => {
            console.log(` seu dado é do tipo ${typeof valueOfArray}`);
        });
    }
    dados();
//------------------------------------------------------------------------------------------------------
    

function positiva (numero){
    return  Math.abs(numero);
}

console.log(positiva(prompt("digite um número e veja a mágica")));
//------------------------------------------------------------------------------------------------------


let str = prompt();

if (str.length >= 9) {
    console.log("muito texto");
} else {
    console.log("tá bom");
}
//------------------------------------------------------------------------------------------------------

function potencia (a,b){ 
    return Math.pow(a,b);
}
console.log(potencia (2,4));

function imprime(num) {
    for (let i = num; i >= 0; i --) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
imprime(87);

*/


