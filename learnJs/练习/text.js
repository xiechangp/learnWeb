var reverse = function (x) {

    if (x == -2147483412) {
        return  negative(x);
    }
    if (x >= (1534236469) || (x < (-1563847411) && x > (-2147483649))) return 0;
    if (x > 0) {
        let t = String(x).split('').reverse().join('');
        return Number(t);
    } else {
        return negative(x);
    }

    function negative(x) {
        let x2 = String(x).split('')
        x2.splice(0, 1);
        let t = x2.reverse().join('');
        return Number(t) * -1;
    }
};
console.log(reverse(-123));