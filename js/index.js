let n = parseInt(prompt('Enter n') );
function fib(n) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
} 
print(fib(n) );

function fibRec(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
print(fibRec(n) );

function fibArr(n){
  let arr = [];
  let a = 1,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    arr.push[c];
  }
  return b;
}
print(fibArr(n) );


function print(value){
  document.write(value, "<br>");
}