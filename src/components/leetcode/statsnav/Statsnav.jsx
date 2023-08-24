import React from 'react'
import './statsnav.css'
import {SiLeetcode} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import { useState } from 'react'
import Leetcode from '../Leetcode'
import Codeforces from '../Codeforces'
import Geeksforgeeks from '../Geeksforgeeks'

const Statsnav = () => {

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };
  
  return (
    <div className='container__statsnav'>
    <nav>
      <a href="#"onMouseEnter={() => handleIconHover('leetcode')} onMouseLeave={() => handleIconHover(null)} className={hoveredIcon === 'leetcode' ? 'active' : ''}><SiLeetcode/></a>
      <a href="#"onMouseEnter={() => handleIconHover('codeforces')} onMouseLeave={() => handleIconHover(null)} className={hoveredIcon === 'codeforces' ? 'active' : ''}><SiCodeforces/></a>
      <a href="#"onMouseEnter={() => handleIconHover('geeksforgeeks')} onMouseLeave={() => handleIconHover(null)} className={hoveredIcon === 'geeksforgeeks' ? 'active' : ''}><SiGeeksforgeeks/></a>
    </nav>
    <div className={`expanded-component ${hoveredIcon ? 'visible' : ''}`}>
    {hoveredIcon === 'leetcode' && <Leetcode />}
    {hoveredIcon === 'codeforces' && <Codeforces />}
    {hoveredIcon === 'geeksforgeeks' && <Geeksforgeeks />}
    </div>
    </div>
  )
}

export default Statsnav