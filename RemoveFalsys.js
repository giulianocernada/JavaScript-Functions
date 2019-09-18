function falsyRemover(arr) {
  return arr.filter(Boolean);
}

falsyRemover(["Giuliano", "ate", 28, NaN, "", false, 9]);