import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me_smiling_really.png'
import HeaderSocials from './HeaderSocials'
import LeetcodeButton from '../leetcode/Leetcodebutton'
import StatsNav from '../leetcode/statsnav/Statsnav'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="container leetcode__button">
          {/* <LeetcodeButton/> */}
          {/* <StatsNav/> */}
        </div>
        <h5>Hello I'm</h5>
        <h1>Parth Solanki</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header