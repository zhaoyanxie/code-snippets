const array = [0, 1, 2, 0, 0, 3];

// method 1:
const uniqueSet = new Set(array);
const uniqueArray1 = [...uniqueSet];
console.log(uniqueArray1);

// method 2:
const uniqueArray2 = array.filter(
  (item, index) => array.indexOf(item) === index
);
console.log(uniqueArray2);

// method 3:
const uniqueArray3 = array.reduce((unique, item) => {
  return unique.includes(item) ? unique : [...unique, item];
}, []);
console.log(uniqueArray3);
