function howMany(coins) {
    let sweets = 0;
    let wrappers = 0;

    sweets += coins;
    wrappers += sweets;

    while (wrappers > 3) {
        let coinsFromWrappers = Math.floor(wrappers / 3);
        wrappers = wrappers % 3 + coinsFromWrappers;
        sweets += coinsFromWrappers;
    }
    return sweets;
}

console.log(howMany(14));