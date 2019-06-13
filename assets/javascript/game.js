window.onload = function(){
    getHP(4);
    rndAtk(4);
    rndCntrAtk(4);
    disableAtk();
    choose();
}

let attack = [4, 12, 8, 10];
let counterAtk = [50, 60, 30, 40]
let hp = [200, 250, 300, 400];
let cntrAtk = [];
let atk = [];
let health = [];
let atkCounter = 0;
let compHP = 0;
let compHealth;
let userHealth;
let atkBtnCount = 0;
let vanquishCount = 0;

// Assign random attack to each character
function rndAtk(count){
    const tmp = attack.slice(attack);
    
    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * tmp.length);
        const rmv = tmp.splice(index, 1);
        atk.push(rmv[0]);
    }

    atk.forEach(rndAtk)
    function rndAtk(attack, index){
        $('.Yoda').attr('attack', atk[0]);
        $('.Jinn').attr('attack', atk[1]);
        $('.Chewy').attr('attack', atk[2]);
        $('.Palpatine').attr('attack', atk[3]);
    }
}

// Assign random counter attack to each character
function rndCntrAtk(count){
    const tmp = counterAtk.slice(counterAtk);
    
    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * tmp.length);
        const rmv = tmp.splice(index, 1);
        cntrAtk.push(rmv[0]);
    }

    counterAtk.forEach(rndCntr)
    function rndCntr(attack, index){
        $('.Yoda').attr('counter-attack', cntrAtk[0]);
        $('.Jinn').attr('counter-attack', cntrAtk[1]);
        $('.Chewy').attr('counter-attack', cntrAtk[2]);
        $('.Palpatine').attr('counter-attack', cntrAtk[3]);
    }
}

// Assign random health points to each character
function getHP(count){
    const tmp = hp.slice(hp);

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * tmp.length);
        const rmv = tmp.splice(index, 1);
        health.push(rmv[0]);
  }

    health.forEach(rndHP)
    function rndHP(hp, index){
        $('#Yoda-health').text('HP: ' + health[0]).attr('hp', health[0]);        
        $('#Jinn-health').text('HP: ' + health[1]).attr('hp', health[1]);
        $('#Chewy-health').text('HP: ' + health[2]).attr('hp', health[2]);
        $('#Palpatine-health').text('HP: ' + health[3]).attr('hp', health[3]);
        $('.Yoda').attr('hp', health[0]);
        $('.Jinn').attr('hp', health[1]);
        $('.Chewy').attr('hp', health[2]);
        $('.Palpatine').attr('hp', health[3]);

    }
}

// After user selects character the rest are moved to the enemies to defeat area and are not allowed to be clicked again
function choose(){
    console.log('hi')
    $('.character').on('click', function(){
        $(this).removeClass('character').addClass('user restart');
        $('.character').not(this).appendTo($('.comp-char').addClass('my-2 d-inline-flex flex-row')).addClass('comp bg-dark restart').removeClass('bg-light character');
        chooseDefender();
    })
}

// After user selects a character to attack it is moved to the attack arena
function chooseDefender(){
    $('.character').off('click')
    $('.comp').on('click', function(){
        $('.comp').not(this);
        $(this).appendTo($('.arena').addClass('my-2 d-inline-flex flex-row')).addClass('atk-arena bg-danger');
        $('.atk-arena').removeClass('bg-dark comp user');
        enableAtk();
        $('.comp').off('click');
    });
}; 


// Listener for attack button
$('#attack').on('click', function(){
    const cntrAttack = ($('.atk-arena').attr('counter-attack'));
    let compHealth = ($('.atk-arena').attr('hp'));
    let userAttack = ($('.user').attr('attack'));
    let userHealth = ($('.user').attr('hp'));
    userAttack = parseInt(userAttack);
    userHealth = parseInt(userHealth);
    compHealth = parseInt(compHealth);
    
    // Method for increasing attack each time attack button is pressed
    atkBtnCount++

    atkCounter += userAttack;
    compHealth -= atkCounter;
    
    // Conditional for when a computer character is defeated
    if (compHealth <= 0){
        vanquishCount++;
        chooseDefender();
        disableAtk();
        compDefeat();
    }
    
    // Conditonal for attacking.  If computer health is above 0 attacks will continue and be listed for user to see
    if (compHealth > 0){
        userHealth -= cntrAttack;
        $('.dialog').html('<p>You attacked ' + $('.atk-arena span:first').text() + ' for ' + atkCounter + ' damage!</p>').addClass('ml-3');
        $('.dialog').append('<p>' + $('.atk-arena span:first').text() + ' counter attacked for ' + cntrAttack + ' damage!</p>');
        $('.atk-arena span:last').html('HP: ' + compHealth)
        $('.user').attr('attack', userAttack);
        $('.atk-arena').attr('hp', compHealth);
        $('.user').attr('hp', userHealth);
        $('.user span:last').html('HP: ' + userHealth);
    }
    
    // Conditional for when user character is defeated and gives user a restart button to restart the game
    if (userHealth <= 0){
        $('.dialog').html('<p class="ml-3">Resistance is Futile!! Click Restart to try again!</p>');
        $('.dialog').append('<button class="btn btn-success ml-3" type="button" id="restart">Restart</button>')
        $('.user span:last').html('HP: 0');
        disableAtk();
        $('#restart').on('click', function(){
            restart();
        })
    }
    
    // Conditional for when all computer characters are defeated and gives a restart button for user to select a new character
    if (vanquishCount > 2){
        $('.dialog').html('<p class="ml-3">You have vanquished your enemies!! Click Restart to rain destruction again!</p>');
        $('.dialog').append('<button class="btn btn-success ml-3" type="button" id="restart">Restart</button>')
        disableAtk();
        $('#restart').on('click', function(){
            restart();
        })
    }
})

// Function for when a computer character is defeated.  Will move character into a 'holding area'
function compDefeat(){
    // Conditional to determine if computer character has been defeated and will not counterattack if it has
    $('.atk-arena').removeClass('atk-arena').addClass('restart').appendTo('.defeated');
    }

// Function for restarting the game
function restart(){
    $('.restart').appendTo($('.defeated')).removeClass('user restart bg-dark bg-danger atk-arena').addClass('go bg-light');
    getHP(4);
    rndAtk(4);
    rndCntrAtk(4);
    disableAtk();
    choose();
    $('.start').html($('.go').removeClass('go').addClass('character'));
    $('.dialog').empty();
    vanquishCount = 0;
    atkBtnCount = 0;
    atkCounter = 0;
    cntrAtk = [];
    atk = [];
    health = [];
}

function disableAtk(){
    $('#attack').prop('disabled', true);
}
    
function enableAtk(){
    $('#attack').prop('disabled', false);
}