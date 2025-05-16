import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Caroussel from "../../components/Caroussel/caroussel";
import Collapse from "../../components/Collapse/Collapse";
import './logement.scss'
import Rating from "../../components/Rating/Rating"
import { Navigate } from "react-router-dom";


export default function Logement(){
    const {logementId} = useParams()
    const [logement,setLogement] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(() => {

        setIsLoading(true);
        fetch("/data/logements.json")
        .then(reponse => reponse.json())
        .then(data => {
            const logementData = data.find(element => element.id === logementId)
            setLogement(logementData);
            setIsLoading(false);

            }
        )
        .catch(error => {
            console.error("Erreur lors du chargement des données:", error);
            setIsLoading(false);
        });
        
    }, [logementId])


    return (
        <div className="logement">

            {isLoading && <p>Chargement en cours...</p>}
            {
                logement && 
            <div>
                <Caroussel pictures={logement.pictures}></Caroussel>

                <div className="logement-header">
                    <div className="logement-header-left">
                        <div className="logement-info">
                            <h1 className="logement-title">{logement.title}</h1>
                            <p className="logement-location">{logement.location}</p>
                        </div>
                        <div className="tags">
                            <ul>
                                {logement.tags.map((tag,index) => {
                                    return <li key={index}>{tag}</li>
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="logement-header-right">
                        <div className="host-profile">
                            <div className="host-name">
                                {logement.host.name}
                            </div>
                            <div className="host-picture">
                                <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} />
                            </div>
                        </div>
                        <Rating rating={logement.rating}/>
                    </div>
                </div>

                <div className="logement-details">
                    <div className="logement-detail-item">
                        <Collapse 
                            title="Description"
                        >
                            <p>{logement.description}</p>
                        </Collapse>
                    </div>

                    <div className="logement-detail-item">
                        <Collapse
                            title="Equipements"
                        >
                            <ul className="equipment-list">
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </Collapse>
                    </div>
                </div>
            </div>
            }
            
            {!isLoading && !logement && <Navigate to="/Errors" replace={true} />}
            
        </div>
    )   
}

