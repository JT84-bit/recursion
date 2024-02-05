// Iterative way
const fibo = [];


function fibonacci (n){
    let n1 = 0, n2 = 1, next;
    for (let i = 1; i <= n; i++) {
        fibo.push(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}

// Recursive way
function fiborecursive(n){
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const fibo2 = fiborecursive(n - 1);
    fibo2.push(fibo2[fibo2.length - 1] + fibo2[fibo2.length - 2]);
    return fibo2;
  }

const fibo2 = fiborecursive(6)
console.log(fibo2);
fibonacci(6);
console.log(fibo);



