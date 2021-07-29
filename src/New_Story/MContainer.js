import React from 'react'
import { Grid, Image, TextArea, Form, Button, Segment, Header, Icon, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './mcontainer.css'

export default class MContainer extends React.Component {

state = {
  user_ids: 5, 
  photo_ids: this.props.mainPhoto.id, 
  story: "", 
  title: ""
}

handleFormState = (evt) => {
  this.setState({
    photo_ids: this.props.mainPhoto.id,
    story: evt.target.value, 
  })
}

handleTitleChange = (evt) => {
  this.setState ({
    title: evt.target.value
  })
}

 render(){
   return ( 
  
      <div id= "cf2" onMouseMove = {() => this.props.getUserBlogs()}>
        <Segment>
            {this.props.submitStatus === true ? <h2 className = 'submit'>Published</h2> : null}
            <br></br>
            <div className= "mainPhoto">
            {this.props.submitStatus === false ? <img onClick = {() => this.props.switchPhoto()}  className= "mainPhoto" src= {this.props.mainPhoto.photo_url}></img>:
            <img className= "mainPhoto" src= {this.props.mainPhoto.photo_url}></img>}
            </div>
            <br></br>
          <Form onSubmit= {() => this.props.addNewBlog(this.state)} >
          {this.props.submitStatus === false ? <TextArea placeholder= "Title" onChange = {(evt) => this.handleTitleChange(evt)} 
            style={{ minHeight: 15 }}></TextArea> : null}
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

