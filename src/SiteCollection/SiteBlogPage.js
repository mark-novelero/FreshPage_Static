import React from 'react';
import FixedHeader from '../fixed_header/FixedHeader';
import './siteBlogPage.css'
import SiteStories from './SiteStories';



export default class SiteBlogPage extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0)
  }

render() {
    return (
      <div >
        <FixedHeader></FixedHeader>
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