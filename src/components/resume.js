import React, { Component }from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experiences from './experiences';
import Skills from './skills';


 class Resume  extends Component{
  render(){
  return (    <div><Grid>
    <Cell col={4}><div style={{textAlign:'center'}} > 
    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" style={{height:'250px'}} />


    </div>
    <h2 style={{paddingTop:'2em'}}>jh,hv,h</h2>
    <h4 style={{color:'grey'}}>jhdvhs</h4>
    <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
    <p>jsdvmhvsa,d ,mjnhsgbd  jmhwgde  mJDBNV
      AWNHSDE MJWGHD ,KWJHDOHQKHm dfmhjam,bbjwbv
    </p>
    <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
<h5>Address</h5>
<p>kjchldch mhnsdgkus ,kjsd </p> 
<h5>Phone</h5>   
<p>123 456 4567 8767</p>   
<h5>Email</h5> 
<p>abc@gmail.com</p>
<h5>Web</h5> 
<p>myweb.com</p>
<hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
 </Cell>
   <Cell className="resume-right-col" col={8}><h1>Education</h1>
   <Education 
   startYear ={2016}
   endYear={2020}
   schoolName="H.A.S"
   schoolDescription="sndbf"
   />
   <Education
   startYear ={2016}
   endYear={2020}
   schoolName="G.H.Raisoni"
   schoolDescription="sndbf"/>
   <hr style={{boarder:'3px solid #e22947'}}/>
   <h1>Experiences</h1>
   <Experiences startYear ={2016}
   endYear={2020}
   schoolName="G.H.Raisoni"
   schoolDescription="sndbf"/>
   <hr style={{boarder:'3px solid #e22947'}}/>
   <Skills skills="js"
   progress={50} />
   </Cell>
</Grid>
</div>
  )
}
}

export default Resume;
