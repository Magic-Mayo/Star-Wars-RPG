window.onload = function(){
    getHP(4);
    rndAtk(4);
}

let attack = [5, 10, 15, 20];
let hp = [100, 200, 250, 150];
let atk = [];
let health = [];

// Assign random attack and health to each character
function rndAtk(count){
    const tmp = attack.slice(hp);
    
    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * tmp.length);
        const rmv = tmp.splice(index, 1);
        atk.push(rmv[0]);
    }

    atk.forEach(rndAtk)
    function rndAtk(attack, index){
        $('.Yoda').attr('data-atk', atk[0]);
        $('.Jinn').attr('data-atk', atk[1]);
        $('.Chewy').attr('data-atk', atk[2]);
        $('.Palpatine').attr('data-atk', atk[3]);
    }
    console.log($('.Yoda'))
}

function getHP(count){
    const tmp = hp.slice(hp);

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * tmp.length);
        const rmv = tmp.splice(index, 1);
        health.push(rmv[0]);
  }

    health.forEach(rndHP)
    function rndHP(hp, index){
        $('#Yoda-health').text('HP: ' + health[0]).attr('data-hp', health[0]);
        $('#Jinn-health').text('HP: ' + health[1]).attr('data-hp', health[1]);
        $('#Chewy-health').text('HP: ' + health[2]).attr('data-hp', health[2]);
        $('#Palpatine-health').text('HP: ' + health[3]).attr('data-hp', health[3]);
    }
    console.log($('#Yoda-health'))
}

// After user selects character the rest are moved to the enemies to defeat area
$(document).ready(function(){
    $('.character').click(function(){
        $('.character').appendTo($('#comp-char'));
        console.log('hi');
    });
});
// After user selects a character to attack it is moved to the attack arena area

// Listener for attack button

// Function for increasing attack each time attack button is pressed

// Listener for when user character is defeated and restarts function for user to select a new character after a specified length of time

// Listener for when each computer character is defeated and restarts function for user to select a new character after a specified length of time