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

})