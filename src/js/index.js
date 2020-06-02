require('babel-polyfill');
import Movies from './Movies';
import UI from './UI';
import '../css/main.sass';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const movies = new Movies();
  const ui = new UI();

  if (form.search.value === '') {
    alert('Please fill the form');
  } else {
    movies.getMovies(form.search.value).then((data) => {
      ui.searchResult(data);
      form.reset();
    });
  }
});

const app = document.querySelector('#app');

app.addEventListener('click', (e) => {
  const movie = new Movies();

  if (e.target.dataset['identifier']) {
    movie.getMovie(e.target.dataset['identifier']).then((data) => {
      console.log(data);

      const ui = new UI();

      ui.movieDetails(data);
    });
  } else {
    return false;
  }
});
