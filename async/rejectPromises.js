function verificaNumero (num){
  return new Promise ((resolve, reject) => {
    if (num == 2) {
      resolve (console.log(`o número é ${num}`));
    }else{
      reject(console.log('falhou'))
    
    }
  });
}

verificaNumero(2);
verificaNumero(1);