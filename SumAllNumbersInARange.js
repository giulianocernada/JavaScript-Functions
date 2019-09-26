function sumAll(arr) {
  let newArray = [];
  let result = 0;
  if(arr[0] < arr[1]){ //This is to check if the first number given is the lowest of them.
    for(let i = arr[0]; i <= arr[1]; i++){
      newArray.push(i);  //Creates a new array with the original numbers and all the other numbers between them
    }
    for(let k = 0; k < newArray.length; k++){
        result = result + newArray[k]; //Adds all the numbers to the result variable
    }
    return result
  } else {
    for(let i = arr[1]; i <= arr[0]; i++){
      newArray.push(i);
    }
    for(let k = 0; k < newArray.length; k++){
        result = result + newArray[k];
    }
    return result

  }
}

sumAll([1, 4]);