/**
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
 */

function summation(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

export default summation;