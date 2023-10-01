// variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"My faith helps me understand that circumstances don't dictate my happiness, my inner peace."`,
    person: ` Denzel Washington`
}, {
    quote: `"The fight is won or lost far away from the witnesses, behind the lines, in the gym and out there on the road, long before I dance under those lights."`,
    person: ` Muhammed Ali`
}, {
    quote: `“Don't let the noise of others' opinions drown out your own inner voice.”`,
    person: ` Steven Jobs`
}, {
    quote: `“Everyone can rise above their circumstances and achieve success if they are dedicated to and passionate about what they do.”`,
    person: ` Nelson Mandela`
}, {
    quote: `"I can accept failure, everyone fails at something. But I can't accept not trying"`,
    person: ` Michael Jordan`
}, {
    quote: `“It is impossible to live without failing at something unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default”`,
    person: ` J.K Rowling`
}, {
    quote: `“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.”`,
    person: ` Thomas Edison`
}, {
    quote: `“The most common way people give up their power is by thinking they don't have any”`,
    person: ` Alice Walker`
}, {
    quote: `“The world will not be destroyed by those who do evil, but those who watch and do nothing”`,
    person: ` Albert Einstein`
}, {
    quote: `“There is no greater thing you can do with your life and your work than follow your passions - In a way that serves the world and you”`,
    person: ` Richard Branson`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})


