function addUpto(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }

    return total;
}

console.log(addUpto(6));
// 1, 3, 6, 10, 15, 21

function addUpTotwo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTotwo(6));

var time1 = Date.now();
// not able to use performance.now() with code runner/vs code
console.log(addUpto(1000000000));
var time2 = Date.now();
console.log(`Time Elapsed: ${(time2-time1) / 1000} seconds.`)

var time1_ = Date.now();
console.log(addUpTotwo(1000000000));
var time2_ = Date.now();
console.log(`Time Elapsed: ${(time2_-time1_) / 1000} seconds.`)
