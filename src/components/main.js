import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import Aboutme from './aboutme';

 const Main =()=>(
    <Switch>
     <Route  exact path="/" component={LandingPage} />

        <Route   path='/aboutme' component={Aboutme} />
        <Route  path='/contact' component={Contact} />
        <Route  path='/projects' component={Projects} />
        <Route  path='/resume' component={Resume} />


    </Switch> 
 )
 export default Main; 