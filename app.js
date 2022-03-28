// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);

const string = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(string);
console.log(jokeJS1);

async function example1() {
    p1.innerText = await jokeJS1.setup;
    p2.innerText = await jokeJS1.punchline;
}
example1();


// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

const friendsJS2 = axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
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

// async function example4(){
//     const show = await axios.get(`https://api.tvmaze.com/shows/:id/episodebynumber?season=:season&number=:number`);
//     console.log(show.data);
// }
// example4();