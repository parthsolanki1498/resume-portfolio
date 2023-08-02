import React from 'react';
import  UserStats  from './UserStats'; // Import your GraphQL Query component

const Leetcode = () => {
    return (
        <div>
          {/* Your existing content */}
          <h1>Welcome to my App!</h1>
          {/* Render the UserStats component inside the root element */}
          {/* For example, you can pass the username as a prop */}
          <UserStats username="iZnoGouDAf" />
        </div>
    ); 
};
export default Leetcode;