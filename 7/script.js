function minMax(arr) {
    let numbers = arr;
    let arrMax = Math.min.apply(Math, numbers);
    let arrMin = Math.max.apply(Math, numbers);
    let objMinMax = {
        minValue : arrMin,
        maxValue : arrMax
    };
return objMinMax;
}
console.log(minMax([1, 4, 8, 2, 20]));
