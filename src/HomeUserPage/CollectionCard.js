import React from 'react';
import { Container, Button, Segment } from 'semantic-ui-react';
import "./collectionCard.css";
import {Link} from 'react-router-dom'



export default class CollectionCard extends React.Component{

render() {
    return (
      <div>
        <div>
        <br></br>
          <Container>
            <img className= "mainPhoto" src= {this.props.photo.photo_url}></img>
            <br></br>
            <div className = "blogText">
                <p className = "blogfont">{this.props.story}</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Link to= "/create">
                <Button.Group attached='bottom'>    
                  <Button onClick = {() => this.props.switchPhoto()}  color = "gray">Create New Story</Button>
                </Button.Group>
            </Link>
            <br></br>
            <br></br>
          </Container>
        </div>  
      </div>
    )
  }
}