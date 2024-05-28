



// import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Blog from '../components/blog/Blog';
// import BlogDetails from '../components/blogDetails/BlogDetails';
// import About from '../components/about/About';
// import Portfolio from '../components/portfolio/Portfolio';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="../components/home/Home.jsx" exact component={Home} />
//         <Route path="../components/blog/Blog.jsx" exact component={Blog} />
//         <Route path="../components/blogDetails/BlogDetails.jsx:id" component={BlogDetails} />
//         <Route path="../components/about/About.jsx" component={About} />
//         <Route path="../components/portfolio/Portfolio.jsx" component={Portfolio} />
//       </Switch>
//     </Router>
//   );
// }

// export default App



// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import BlogDetails from './components/blogDetails/BlogDetails'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <div>
      
    <Router>
      <Navbar />
      <Switch>
        <Route path="../components/home/Home.jsx" exact component={Home} />
        <Route path="../components/blog/Blog.jsx" exact component={Blog} />
        <Route path="../components/blogDetails/BlogDetails.jsx:id" component={BlogDetails} />
        <Route path="../components/about/About.jsx" component={About} />
        <Route path="../components/portfolio/Portfolio.jsx" component={Portfolio} />
      </Switch>
    </Router>
      
      
      
      <About/>
      <Blog/>
      <Home/>
      <Portfolio/>
    </div>
  )
}

export default App