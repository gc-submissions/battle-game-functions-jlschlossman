"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10) +1;

const chooseOption = (opt1, opt2) => {
    const randNum = Math.random() < 0.5 ? 0 : 1 ;
    return randNum === 0 ? opt1 : opt2;
}

const attackPlayer = function(health) {
    return parsInt(health, 10) - randomDamage; 
}

const logHealth = (player, health) => console.log(`${player} health: ${health}.`)

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}.`)

const isDead = (health) => health <= 0;

//fight

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        const attacker = chooseOption(player1, player2)
        if (attacker === player1) {
            let player2Health = attackPlayer


    }
}
}