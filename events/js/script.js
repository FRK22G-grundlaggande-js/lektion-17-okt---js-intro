// Leta reda på knappen
let btnInc = document.querySelector('.inc');
let btnDec = document.querySelector('.dec');
let p = document.querySelector('p');
let count = 0;

// släng på öronen
btnInc.addEventListener(`click`, (e) => {
    count = count + 1;
    p.innerText = count;
})

btnDec.addEventListener(`click`, (e) => {
    count = count - 1;
    p.innerText = count;
})
// lyssna efter klick
// vad händer ett klick registereras