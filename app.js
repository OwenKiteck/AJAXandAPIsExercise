// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);

const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(jokeJS1);

p1.innerText = jokeJS1.setup;
p2.innerText = jokeJS1.punchline;


// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
.then(quote => {
    const friendsJS2 = quote.data;
    console.log(friendsJS2);
    p3.innerText = friendsJS2.character;
    p4.innerText = friendsJS2.quote;
})
.catch(err => {
    p3.innerText = err;
    console.log(err);
})


// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

async function quoteFunc(quoteJS3) {
    try {
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;
    } catch (err) {
        console.log(err);
    }
}
quoteFunc();


// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

async function tvMazeFunc(){
    try {
        const show = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
        console.log(show);
        console.log(show.data.name);
        p7.innerText = show.data.name
    } catch (err) {
        console.log(err);
        p7.innerText = err
    }
}
tvMazeFunc();


// BONUS
// 5
const body = document.querySelector(`body`)
const img1 = document.createElement(`img`)
body.append(img1)

async function pokemonFunc(){
    const pikachu = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    img1.src = pikachu.data.sprites.front_female;
}
pokemonFunc();


// 6
const img2 = document.createElement(`img`)
body.append(img2)

async function omdb(){
    const request = await axios.get(`http://www.omdbapi.com/?apikey=7e1fedee&t=frozen`)
    img2.src = request.data;
    console.log(request);
    img2.src = request.data.Poster;
}
omdb();

// 7e1fedee