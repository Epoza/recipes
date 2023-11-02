const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const htmlLink = document.querySelectorAll('.html-link');

const ingredientsBtn = document.querySelector('#ingredientsBtn');
const ingredientsList = document.querySelector('#ingredients-list');
const ingredientsBtnText = document.querySelector('#ingredientsBtnText')
const ingDownArrow = document.querySelector('#ing-down-arrow')
const ingUpArrow = document.querySelector('#ing-up-arrow')

const instructionsBtn = document.querySelector('#instructionsBtn');
const instructionsList = document.querySelector('#instructions-list');
const instructionsBtnText = document.querySelector('#instructionsBtnText')
const insDownArrow = document.querySelector('#ins-down-arrow')
const insUpArrow = document.querySelector('#ins-up-arrow')



// shows navbar items
burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }

})

// links to HTML file with recipe instructions
htmlLink.forEach(htmlLink => {
    htmlLink.addEventListener('click', (e) => {
        const link = e.target.closest('.html-link');
        if (link) {
            // Get the id of the clicked element
            const targetPageURL = "instructions/" + link.id + '.html';
            window.location.href = targetPageURL;
        }
    });
});

// show/hide ingredients when button is clicked
ingredientsBtn.addEventListener('click', () => {
    if(ingredientsList.classList.contains('hidden')){
        ingredientsList.classList.remove('hidden');
        ingredientsBtnText.textContent = "Hide Ingredients"
        ingUpArrow.classList.remove('hidden');
        ingUpArrow.classList.add('inline-block')
        ingDownArrow.classList.remove('inline-block')
        ingDownArrow.classList.add('hidden');
    } else {
        ingredientsList.classList.add('hidden');
        ingredientsBtnText.textContent = "Show Ingredients"
        ingUpArrow.classList.add('hidden');
        ingUpArrow.classList.remove('inline-block');
        ingDownArrow.classList.add('inline-block')
        ingDownArrow.classList.remove('hidden');
    }
})

// show/hide instructions when button is clicked
instructionsBtn.addEventListener('click', () => {
    if(instructionsList.classList.contains('hidden')){
        instructionsList.classList.remove('hidden');
        instructionsBtnText.textContent = "Hide instructions"
        insUpArrow.classList.remove('hidden');
        insUpArrow.classList.add('inline-block')
        insDownArrow.classList.remove('inline-block')
        insDownArrow.classList.add('hidden');
    } else {
        instructionsList.classList.add('hidden');
        instructionsBtnText.textContent = "Show instructions"
        insUpArrow.classList.add('hidden');
        insUpArrow.classList.add('inline-block');
        insDownArrow.classList.add('inline-block')
        insDownArrow.classList.remove('hidden');
    }
})

