import React, {useState } from 'react'
import './Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default function Collapse({ title,children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='collapseContainer'>
      <div className='collapse-about'>
        <div className="collapse-about__visible" onClick={() => setIsOpen(!isOpen)}>
          <h2>{title}</h2>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className="chevron-icon" 
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          />
        </div>
        <div className={`collapse-about__toggle ${isOpen ? 'animated' : ''}`}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  )
}
