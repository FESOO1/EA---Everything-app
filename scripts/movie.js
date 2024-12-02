const movieInput = document.getElementById('movieInput');
const outputContainer = document.querySelector('.main-content-itself-inner-movie-output');

// RETRIEVING THE DATA FROM AN API

async function displayTheData() {
    const response = await fetch(`https://www.omdbapi.com/?t=${movieInput.value}&apikey=d5f9f26`);
    const movieData = await response.json();

    // CREATE AN ELEMENT
    if (movieData) {
        outputContainer.innerHTML = `
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
    } else {
        outputContainer.innerHTML = '';
    };

};

// INITIALIZING INPUT 

movieInput.addEventListener('input', displayTheData);