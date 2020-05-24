function saudacao(nome) {
  if (typeof nome != 'string') {
    throw new Error("o parametro precisa ser string");//INFORMA O ERRO PRA OUTROS DEV'S
  }else{
    console.log(`olá ${nome}`);
  }
}

saudacao('emanuel');
saudacao(5);