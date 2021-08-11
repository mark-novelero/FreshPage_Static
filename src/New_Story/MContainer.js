import React from 'react'
import {TextArea, Form, Button, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './mcontainer.css'



export default class MContainer extends React.Component {

state = {
  user_ids: 6, 
  photo_ids: this.props.mainPhoto.id, 
  story: "", 
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
          <div className= "main-photo-div">
              {this.props.submitStatus === false ? 
              <img onClick = {() => this.props.switchPhoto()}  className= "mainPhoto" src= {this.props.mainPhoto.photo_url}></img>
              :
              <img className= "mainPhoto" src= {this.props.mainPhoto.photo_url}></img>}
          </div>
          <Form onSubmit= {() => this.props.addNewBlog(this.state)} >
                {this.props.submitStatus === false ? <TextArea placeholder= "Your story" onChange = {(evt) => this.handleFormState(evt)} 
                style={{ minHeight: 140 }}></TextArea> : null}
            <Button.Group attached='bottom'>
                {this.props.submitStatus === false ? <Button color = "gray">Submit</Button> : null} 
            </Button.Group>
          </Form>
        </Segment>
      </div>
    )
  }
}

