import React, { Component }from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link } from 'react-router-dom';
 class App  extends Component{
  render(){
  return (<div>
<div style={{height: '900px', position: 'relative'}}>
    <Layout fixedHeader>
  <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}}to="/">MyPortfolio</Link> }scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Project</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none',color:'black'}}to="/">MyPortfolio</Link> }>
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/projects">Project</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main>
        </Main>
        </Content>
    </Layout>
</div>

</div>

  );
}
}

export default App;
