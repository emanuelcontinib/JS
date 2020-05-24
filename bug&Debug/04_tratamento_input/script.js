function checkNumber (num){
  let number = Number (num);
  if(Number.isNaN(number)) {
    alert ('Insira só números');
  }else{
    return number
  }
}

let number = prompt('digite um número');
checkNumber(number)