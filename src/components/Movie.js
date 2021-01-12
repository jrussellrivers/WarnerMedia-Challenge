import React from 'react';
import Genre from './Genre'
import baseImage from '../No_image_available_400_x_600.svg.png'

export default function Movie({movie}){
    let directors
    if (movie.directors){
        if (movie.directors.length > 1){
            directors = movie.directors.join(", ")
        } else {
            directors = movie.directors[0]
        }
    }

    let stars
    if (movie.stars){
        stars = movie.stars.slice(0,5).join(", ")
    }

    let imgSource
    movie.poster ? imgSource = movie.poster : imgSource = baseImage

    return (
        <div className="container">
            <div className="movie">       
                <img src={imgSource} alt="movie poster" className="movie-img"/>
                <div className="text-movie-cont">
                    <div className="mr-grid">
                        <div className="col1">
                            <h1>{movie.title}</h1>
                            <ul className="movie-gen">
                                <li>{movie.rated}  /</li>
                                <li>{movie.runtime} min  /</li>
                                <li>{movie.genres.length > 0 ? movie.genres.map((genre, idx) => <Genre key={idx} genre={genre}/>) : null}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mr-grid summary-row">
                        <h5>SUMMARY</h5>
                    </div>
                    <div className="mr-grid">
                        <div className="col1">
                            <p className="movie-description">{movie.description}</p>
                        </div>
                    </div>
                    <div className="mr-grid actors-row">
                        <div className="col1">
                            <p className="movie-actors">Directed by {directors}</p>
                        </div>
                    </div>
                    <div className="mr-grid actors-row">
                        <div className="col1">
                            <p className="movie-actors">Starring {stars}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}