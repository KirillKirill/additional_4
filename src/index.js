module.exports = function multiply(first, second) {
    if( !first || !second) return 0;
    first = first.split('').reverse();
    second = second.split('').reverse();
    var multi = new Array(first.length + second.length).fill(0);
    for (var i = 0; i < second.length; i++){
        var dig2 = second[i] - '0';
        var count = 0;
        for (var j = 0; j < first.length; j++){
            var dig1 = first[j];
            var temp = multi[i + j];
            var cur = dig1 * dig2 + count + temp;
            multi[i + j] = cur % 10;
            count = Math.floor(cur / 10);
        }
        multi[i + first.length] = count;
    }
    if (multi[multi.length - 1] === 0) multi.pop();
    return multi.reverse().join('');
};
