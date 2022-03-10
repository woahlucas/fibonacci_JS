function fibonacci(n){
  if (n < 2){
    return n;
  } 

  var ultimo = 1;
  var penultimo = 0;

  for(i = 2; i <= n;i++){
    if(i == n){
      return ultimo + penultimo;
    }

    let temp = penultimo;
    penultimo = ultimo;
    ultimo = temp + penultimo;
  }
}

console.log(fibonacci(4))