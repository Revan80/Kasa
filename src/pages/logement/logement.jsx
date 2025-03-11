import React from "react";
import { useParams } from "react-router"


export default function Logement(){
    const {logement} = useParams()
    return (
        <div>logement : {logement}</div>
    )   
}
