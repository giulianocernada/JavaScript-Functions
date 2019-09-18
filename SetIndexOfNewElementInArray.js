//With a number given, I have to sort the array in order and get the index where the new element should be inserted

function getIndexToInsert(arr, num) {
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++){
  if (arr[i] < num && num < arr[i+1]){
    num = arr[i+1];
    num = arr.indexOf(num);
  } else if (arr[i] === num) {
    num = arr[i];
    num = arr.indexOf(num);
  } else if (arr[arr.length-1] < num) {
    num = arr[arr.length-1];
    num = arr.indexOf(num) + 1;
  }
}
if (arr.length === 0) {
    num = 0;
  }
  return num;
}

getIndexToInsert([1, 4, 8, 42, 13, 27, 60], 12);