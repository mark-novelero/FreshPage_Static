import React from 'react'
import { Grid, Image, TextArea, Form, Button, Segment, Header, Icon, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './mcontainer.css'

export default class MContainer extends React.Component {

state = {
  user_ids: 11, 
  photo_ids: this.props.mainPhoto, 
  story: ""
}

handleFormState = (evt) => {

  this.setState({
    photo_ids: this.props.mainPhoto.id,
    story: evt.target.value
  })
}

 render(){
   return ( 
  
      <div id= "cf2" onMouseMove = {() => this.props.getUserBlogs()}>
        <Segment>
            {this.props.submitStatus === true ? <h2 className = 'submit'>Published</h2> : null}
            <br></br>
            {this.props.submitStatus === false ? <img onClick = {() => this.props.switchPhoto()}  className= "mainPhoto" src= {this.props.mainPhoto.photo_url}></img>:
            <img className= "mainPhoto" src= {this.props.mainPhoto.photo_url}></img>}
            <br></br>
          <Form onSubmit= {() => this.props.addNewBlog(this.state)} >
            {this.props.submitStatus === false ? <TextArea placeholder= "Your story" onChange = {(evt) => this.handleFormState(evt)} 
            style={{ minHeight: 200 }}></TextArea> : null}
            <Button.Group attached='bottom'>
            {this.props.submitStatus === false ? <Button color = "gray">Submit</Button> : null} 
            </Button.Group>
          </Form>
            <br></br>
         </Segment>
      </div>
    )
  }
}

