import React from 'react'
import './statsnav.css'
import {SiLeetcode} from 'react-icons/si'
import { useState } from 'react'

const Statsnav = () => {

  const [activeNav, setActiveNav] = useState('#') 
  return (
    <div className='container__statsnav'>
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><SiLeetcode/></a>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><SiLeetcode/></a>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><SiLeetcode/></a>
    </nav>
    </div>
  )
}

export default Statsnav