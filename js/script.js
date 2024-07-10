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

    let seconds = 30

    let time = document.getElementById('seconds');

    time.innerText = seconds;

    let clock = setInterval(function (){

        time.innerText = seconds;
        
    })

})