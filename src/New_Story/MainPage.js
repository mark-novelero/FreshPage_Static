import React from 'react';
import MContainer from './MContainer';
import { Button, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import FixedHeader from '../fixed_header/FixedHeader';



export default class MainPage extends React.Component{

  render() {
    return (
      <div >
        <FixedHeader></FixedHeader> 
        <br></br> 
        <MContainer switchPhoto = {this.props.switchPhoto} mainPhoto = {this.props.mainPhoto} addNewBlog = {this.props.addNewBlog}
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