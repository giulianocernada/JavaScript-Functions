function capitalize(str) {
  let newStr = [];
  str = str.toLowerCase();
  str = str.split(' ');
  for (let i = 0; i < str.length; i++){
  newStr.push(str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase()));
  }
  str = newStr.join(' ');
  return str;
}

capitalize("HoLa CoMo EsTaS?");