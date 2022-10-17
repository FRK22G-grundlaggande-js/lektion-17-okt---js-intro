// Hitta grejer i DOM:en ( HTML )
let headline = document.querySelector(`h1`);
headline.innerText = `Found you!`;
headline.style.color = 'rebeccapurple';
headline.style.backgroundColor = 'gold';

let allPs = document.querySelectorAll(`p`);

allPs.forEach(element => {
    element.style.color = `pink`
});