let a = 1;
let b = 4;
let c = 2;

if (c > b) {
  a=b;
}
console.log(a);

for (let i =5; i >0; i--){
  b++;
  a = a + c +2;
  c += 2;
}
console.log(a);

if (b ==a ){
  a++;
}else{
  a =a +b +c;}
  console.log(a);
