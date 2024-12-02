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
        outputContainer.innerHTML += `
            <a href="" class="main-content-itself-inner-movie-output-itself">
                <div class="main-content-itself-inner-movie-output-itself-image">
                    <img src="${movieData.Poster}" class="main-content-itself-inner-movie-output-itself-image-itself">
                </div>
                <div class="main-content-itself-inner-movie-output-itself-info">
                    <h3 class="main-content-itself-inner-movie-output-itself-info-name">${movieData.Title}</h3>
                    <h4 class="main-content-itself-inner-movie-output-itself-info-rating">${movieData.Ratings[0].Value}</h4>
                </div>
            </a>
        `;
    };
};


async function  searchMovie() {
    const response = await fetch(`https://www.omdbapi.com/?t=${movieInput.value}&apikey=1512de31`);
    const movieData = await response.json();
}

// INITIALIZING BUTTONS
window.addEventListener('DOMContentLoaded', displayTheData);
movieInput.addEventListener('input', searchMovie);