var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        src: 'https://ia.media-imdb.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX667_CR0,0,667,999_AL_.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: 'http://1.fwcdn.pl/ph/68/78/6878/213976.1.jpg'
    },
    {
        id: 3,
        title: 'Three bilboards outside Ebbing Missouri',
        desc: 'Film o kobiecie, która szuka sprawiedliwości dla swojej córki',
        src: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6175/6175504_sa.jpg;maxHeight=640;maxWidth=550'
    },
    {
        id: 4,
        title: 'Jumanji',
        desc: 'Młodzi uczniowie znajdują się w środku gry i muszą walczyć o swoje życie',
        src: 'https://ia.media-imdb.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', { src: movie.src })
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));
