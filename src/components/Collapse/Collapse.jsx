import React, { useState } from 'react'
import './Collapse.scss'
import Chevron from '../../assets/images/arrow_back_ios-24px 3.svg'

export default function Collapse({ title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='collapseContainer'>
      <div className='collapse-about'>
        <div className="collapse-about__visible" onClick={() => setIsOpen(!isOpen)}>
          <h2>{title}</h2>
          <img src={Chevron} alt="chevron" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}/>
        </div>
        <div className={`collapse-about__toggle ${isOpen ? 'animated' : ''}`}>
          <p style={{"white-space":"pre"}}>{content}</p>
        </div>
      </div>
    </div>
  )
}
