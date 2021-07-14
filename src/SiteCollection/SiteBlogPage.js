import React from 'react';
import FixedHeader from '../fixed_header/FixedHeader';
import './siteBlogPage.css'
import SiteStories from './SiteStories';



export default class SiteBlogPage extends React.Component{


render() {
    return (
      <div>
        <FixedHeader></FixedHeader>
        <br></br>
        <br></br>
          <img className= "mainImage" src= {this.props.siteSelectedPhoto.photo_url} ></img>
        <br></br>
          <ol>{this.props.siteStories.map(story=> <SiteStories story= {story.story}/>)}</ol>  
      </div>
    )
  }
}