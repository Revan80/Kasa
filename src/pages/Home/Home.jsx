import React from "react";
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Cards/Card"
import '../../components/Cards/Card.scss'
import { Link } from "react-router-dom";
import data from "../../logements/logements.json";
import Header from "../../components/Header/Header";

export default function Home() {
	return (
		<div>
            <Header/>
			<Banner />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
			<div className="cards-container">
				{data.map((appart) => (
					<div className="card_logement">
						<Link
							className="link_card_logement"
							key={`${appart.id}`}
							to={`/logement/${appart.id}`}
						>
							<Card
								key={`${appart.id}`}
								cover={appart.cover}
								title={appart.title}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

