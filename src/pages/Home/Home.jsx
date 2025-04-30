import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner"
import '../../components/Cards/Card.scss'
import Card from "../../components/Cards/Card"

export default function Home() {
	const [dataAll, setDataAll] = useState([]);
	useEffect(() => {
        fetch("/data/logements.json")
        .then(reponse => reponse.json())
        .then(data => {
            setDataAll(data);
            }
        )

         },[]
    )
	return (
		<div>
			<Banner 
			text = "Chez vous, partout et ailleurs"
			image={"/images/imgHome.png"}
			/>
			<div className="cards-container">
				{dataAll.map((logement) => (
					<div key={logement.id} className="card_logement">
						<Card
							id={logement.id}
							title={logement.title}
							image={logement.cover}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
