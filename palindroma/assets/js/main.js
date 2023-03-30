// chiedere utente di inserire parola
// funzion per controllare se parola è palindroma

let button = document.querySelector('button');

button.addEventListener ('click',
    function() {
        let input = document.querySelector('input').value;

        if (input.length < 2){
            alert('PAROLA TROPPO CORTA');
        } else {
            let word1 = [];
            let word2 = [];
            
            for (let i = 0; i < input.length; i++){
                word1.push(input[i]);
            }

            // seconda parola al contrario
            for (let i = input.length - 1; i >= 0; i--){
                word2.push(input[i]);
            } 

            if (word2 == word1){
                alert('LA PAROLA È PALINDROMA')
            } else {
                alert('LA PAROLA NON È PALINDROMA')
            }
        }
})