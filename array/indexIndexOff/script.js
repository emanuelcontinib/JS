let cymbals = [54,"orion", "zildjian",3==0,45,545,5876, "meinl", "paiste"];

console.log(cymbals.indexOf("meinl")); //aponta a localização do elemento no array;
console.log(cymbals.findIndex(String)); //aponta o primeiro elemento que satisfaça os parâmetros passados;
console.log(cymbals.find(Number)); //aponta qual é o primeiro elemento number no array;

console.log(cymbals.find(element => element > 54 )); //percorre o array e quando a condição é satisfeita para e retorna o primeiroo valor da condição;


