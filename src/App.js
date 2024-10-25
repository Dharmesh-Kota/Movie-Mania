import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { Search } from "./components/search/search.component.jsx";
import AddMovieModal from "./components/add-movie-modal/add-movie-modal.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      initialMovies: [
        "Titanic",
        "The Matrix",
        "The Lion King",
        "Inception",
        "The Dark Knight",
        "The Shawshank Redemption",
        "The Godfather",
        "The Avengers",
        "Avengers: Age of Ultron",
        "Avengers: Infinity War",
        "Avengers: Endgame",
        "The Incredible",
      ],
      searchField: "",
    };
  }

  componentDidMount() {
    const moviePromises = this.state.initialMovies.map((movie) =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=c8ab0f0aac813aff5b5fa47908356f94`
      )
        .then((response) => response.json())
        .then((data) => {
          return data.results && data.results.length > 0
            ? data.results[0]
            : null;
        })
    );

    Promise.all(moviePromises)
      .then((moviesList) => {
        const validMovies = moviesList.filter((movie) => movie !== null);
        this.setState({ movies: validMovies });
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  updateMovies = (movie) => {
    const movieExists = this.state.movies.some(
      (existingMovie) => existingMovie.id === movie.id
    );
    if (!movieExists) {
      this.setState((prevState) => ({
        movies: [...prevState.movies, movie],
        openAddModal: false,
      }));
    } else {
      this.setState({ openAddModal: false });
    }
  };

  render() {
    const { movies, searchField } = this.state;
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="title">Movie Mania</h1>
        <Search placeholder="Search Movies" handleChange={this.handleChange} />
        <CardList movies={filteredMovies} />
        <AddMovieModal updateMovies={this.updateMovies} />
      </div>
    );
  }
}

export default App;