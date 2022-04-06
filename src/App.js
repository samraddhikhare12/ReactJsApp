import React from 'react'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import SignUp from './components/pages/SignUp';
import WhoWeAre from './components/pages/WhoWeAre';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';




function App() {
  return (
      <>
        <Router>
         <Navbar/>
         <Switch>
         <Route path='/' exact component={Home} />
            <Route path='/gallery' component={Gallery}/>
         
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/whoweare' component={WhoWeAre}/> 
          <Route path='/contact' component={Contact}/> 
          </Switch>
          <Footer/>

         </Router>
      </>
  );
}

    export default App;
