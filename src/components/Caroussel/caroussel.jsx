import React, { useState } from 'react';
import './caroussel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Caroussel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPictures = pictures.length;

    const nextSlide = () => {
        if(currentIndex === totalPictures - 1){
            setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex + 1)
        }
    };

    const prevSlide = () => {
        if(currentIndex){
            setCurrentIndex(currentIndex - 1)
        }else{
            setCurrentIndex(totalPictures - 1)
        }
    };

    

    return (
        <div className="caroussel">
            <img 
                src={pictures[currentIndex]}
                alt={`Logement${currentIndex + 1}`} 
                className="caroussel__image"
            />
     
            <button 
                className="caroussel__btn caroussel__btn--prev" 
                onClick={prevSlide}
                aria-label="Image précedente"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
            </button>
            
            <button 
                className="caroussel__btn caroussel__btn--next" 
                onClick={nextSlide}
                aria-label="Image suivante"
            >
                <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
            </button>

            
            <div className="caroussel__counter">
                {currentIndex + 1}/{totalPictures}
            </div>
        </div>
    );
}

export default Caroussel;

