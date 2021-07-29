import React from 'react';
import { Container } from 'semantic-ui-react';
import FixedHeader from '../fixed_header/FixedHeader';
import MContainer from './MContainer';
import PublishedBlog from './PublishedBlog';
import { Button, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


export default class MainPage extends React.Component{


  render() {
    return (
      <div >
        <br></br> 
        <MContainer switchPhoto = {this.props.switchPhoto} 
        mainPhoto = {this.props.mainPhoto} addNewBlog = {this.props.addNewBlog}
        submitStatus = {this.props.submitStatus} changeSubmitStatus = {this.props.changeSubmitStatus}
        getUserBlogs = {this.props.getUserBlogs}>
        </MContainer> 
         <Segment textAlign='center'>
         {this.props.submitStatus === true ? <Link to= '/publishedblog'><Button onClick = {() => this.props.changeSubmitStatus()} color ='gray'>See your story</Button></Link> : null}
         </Segment>
      </div>
    )
  }
}