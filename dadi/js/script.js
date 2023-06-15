let diceUser = Math.floor(Math.random()*(6 -1 +1)+1)
let diceComputer = Math.floor(Math.random()*(6 -1 +1)+1)

if (diceUser > diceComputer){
    let winner = document.createElement("h1");
    document.body.appendChild(winner);
    winner.append('user wins'+ " " +"user = " +diceUser+ " pc =" +diceComputer)
    console.log('user wins'+ " " + diceUser+ " " +diceComputer)
}

else if (diceUser < diceComputer){
    let winner = document.createElement("h1");
    document.body.appendChild(winner);
    winner.append('computer wins'+ " " +"user = " +diceUser+ " pc =" +diceComputer)
    console.log('computer wins'+ " " +diceUser+ " " +diceComputer)
}
else if (diceUser == diceComputer){
    let winner = document.createElement("h1");
    document.body.appendChild(winner);
    winner.append('reroll'+ " " + "user = " +diceUser+ " pc =" +diceComputer)
    console.log('reroll'+ " " +diceUser+ " " +diceComputer)
}
