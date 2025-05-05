import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Caroussel from "../../components/Caroussel/caroussel";
import Collapse from "../../components/Collapse/Collapse";
import './logement.scss'


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
                <div className="test">
                    <Collapse
                    title="Description"
                    content={logement.description}
                    />
                    <Collapse
                    title="Equipements"
                    content={
                        <ul className="equipment-list">
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                    />
            </div>
                 </div>
            }
            
            {!isLoading && !logement && <p>Le logement demandé n'existe pas.</p>}
        </div>
    )   
}

