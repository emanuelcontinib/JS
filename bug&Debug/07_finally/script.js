let b = 3;
let a = 2;
try {
  let a = 2 + b;
} catch (e) {
  console.log(e);
  console.log('teste');
}finally{
  console.log('executou ')//finally ignora possíveis erros e segue o processo
}
