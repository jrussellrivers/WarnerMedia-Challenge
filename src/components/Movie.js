import React from 'react';
import Genre from './Genre'
import Modal from 'react-modal'
import baseImage from '../No_image_available_400_x_600.svg.png'

// Modal.setAppElement('#container')

export default function Movie({movie}){

    const [modalIsOpen,setIsOpen] = React.useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

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
        <div id='container' className="container">
            <div className="movie">       
                <img src={imgSource} alt="movie poster" className="movie-img"/>
                <div className="text-movie-cont">
                    <h1>{movie.title}</h1>
                    <div className="movie-gen">
                        <span>{movie.rated} /&nbsp;</span>
                        <span>{movie.runtime} min /</span>
                        <span>{movie.genres.length > 0 ? movie.genres.slice(0,3).map((genre, idx) => <Genre key={idx} genre={genre}/>) : null}</span>
                    </div>
                    <h5 onClick={openModal}>CLICK FOR SUMMARY</h5>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        className="modal"
                        ariaHideApp={false}
                    >
                        <h3>MOVIE DETAILS</h3>
                        <p className="movie-description">{movie.description}</p>
                        <p className="movie-actors">Directed by {directors}</p>
                        <p className="movie-actors">Starring {stars}</p>
                    </Modal>
                </div>
            </div>
        </div>
    )
}