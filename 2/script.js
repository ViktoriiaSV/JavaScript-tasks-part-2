function sumAll(n) {
    if (n === 1) return 1;
    return n + sumAll(n - 1);
}
alert(sumAll(2));
alert(sumAll(4));

