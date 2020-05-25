let p = Promise.resolve(new Error ('Não rolou'));
console.log('executando....');

p.then((value) => console.log(value))
.catch(reason => console.log ('Failed' + reason));
