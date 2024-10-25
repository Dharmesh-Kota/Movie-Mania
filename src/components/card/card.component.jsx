import React, { Component } from 'react'
import './card.styles.css'
import { InfoModal } from '../info-modal/info-modal.component'

class Card extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            open: false
        }
        this.props = props;
    }
    
    handleOpen = () => (this.setState({open: true}))
    handleClose = () => (this.setState({open: false}))

    render() {
        const windowWidth = window.innerWidth;
        return (
            <>
                <div className='card-container' onClick={this.handleOpen}>
                <img 
                    alt="movie" 
                    src={`https://image.tmdb.org/t/p/${windowWidth < 480 ? 'w200' : 'w300'}/${this.props.movie.poster_path}`} 
                    style={{ borderRadius: '5px', maxWidth: '100%', height: 'auto' }}
                />
                <h1>{this.props.movie.title}</h1>
                </div>
                <InfoModal movie={this.props.movie} open={this.state.open} handleClose={this.handleClose} />
            </>
        );
    }
}

export default Card;