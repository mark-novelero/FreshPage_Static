import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FixedHeader from '../fixed_header/FixedHeader'
import UserBlogCard from './UserBlogsCard'
import InBetween from './InBetween'


class UserHome extends Component {
 state = {}
 render() {
  
  
return(
   <div>
       <FixedHeader></FixedHeader>
       {this.props.currentUserBlogs.map(blog => <UserBlogCard blog= {blog} photos= {this.props.photos}
       getPhotoUserCollection = {this.props.getPhotoUserCollection}/>)}
   </div>
    )
   }
 }

export default UserHome