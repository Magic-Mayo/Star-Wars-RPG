window.onload = function(){

}
// Assign random attack and health to each character
let attack = [5, 10, 15, 20];
let hp = [100, 200, 250, 150];
let char = [$('#Yoda-health'), $('#Jinn-health'), $('#Chewy-health'), $('#Palpatine-health')]
// let 
function rndAtk(a){
    for (let i = a.length - 1; i > 0; i--) {
        const atkPwr = attack[Math.floor(Math.random() * attack.length)];
    }
}

function rndHP(count){

    const tmp = hp.slice(hp);
    let health = []

    for (var i = 0; i < count; i++){
        const a = Math.floor(Math.random() * tmp.length);
        const rmv = tmp.splice(a, 1);
        health.push(rmv[0]);
    }

    return health;
    
}
rndHP();
let health;
$('#Yoda-health').text('HP: ' + rndHP(health[1]))
$('#Jinn-health').text('HP: ' + rndHP([2]))
$('#Chewy-health').text('HP: ' + rndHP([3]))
$('#Palpatine-health').text('HP: ' + rndHP([1]))
console.log(rndHP(4))



rndAtk(char);
// hpAssign();
// After user selects character the rest are moved to the available to attack area

// After user selects a character to attack it is moved to the defend area

// Function for increasing attack each time attack button is pressed

// Listener for attack button

// Listener for when user character is defeated and restarts function for user to select a new character after a specified length of time

// Listener for when each computer character is defeated and restarts function for user to select a new character after a specified length of time