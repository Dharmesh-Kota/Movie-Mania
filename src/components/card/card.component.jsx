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
        return (
            <>
                <div className='card-container' onClick={this.handleOpen}>
                    <img alt='movie' src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`} />
                    <h1>{this.props.movie.title}</h1>
                </div>
                <InfoModal movie={this.props.movie} open={this.state.open} handleClose={this.handleClose} />
            </>
        );
    }
}

export default Card;