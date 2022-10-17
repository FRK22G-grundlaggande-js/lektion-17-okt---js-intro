// leta reda på relevanta element
let btn = document.querySelector('h1');
let nav = document.querySelector('nav');
let links = document.querySelectorAll('nav > a');

let firstName = 'Johan';
let lastName = `Kivi`;

let greeting = `Hej ${firstName} ${lastName}, din gamle get!`;
// let greeting = "Hej " + firstName + " " + lastName + ", din gamle get!"
console.log(greeting)


// lägg på öron på h1
btn.addEventListener('click', () => {
    nav.classList.toggle('show')
})

// Lägg på öron på alla a:link i nav
links.forEach(element => {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
})


