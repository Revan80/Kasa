import React, { useState } from 'react';
import './test.css';

function ChangeColor() {
    const [colorChange, setColorChange] = useState("test");

    const handleClick = () => {
        setColorChange(colorChange === "test" ? "testClique" : "test");
    };

    return (
        <button className={colorChange} onClick={handleClick}>
            Clique pour changer de couleur
        </button>
    );
}

export default ChangeColor;