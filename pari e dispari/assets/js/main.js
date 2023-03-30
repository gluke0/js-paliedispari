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
    const chooseSide = document.querySelector('.sotto');
    chooseSide.classList.remove('hidden');
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

let chooseNumber = document.querySelector('#play');

chooseNumber.addEventListener('click',
    function(){
        let chosen = parseInt(document.querySelector('#number').value);

        if (chosen > 0 && chosen <= 5){
            let cpuNumber = generator();
            let result = total(chosen, cpuNumber);
            let finalVerdict = winner(result);

            if (finalVerdict === i){
                alert(`HAI VINTOOO! HAI SCELTO ${chosen}, LA CPU ${cpuNumber}. LA SOMME È ${result}!`)
            } else {
                alert(`HAI PERSO :( HAI SCELTO ${chosen}, LA CPU ${cpuNumber}. LA SOMME È ${result}!`)
            }
        } else {
            alert('IL NUMERO DEVE ESSERE COMPRESO TRA 1 E 5')
        }
    }
)
