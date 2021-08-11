import  { Button } from 'semantic-ui-react';
import React, { Component } from 'react'
import "./userblogcard.css"
import {Link} from 'react-router-dom'



export default class UserBlogsCard extends Component {
 
 render() {  
  
  const photoBlogs = this.props.photos.find(photo => photo.id === this.props.blog.photo_ids)

  return(
      <Link to= "/usercollectionstory">
        <div className = "onDiv" onMouseOver= {() => this.props.getPhotoUserCollection(photoBlogs)}>
          <div className = "userimg">
            <img  src= {photoBlogs.photo_url}   className = "photoblog"></img>
          </div>
          <h1 className = "blogs">Site blog # {this.props.blog.id}</h1> 
          <br></br>
        </div>
      </Link>
    )
   }  
 }




 