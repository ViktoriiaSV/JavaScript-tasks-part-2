function filterNumbers(arr, maxNumber) {

let arrNumbers = arr.filter(function(number) {
return number <= maxNumber;
});
return arrNumbers;

}
console.log(filterNumbers([1, 4, 8, 1, 20], 5));


// var arr = [1, -1, 2, -2, 3];
//
// var positiveArr = arr.filter(function(number) {
//     return number > 0;
// });
//
// alert( positiveArr ); // 1,2,3

//second
// function checkMaxNumber (arr) {
//     return arr <=  maxNumber;
// }
//
// function filterNumberFunction() {
//     arr.filter(checkMaxNumber);
// }
// console.log(filterNumberFunction());

//first
// let arrFiltered = [];
// let newArr = [];
// for (let i = 0; arr[i] <= maxNumber; i++) {
//     arr.sort(function (a, b) { return a - b});
//     arrFiltered += arr[i];
//     newArr = arrFiltered.split(" ");
// }
// return newArr;
// console.log(newArr);
