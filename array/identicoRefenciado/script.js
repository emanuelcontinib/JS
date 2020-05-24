//OBJETO IDÊNTICO E REFERENCIADO AO ANTIGO;
let zildjian = {
    sonoridade: "brilhante e sustentada",
    preço: "Salgado como o mar Morto",
}
let orionTwister = {
    sonoridade: "fechado como o tempo no inverno",
    preço: "Relativamente barato",
}
console.log(zildjian);
let paiste = orionTwister; //passa ao obj A as propriedade do obj B. Se mudar o B, muda o A tbm;
console.log(paiste);
paiste.preço = "baratinho...";
console.log(orionTwister);
