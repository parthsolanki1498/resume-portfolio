import React from 'react';
import './leetcode.css';
import  UserStats  from './UserStats'; // Import your GraphQL Query component

const Leetcode = () => {
    return (
        <div className='leetcode__stats'>
          {/* Your existing content */}
          {/* <h1>Welcome to my App!</h1> */}
          {/* Render the UserStats component inside the root element */}
          {/* For example, you can pass the username as a prop */}
          {/* <UserStats username="iZnoGouDAf" /> */}
          <img src="https://leetcard.jacoblin.cool/iZnoGouDAf?theme=dark"></img>
        </div>
    ); 
};
export default Leetcode;