require('babel-polyfill');
import Movies from './Movies';
import UI from './UI';
import '../css/main.sass';

const body = document.querySelector('body');
const form = document.querySelector('form');
const toggle = document.querySelector('input[type="checkbox"]');

//activate darkmode
toggle.addEventListener('click', () => {
  body.classList.toggle('dark_mode');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let page_count = 1;
  const movies = new Movies();
  const ui = new UI();

  if (form.search.value === '') {
    alert('Please fill the form');
  } else {
    ui.loading();
    movies
      .getMovies(form.search.value, page_count)
      .then((data) => {
        console.log(data);

        ui.searchResult(data.Search);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        ui.error404();
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
