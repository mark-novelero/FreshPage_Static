import React from 'react';
import { Segment } from 'semantic-ui-react';
import './siteBlogPage.css'



export default class SiteStories extends React.Component{


render() {
    return (
      <div>    
        <Segment>
          <li className = "blogfont">{this.props.story}</li>
          <br></br>
        </Segment>
      </div>
    )
  }
}