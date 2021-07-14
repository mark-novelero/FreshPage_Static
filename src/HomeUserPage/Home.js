import React, { Component } from 'react'
import  { Button } from 'semantic-ui-react';
import "./home.css"
import {Link} from 'react-router-dom'

class Home extends Component {
 state = {}
 render() {
  return(
   <div onMouseMove = {() => this.props.getUserBlogs()} className= "homeland">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className= "logo">Fresh Page</h1> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <Link to= "/create">
          <Button.Group attached='bottom'>
            <Button color = "gray">Enter</Button>
          </Button.Group>
        </Link>
  </div>
    )
   }
 }



export default Home