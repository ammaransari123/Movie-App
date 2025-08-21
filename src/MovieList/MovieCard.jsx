import React from 'react'

import Star from '../assets/glowing-star.png'
import './MovieCard.css'

const MovieCard = ({movie}) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className='movie-card'>
         <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
         alt="movie poster"
         className='movie-poster' />
    
    <div className="movie-details">
        <h3 className="movie-heading">{movie.original_title}</h3>
        <div className="align-centre movie-data-rate">
            <p>{movie.release_date}</p>
            <p>{movie.vote_average.toFixed(1)}<img src={Star} alt="rating icon" className='card-emoji' /></p>
        </div>
        <p className='movie-descrip'>
           {movie.overview.slice(0, 100) + "..."}
        </p>
    </div>
    </a>
  )
}

export default MovieCard
