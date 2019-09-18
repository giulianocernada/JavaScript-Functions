function divideArray(arr, size) {
  let tempArray = [];
  let finalArray = [];

  for (let i = 0; i < arr.length; i++){
    if (tempArray.length < size){
      tempArray.push(arr[i]);
      if (tempArray.length === size){
        finalArray.push(tempArray);
        tempArray = [];
      }
    }
  }
  if (tempArray.length > 0){
    finalArray.push(tempArray);
  }
  
  return finalArray;
}

divideArray(["a", "b", "c", "d"], 3);