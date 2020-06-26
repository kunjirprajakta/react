import React, { Component }from 'react';
import { Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
 class Contact extends Component{
  render(){
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
        <h1>fdhm</h1>
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" style={{height:'250px'}} />
        <p style={{width:'75%x',margin:'auto',paddingTop:'1em'}}>
        RandomText is a tool designers and developers can use to quickly grab dummy 
        text in either Lorem Ipsum or Gibberish format.
        </p>
        </Cell>
        <Cell col={6}><h1>Contact Me</h1> <hr/>
        <div className="contact-list">
        <List>
  <ListItem>
    <ListItemContent  style={{fontSize:'25px', fontFamily:'Anton' }}>
      <i className="fa fa-phone-square" arin-hidden="true"/>
56236767667878      </ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent  style={{fontSize:'25px', fontFamily:'Anton' }}>
      <i className="fa fa-envelope" arin-hidden="true"/>
     abc@gmail.com </ListItemContent>  </ListItem>
  
</List>
</div>
</Cell>
        
</Grid>
      </div>

  )
}
}

export default Contact;
