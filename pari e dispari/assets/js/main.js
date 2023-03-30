//utente sceglie se pari o dispari
// inserisce numero da 1 a 5
// numero random per cpu sempre da 1 a 5
// somma numero utente + numero cpu
// stabilire se somma è pari o dispari
// vincitore

// funzioni generali
function generator(){
    const generated = Math.floor(Math.random() * 5) + 1;
    return generated
}

function total (num1, num2){
    const sum = num1 + num2;
    return sum;
}

function winner (num){
    if (num % 2 == 0){
        return 0;
    } else {
        return 1;
    }
}

function goAhead(){
    const chooseNumber = document.querySelector('.sotto');
    chooseNumber.classList.remove('hidden');
}

// gioco
let even = document.querySelector('#even');
let odd = document.querySelector('#odd');

let i = 0;

even.addEventListener('click',
    function(){
        goAhead();
    }
)

odd.addEventListener('click',
    function(){
        i = 1;
        goAhead();
    }
)
