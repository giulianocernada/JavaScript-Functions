function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments); //Joins elements in an array

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) { //if args in J is equal to arr in I, delete it
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean); //Filter bool if there's any null created by delete
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);