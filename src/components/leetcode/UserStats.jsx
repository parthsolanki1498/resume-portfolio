import React, { useState, useEffect } from 'react'
import {gql, useQuery} from '@apollo/client'

// const GET_USER_STATS = gql`
//   query userProblemsSolved($username: String!) {
//     matchedUser(username: $username) {
//       username
//       submitStats: submitStatsGlobal {
//         acSubmissionNum {
//           difficulty
//           count
//           submissions
//         }
//       }
//     }
//   }
// `;

// const UserStats = ({ username }) => {
//   const { data, loading, error } = useQuery(GET_USER_STATS, {
//     variables: { username },
//   });
//   console.log(data);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const { matchedUser } = data;

//   return (
//     <div>
//       <h2>Username: {matchedUser.username}</h2>
//       {/* <h3>Submission Stats</h3>
//       <ul>
//         {matchedUser.submitStats.acSubmissionNum.map((stats) => (
//           <li key={stats.difficulty}>
//             Difficulty: {stats.difficulty}, Count: {stats.count}, Submissions: {stats.submissions}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

function UserStats() {
  const[data, setData] = useState(null);

  useEffect(() => {
    fetch('https://leetcode.com/graphql?query={%20matchedUser(username:%20%22iZnoGouDAf%22)%20{%20username%20submitStats:%20submitStatsGlobal%20{%20acSubmissionNum%20{%20difficulty%20count%20submissions%20}%20}%20}%20}')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
  }, []);

  return(
    <div>
      {data ? <pre>{JSON.stringify(data,null,2)}</pre> : 'Loading...'}
    </div>
  );
}

export default UserStats;