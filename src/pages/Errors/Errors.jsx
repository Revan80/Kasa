import React from "react";
import '../Errors/Errors.scss'
import { Link } from 'react-router-dom';

export default function Errors() {
    return (
        <div className="error-page">
            <img className="error-page__image" src="/images/404.png" alt="404 error" />
            <p className="error-page__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="error-page__link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

