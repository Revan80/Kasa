import React from "react";
import logements from "../../data/logements.json"
import { useParams } from "react-router"


export default function Logement(){
    const {logement} = useParams()
    const logementData = logements.find(element => element.id === logement)
    

    return (
        <div>logement : {logement}</div>
        
    )   
}
