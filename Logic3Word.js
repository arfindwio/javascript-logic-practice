const mergeArray = (array) => {
  const merge = array.sort().join(", ");

  return merge;
};

const buah = ["apel", "durian", "mangga", "salak", "pepaya"];

console.log(mergeArray(buah));
