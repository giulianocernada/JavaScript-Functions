function findLongestWordLength(str) {
  let arr = str.split(' ');
  let longest = 0;
  let word = null;
  for (let i = 0; i < arr.length; i++){
    if(longest < arr[i].length) {
      longest = arr[i].length;
      word = arr[i];
    }
  }
  return `Longest word is "${word}" with ${longest} letters.`
}

findLongestWordLength("Yet they were still mounting toward the top when the painter flung the door wide open and with a deep bow invited K.");