import React, { Component } from 'react';
import { MovieList } from '../movie-list/movie-list.component';
import './add-movie.styles.css';

class AddMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            relatedMovies: [],
            display: false
        }
        this.props = props;
    }

    showList = () => (this.setState({display: true}))
    hideList = (movie) => {
        this.setState({display: false});
        this.props.closeModal();
        this.props.updateMovies(movie);
    }

    updateMovie = (e) => {
        this.setState({movie: e.target.value});
        this.setState({display: false});
    }

    handleAddMovie = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.movie}&api_key=c8ab0f0aac813aff5b5fa47908356f94`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                relatedMovies: (data.results && data.results.length > 0) ? data.results : null,
                display: true
            });
        })
        .catch(error => console.error('Error fetching movies:', error));
    }
    
    render () {
        return (
            <div className="add-movie-modal">
                <form onSubmit={this.handleAddMovie} className="add-movie-form">
                    <input 
                        className='search-movie'
                        type="search" 
                        placeholder='Add Movie'
                        onChange={this.updateMovie}
                    />
                    <button type="submit" className="add-movie-button">Add Movie</button>
                </form>
                {this.state.display && this.state.relatedMovies !== null && (
                    <MovieList movies={this.state.relatedMovies} hideList={this.hideList} />
                )}
            </div>
        );
    }   
}

export default AddMovie;