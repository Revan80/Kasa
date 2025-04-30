import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Caroussel from "../../components/Caroussel/caroussel";


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

        

    function renderContent() {
        if (isLoading) {
            return <p>Chargement en cours...</p>;
        }
        
        if (logement) {
            return <Caroussel pictures={logement.pictures}></Caroussel>;
        }
        
        return <p>Le logement demandé n'existe pas.</p>;
    }
    
    return (
        <div className="logement">
            {renderContent()}
        </div>
    )   
}

