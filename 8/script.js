function average(arr) {
    let sum = 0;
    let averNumber = 0;
    let fixNumber;
    if (arr.length) {
        sum = arr.reduce(function (a, b) {return a + b});
        averNumber = sum / arr.length;
        fixNumber = averNumber.toFixed(2);
    }
    return fixNumber;
}
console.log(average([1,4,2]));
