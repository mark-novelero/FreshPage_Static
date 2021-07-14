import React, { Component } from 'react';
import "./App.css"
import MainPage from './New_Story/MainPage';
import "./App.css"
import SiteCollection from './SiteCollection/SiteCollection';
import Home from './HomeUserPage/Home';
import {Route, Switch, Link} from 'react-router-dom';
import UserHome from './HomeUserPage/UserHome';
import PublishedBlog from './New_Story/PublishedBlog';
import SiteBlogPage from './SiteCollection/SiteBlogPage';
import CollectionCard from './HomeUserPage/CollectionCard';


export default class App extends React.Component{

  state = {
    allUsers: [],
    blogs: [],
    photos: [], 
    currentUser: 11,
    currentUserBlogs: [], 
    currentUserPhotos:[],
    newestStory:"",
    selectPhoto: [],   
    siteSelectedPhoto: [], 
    siteStories: [], 
    submitStatus: false, 
    photoUserCollection: [], 
    storyUserCollection: "",
  }

componentDidMount(){

    let randomIndex = Math.floor(Math.random() * 34)

      fetch('http://localhost:9292/photos')
      .then(res => res.json())
      .then(photographs => this.setState(
          {photos: photographs, 
           selectPhoto: photographs[randomIndex]
        }
      )
    )
      fetch('http://localhost:9292/blogs')
      .then(res => res.json())
      .then(userBlogs => this.setState(
        {blogs: userBlogs}
      ))

      fetch('http://localhost:9292/users')
      .then(res => res.json())
      .then(users => this.setState(
        {allUsers: users}
      ))

  } 

getUserBlogs= ()=> {
    
    const userCollection = this.state.blogs.filter(siteBlogs => siteBlogs.user_ids === this.state.currentUser)
    
    this.setState({
      currentUserBlogs:[...userCollection]
    })
  }

  
getPhotoUserCollection=(photoObj)=>{

  const story= this.state.currentUserBlogs.find(blog => blog.photo_ids === photoObj.id)
  const photoStory = this.state.photos.find(photo => photo.id===photoObj.id)
  

  this.setState({
    photoUserCollection: photoStory,
    storyUserCollection: story.story
  })
}

siteCollectionPhoto = (obj) =>{  
  const siteCollectionStories = this.state.blogs.filter(blogo => blogo.photo_ids === obj.id)
  const siteCollectionPhoto = this.state.photos.find(photo => photo.id===obj.id)
  
  this.setState({
    siteSelectedPhoto: siteCollectionPhoto, 
    siteStories: [...siteCollectionStories],
  })
}

addNewBlog = (blogObj) =>{
  this.setState({
    newestStory: blogObj.story,
    submitStatus: !this.state.submitStatus
  })

    let newBlog = {
      user_ids: blogObj.user_ids, 
      photo_ids: blogObj.photo_ids, 
      story: blogObj.story 
    }

    fetch('http://localhost:9292/blogs', {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
   },
      body: JSON.stringify(newBlog),
   })
    .then (res => res.json())
    .then (newBlogo => {
    this.setState({
      blogs: [...this.state.blogs, newBlogo]
    })
  })
}

changeSubmitStatus = () => {
  this.setState({
    submitStatus: !this.state.submitStatus
  })
}


switchPhoto= () => {
  let randomIndex2 = Math.floor(Math.random() * 30)
  this.setState({
    selectPhoto: this.state.photos[randomIndex2]
  })
}

  render() {

    return (
      <div>

        <Switch>

        <Route path = "/userhome">
          <UserHome  currentUserBlogs = {this.state.currentUserBlogs} photos= {this.state.photos}
          getPhotoUserCollection = {this.getPhotoUserCollection}/>
        </Route>

        <Route path = "/usercollectionstory">
          <CollectionCard photo = {this.state.photoUserCollection} story = {this.state.storyUserCollection}
          switchPhoto = {this.switchPhoto}></CollectionCard>
        </Route>

        <Route path = "/sitestory">
          <SiteBlogPage siteSelectedPhoto = {this.state.siteSelectedPhoto} 
                        siteStories = {this.state.siteStories}
          ></SiteBlogPage>
        </Route>

        <Route path = "/create">
        <MainPage mainPhoto = {this.state.selectPhoto} addNewBlog= {this.addNewBlog} 
                  switchPhoto = {this.switchPhoto} submitStatus = {this.state.submitStatus}
                  changeSubmitStatus = {this.changeSubmitStatus} getUserBlogs = {this.getUserBlogs}
                  />
        </Route>

        <Route path = "/publishedblog">
          <PublishedBlog mainPhoto = {this.state.selectPhoto} newestStory= {this.state.newestStory} 
          switchPhoto = {this.switchPhoto}/>
        </Route>

        <Route path = "/sitecollection">
          <SiteCollection photos = {this.state.photos} siteCollectionPhoto = {this.siteCollectionPhoto}
                          siteSelectedPhoto = {this.state.siteSelectedPhoto} siteStories= {this.state.siteStories}/>
        </Route>

        <Route path= "/">
          <Home getUserBlogs = {this.getUserBlogs}/>
        </Route>

        </Switch>
      </div>
    )
  }
}

