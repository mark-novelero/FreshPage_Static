import React, { Component } from 'react'
import UserBlogCard from './UserBlogsCard'



class UserHome extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
 
render() {
  
return(
   <div>
       <div className = "user_library">
          {this.props.currentUserBlogs.map(blog => <UserBlogCard blog= {blog} photos= {this.props.photos}
           getPhotoUserCollection = {this.props.getPhotoUserCollection}/>)}
       </div>
   </div>
    )
   }
 }

export default UserHome