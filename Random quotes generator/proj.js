let btn = document.querySelector('#newquote');
let qt = document.querySelector('.quote');
let pers = document.querySelector('.pers');
let cnt = document.querySelector('.content');

let quotes = [
    {
        quote: 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
        person: 'Christian D. Larson'
    },
    {
        quote: 'Confidence comes not from always being right but from not fearing to be wrong.',
        person: 'Peter T. McIntyre'
    },
    {
        quote: 'You yourself, as much as anybody in the entire universe, deserve your love and affection.',
        person: 'Buddha'
    },
    {
        quote: 'Do not let what you cannot do interfere with what you can do.',
        person: 'John Wooden'
    },
    {
        quote: 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
        person: 'Helen Keller'
    }
];

let i = 0;

btn.addEventListener('click', function() {
    qt.textContent = quotes[i].quote;
    pers.textContent = quotes[i].person;

    // Ajustement de la hauteur en fonction de la citation
    if (quotes[i].quote.length > 100) {
        cnt.style.height = '400px';
    } else {
        cnt.style.height = '300px';
    }

    i = (i + 1) % quotes.length; // Boucle circulaire sur les citations
});
