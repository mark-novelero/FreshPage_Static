import React from 'react';
import FixedHeader from '../fixed_header/FixedHeader';
import './siteBlogPage.css'
import SiteStories from './SiteStories';



export default class SiteBlogPage extends React.Component{


render() {
    return (
      <div >
        <br></br>
        <br></br>
          <img className= "mainImage" src= {this.props.siteSelectedPhoto.photo_url} ></img>
        <br></br>
        <div >
          <ol className>{this.props.siteStories.map(story=> <SiteStories story= {story.story}/>)}</ol>  
          <br></br>
        </div>
      </div>
    )
  }
}