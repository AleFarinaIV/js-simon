const start = document.getElementById('play');

const numsAppear = document.getElementById('simon-says')

let simonSays = [];

let score = 0;

let numsCorrect = [];

start.addEventListener('click', function () {

    simonSays = [];

    numsCorrect = [];

    score = 0;

    numsAppear.innerHTML = ''

    while (simonSays.length < 5) {
        let simonNums = Math.floor(Math.random() * 100 + 1);
        if (!simonSays.includes(simonNums)) {
            simonSays.push(simonNums);
        }
    }
    console.log(simonSays);

    numsAppear.append(simonSays.join(' '));

    let seconds = 30;

    let time = document.getElementById('seconds');

    time.innerText = seconds;

    let countdown = setInterval(function (){

        time.innerText = seconds;

        if (seconds === 0) {

            time.classList.add('hide');
            numsAppear.classList.add('hide');
            clearInterval(countdown);

            setTimeout(function () {
                alert('Tempo scaduto! È il momento di ricordare');
                for (let i = 0; i < 5; i++) {
                    let userNums = prompt('Inserisci un numero che ricordi')
                    console.log(userNums);
                    if (simonSays.includes(parseInt(userNums))) {
                        numsCorrect.push(userNums)
                        console.log(numsCorrect);
                        score++;
                        console.log(score);
                    }
                }
                document.getElementById('response').innerText = `Hai indovinato ${score} numeri, quelli che hai indovinato sono: ${numsCorrect.join(', ')}`;
            }, 2000)
        }else {
            seconds--;
        }
    }, 1000);
})