//Function that gets the desired number of characters based on the second argument
//If string.length === number -> return the same string
//If string.length < number -> return the same string

function cropString(str, num) {
  if (str.length > num){
  return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

cropString("Yet they were still mounting toward the top when the painter flung the door wide open and with a deep bow invited K.", 43)