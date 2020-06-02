class UI {
  searchResult(res) {
    const app = document.querySelector('#app');

    app.innerHTML = '';

    res.map((movie) => {
      const element = `
                <div class="card" data-identifier="${movie.imdbID}">
                    <div class="card-inner">
                        <div class="movie animate__animated animate__fadeIn">
                            <img src=${movie.Poster} alt="${movie.Title}" data-identifier="${movie.imdbID}"/> 
                        </div>
                        <div class="movie-dets">
                            <h3>${movie.Title}</h3>
                            <p>${movie.Year}</p>
                        </div>
                    </div>
                </div>
            `;

      app.innerHTML += element;
    });
  }

  movieDetails(movie) {
    const app = document.querySelector('#app');

    app.innerHTML = '';

    const element = `
              <div class="movie-details">
              <img class="animate__animated animate__zoomIn" src=${movie.Poster} alt="${movie.Title}"/>
              
              <div class="movie-info animate__animated animate__fadeInRight">
                  <h1>${movie.Title}</h1>
                  <div class="main-info">
                  <p>${movie.Runtime} <i class="fas fa-circle"></i> ${movie.Released} <i class="fas fa-circle"></i> ${movie.Country}</p>
                   <p>Genre: ${movie.Genre}</p>
                   <p>Actors: ${movie.Actors}</p>
                  </div>
                  <p>${movie.Plot}</p>
              </div>
              </div>
      `;

    app.innerHTML = element;
  }
}

export default UI;
