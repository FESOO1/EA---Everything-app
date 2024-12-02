const movieInput = document.getElementById('movieInput');
const outputContainer = document.querySelector('.main-content-itself-inner-movie-output');
const outputItself = document.querySelectorAll('.main-content-itself-inner-movie-output-itself');
const outputItselfImage = document.querySelectorAll('.main-content-itself-inner-movie-output-itself-image-itself');
const outputItselfName = document.querySelectorAll('.main-content-itself-inner-movie-output-itself-info-name');
const outputItselfRating = document.querySelectorAll('.main-content-itself-inner-movie-output-itself-info-rating');

const movieSelected = ["tt11126994","tt0765010","tt0107048","tt1677720","tt1068680","tt0816692","tt0162222","tt1790864"]

// RETRIEVING THE DATA FROM AN API

async function displayTheData() {
    // CREATE AN ELEMENT
    for (let i = 0; i < movieSelected.length; i++) {
        // FETCHING DATA
        const response = await fetch(`http://www.omdbapi.com/?i=${movieSelected[i]}&apikey=1512de31`);
        const movieData = await response.json();
        // USING THE FETCHED DATA
        outputItselfImage[i].src = movieData.Poster;
        outputItselfName[i].textContent = movieData.Title;
        outputItselfRating[i].textContent = movieData.Ratings[0].Value;
    };
};


async function  searchMovie() {
    const response = await fetch(`https://www.omdbapi.com/?t=${movieInput.value}&apikey=1512de31`);
    const movieData = await response.json();

    outputItself.forEach(output => {
        if (output.textContent.includes(movieInput.value)) {
            output.classList.add('main-content-itself-inner-movie-output-itself-shown');
            output.classList.remove('main-content-itself-inner-movie-output-itself-hidden');
        } else {
            output.classList.add('main-content-itself-inner-movie-output-itself-hidden');
            output.classList.remove('main-content-itself-inner-movie-output-itself-shown');
        };
    });
}

// INITIALIZING BUTTONS
window.addEventListener('DOMContentLoaded', displayTheData);
movieInput.addEventListener('input', searchMovie);