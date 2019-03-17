function concatFirstNestedArrays(arr) {

 const sum = arr.reduce((accumulator, currentValue) => {
     currentValue.map(el=>accumulator.push(el));
     return accumulator;
 },[]);

return sum;


}
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]));



//variant first
// function concatFirstNestedArrays(arr) {
//     let arrOne = arr[0];
//     let arrTwo = arr[1];
//     let arrThree = arr[2];
//     let arrAll = arrOne.concat(arrTwo).concat(arrThree);
//     console.log(arrAll);
// }
// concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]);
