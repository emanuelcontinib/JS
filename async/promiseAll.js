const p1 = new Promise (function(resolve,reject){
  setTimeout(() => {
    resolve(10);
  }, 2000);
})

const p2 = Promise.resolve(10);

const p3 = new Promise ((resolve,reject) => {
  resolve(10)
})

Promise.all([p1,p2,p3]).then((values)=>console.log(values))