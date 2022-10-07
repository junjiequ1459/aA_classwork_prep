function laigatSum(num) {
  let returnSum = 0;
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      returnSum += i;
    }
  }
  return returnSum;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(laigatSum(11));
