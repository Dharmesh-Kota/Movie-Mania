import React from 'react'
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt='movie' src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} />
        <h1>{props.movie.title}</h1>
    </div>
);