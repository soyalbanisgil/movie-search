class Movies {
  constructor() {
    this.key = '7041ca32';
    this.baseURI = 'https://www.omdbapi.com/';
  }

  async getMovies(text) {
    const query = `?apikey=${this.key}&s=${text}`;
    const response = await fetch(this.baseURI + query);
    const data = await response.json();
    return data.Search;
  }

  async getMovie(id) {
    const query = `?apikey=${this.key}&i=${id}&plot=full`;
    const response = await fetch(this.baseURI + query);
    const data = await response.json();
    return data;
  }
}

export default Movies;
