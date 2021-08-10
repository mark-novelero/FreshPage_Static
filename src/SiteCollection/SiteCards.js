import React, { Component } from 'react'
import './siteCollection.css'
import {Link} from 'react-router-dom'



export default class SiteCards extends Component {

    render(){

        const photoid = `p${this.props.photos.id}`

        return (
        <div className="site_photos">
            <br></br>
            <Link to = "/sitestory">
                <img onMouseOver = {() => this.props.siteCollectionPhoto(this.props.photos)}  src= {this.props.photos.photo_url} className= {photoid} alt="..." />
            </Link>
        </div>
        )
    }  
}