import React from 'react'
import '../Cards/Card.scss'
import { Link } from 'react-router-dom'

export default function Card({id,title,image}) {
  return (
	<div>
		<Link to={`/logements/${id}`} className="link_card_logement"
			key={id}>
			<article className="card_logement">
				<img src={image} alt={title} />
				<div className="card_label">
					<p>{title}</p>
				</div>
			</article>
		</Link>
		
			
	</div>
	);
}
