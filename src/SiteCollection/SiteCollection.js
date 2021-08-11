import React from 'react'
import SiteCards from './SiteCards'
import './siteCollection.css'



export default class SiteCollection extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){ 
       
        const sitePhotos = this.props.photos.map(photos => {return <SiteCards  siteCollectionPhoto = {this.props.siteCollectionPhoto} photos = {photos}/>})
        
        return(
            <div className = "primary">
                <br></br>
                <br></br>
                <div className="site_photos">
                    {sitePhotos}
                </div>
            </div>
        )
    }
}