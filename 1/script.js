function printTimeout(str, n) {
let time = n * 1000;
setTimeout(
    () => console.log(str), time

);
}
printTimeout('hello', 10);
