function lettersCheck(arr) {
//Converting to lower case so it's easier to compare
  let firstWordArray = arr[0].toLowerCase();
  let secondWordArray = arr[1].toLowerCase();

//for every letter in the secondWordArray, chech if it's present in the firstWordArray
  for (let i=0; i < secondWordArray.length; i++){
    if(firstWordArray.indexOf(secondWordArray[i])<0){
    //when it's not present, indexOf returns '-1'
      return false;
    }
  }
  return true;
}

lettersCheck(["hello", "hi"]);