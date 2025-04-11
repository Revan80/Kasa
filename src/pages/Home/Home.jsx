import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner"
import '../../components/Cards/Card.scss'
import Card from "../../components/Cards/Card"
import logements from '../../data/logements.json';

export default function Home() {
	const [data, setData] = useState(logements);

	return (
		<div>
			<Banner 
			text = "Chez vous, partout et ailleurs"
			image={"/images/imgHome.png"}
			/>
			<div className="cards-container">
				{data.map((logement) => (
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
