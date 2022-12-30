/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let pre = 0, post, len = s.length;

    for (let i = 0; i < len; i++) {
        post = search(s[i]);
        sum += post;

        if (post === pre * 5 || post === pre * 10) {
            sum -= 2 * pre;
        }

        pre = post;
    }

    return sum;
};

function search(x) {
    switch (x) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
    }
};