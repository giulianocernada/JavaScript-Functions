//This function inserts the first array into the second one at a given index

function addArray(arr1, arr2, n) {
  let nuevoArr = arr2.slice();
  for (let i=0; i < arr1.length; i++){
  nuevoArr.splice(n, 0, arr1[i]);
  n++
  }
  return nuevoArr;
}

addArray([1, 2, 3], [4, 5, 6], 1);