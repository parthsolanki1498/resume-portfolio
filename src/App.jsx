import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonal from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Leetcode from './components/leetcode/Leetcode'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client'

// const client = new ApolloClient({
//   uri: 'https://leetcode.com/graphql',
//   cache: new InMemoryCache(),
//   fetchOptions: {
//     mode: 'no-cors'
//   },
// });

// client
//   .query({
//     query: gql`
//     query getGen3 {
//       matchedUser(username: "iZnoGouDAf") {
//           username
//           submitStats: submitStatsGlobal {
//               acSubmissionNum {
//                   difficulty
//                   count
//                   submissions
//               }
//           }
//       }
//   }`,
//   })
//   .then((result) => console.log(result));


// const client = new ApolloClient({
//   uri: 'https://leetcode.com/graphql', // Replace with your actual GraphQL endpoint
//   cache: new InMemoryCache(),
// });

// const httpLink = new HttpLink({
//   uri: 'https://leetcode.com/graphql', // Replace with your GraphQL endpoint
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

const App = () => {
  return (
    <>
        {/* <ApolloProvider client={client}>
          <Leetcode />
        </ApolloProvider> */}
        <Leetcode />
        <Header />
        <Nav/>
        <About/>
        <Experience />
        <Services />
        <Portfolio />
        <Testimonal />
        <Contact />
        <Footer />
        
    </>
  )
}

export default App