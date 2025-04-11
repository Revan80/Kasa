import React from 'react'
import '../Banner/Banner.scss'

export default function Banner({text,image}) {
  return (
		<div className="banner-container">
			<div className="banner-text-container">
				 <div className="banner-text">{text}</div>
				 <img src={image} alt="bannière"></img>
			</div>
		</div>
	);
}
