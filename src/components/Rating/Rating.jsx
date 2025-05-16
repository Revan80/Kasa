import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Rating.scss';

export default function Rating({ rating }) {
    const stars = [];
    const totalStars = 5;

    for (let i = 0; i < totalStars; i++) {
        stars.push(
                    <FontAwesomeIcon
                    key={i}
                    className={i < rating ? 'star--active' : 'star--inactive'}
                    icon={faStar} />
                    
                
        );
    }

    return (
        <div className="rating">
            {stars}
        </div>
    );
}