import React from 'react'
import './header.css';
import {Link} from 'react-router-dom'


const FixedHeader = (props) => {

  return(
    <header className = "header">
        <nav className = "headerMenu">
            <Link to = '/create'><a href="#">Create New Story</a></Link>
            <Link to = "/userhome"><a href="#">User Collection</a></Link>
            <Link to = "/sitecollection"> <a href="#">Site Collection</a></Link>
        </nav>
    </header>
   )
 }

export default FixedHeader