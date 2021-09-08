import React, { Component } from 'react'
import "./home.css"
import {Link} from 'react-router-dom'



class Home extends Component {
 
 render() {
  return(
      <div className = "this" onMouseMove = {() => this.props.getUserBlogs()} >
        <div className = "mainIntro"> 
          <h1 className= "logo">Fresh Page</h1> 
        </div>  
        <Link to= "/create">
          <div className = "homeButton">
            {this.props.submitStatus === false ? <button className = "glow-on-hover">Get Started</button> : 
            <button onClick = {() => this.props.changeSubmitStatus()} className = "glow-on-hover">Get Started</button>}
          </div>
        </Link>
      </div>
    )
   }
 }



export default Home