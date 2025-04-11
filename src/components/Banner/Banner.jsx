import React from 'react'
import '../Banner/Banner.scss'

export default function Banner({text,image}) {
  return (
    <div className="banner-container" style={{backgroundImage: `url(${image})`}}>
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}
