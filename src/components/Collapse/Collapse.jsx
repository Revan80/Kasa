import React, { useState } from 'react'
import './Collapse.scss'
import Chevron from '../../assets/images/arrow_back_ios-24px 3.svg'

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  return (
    <div className='collapse'>
        <h2 className="collapse_head" onClick={() => setIsOpen(!isOpen)}>{title} <img src={Chevron} alt="chevron"></img></h2>
         <p className='collapse_body'>{content}</p>
    </div>
  )
}
