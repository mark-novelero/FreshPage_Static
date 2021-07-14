import  { Button } from 'semantic-ui-react';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./userblogcard.css"
import {Link} from 'react-router-dom'



export default class UserBlogsCard extends Component {
 
  

 render() {  
  
  const photoBlogs = this.props.photos.find(photo => photo.id === this.props.blog.photo_ids)

  return(
   <div className = "onDiv">
    <br></br>
    <br></br>
      <Link to= "/usercollectionstory">
        <img src= {photoBlogs.photo_url} onMouseOver= {() => this.props.getPhotoUserCollection(photoBlogs)}  className = "photoblog"></img>
      </Link>
        <h1 className = "blogs">Site blog # {this.props.blog.id}</h1> 
    <br></br>
  </div>
    )
   }  
 }




 