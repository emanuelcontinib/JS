let p = Promise.resolve (10);
  console.log('otos codes');

console.log(p);

  p.then((value) => console.log(`o valor é ${value}`))
p.then((value) => {return value + 5})
p.then((value) => {console.log(value)})
