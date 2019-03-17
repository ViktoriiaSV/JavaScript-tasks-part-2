function factorial(n) {

    if(n === 0) {
        return 1;
    } else {
        let result = n * factorial(n - 1);
        return result;
    }
}
console.log(factorial(3));
console.log(factorial(5));


