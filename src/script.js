"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 +1);

const chooseOption = (opt1, opt2) => {
    let randNum = Math.random() < 0.5 ? 0 : 1;
    return randNum = 0 ? opt1 : opt2;
}

const attackPlayer = function(health) {
    return health - randomDamage;
}