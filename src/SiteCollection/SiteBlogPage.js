import React from 'react';
import './siteBlogPage.css'
import SiteStories from './SiteStories';



export default class SiteBlogPage extends React.Component{

render() {
    return (
      <div >
        <div className = "image-div">
          <img className= "mainImage" src= {this.props.siteSelectedPhoto.photo_url} ></img>
        </div>
        <div>
          <ol className>{this.props.siteStories.map(story=> <SiteStories story= {story.story}/>)}</ol>  
          <br></br>
        </div>
      </div>
    )
  }
}