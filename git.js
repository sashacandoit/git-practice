

//rgb black = (255,255,255)
//rgb white = (0,0,0)
// random color would be a number between 0 and 255

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    // multiply times 256 and round down to get a number between 0 and 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// apply the new function to the style of the h1 (WHOLE WORD)

// const h1 = document.querySelector('h1');
// // h1.style.color = randomRGB();
// // will apply it but will only change the color when page is refreshed

// setInterval(function() {
//     h1.style.color = randomRGB();
// }, 500)


// apply the new function to the style of the h1 (individual letters)
const letters = document.querySelectorAll('.letter');
// tells html and css that we are looking for all elements with the class of letter

// loop through each letter and apply a color style that is the new random function
for(let letter of letters) {
    setInterval(function() {
        letter.style.color = randomRGB();
    }, 800)
}
