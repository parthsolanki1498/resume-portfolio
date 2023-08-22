import React, {useState} from 'react';
import {SiLeetcode} from 'react-icons/si'
import Leetcode from './Leetcode'
// import './leetcodebutton.css'

const LeetcodeButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="leetcode-container">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <SiLeetcode className='leetcode-button'/>
            </div>
            {isHovered && <Leetcode />}
        </div>
    );
};

export default LeetcodeButton;