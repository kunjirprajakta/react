import React, { Component }from 'react';
import { Grid,Cell} from 'react-mdl';
 class LandingPage  extends Component{
  render(){
  return (
    <div style={{with: '100%',margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
      <img src="https://www.w3schools.com/howto/img_avatar2.png" className="avatar-img" alt="avatar" />
      <div className="banner-text"><h1>full stack web developer</h1>
      <hr/>
      <p>hTML| bootstrap|C|C++</p>
      <div className="social-links">
        {/* linkedin */}
        <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
          <i className="fa fa-linkedin-square" aria-hidden="true"/>
        </a>
          {/* github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
          <i className="fa fa-github-square" aria-hidden="true"/>
        </a>
      
          {/* youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
          <i className="fa fa-youtube-square" aria-hidden="true"/>
        </a>
      </div>
      </div>
      </Cell>
      </Grid>
    </div>
  )
  }
}
export default LandingPage;