function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
  // Va a comparar el slice => str.lenght es igual a 28 y target length es 4. Esto significa que va a tomar los caracteres
  //que esten a partir del indice 24 y compararlos con los caracteres del target
}

confirmEnding("Giuliano", "o");
