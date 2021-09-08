import React, { useState, useEffect } from 'react'
import './header.css';
import {Link} from 'react-router-dom'



const FixedHeader = (props) => {

  return(
    <div className = "shadow">
        <nav className = "headerMenu">
          <div className = "nav-div">
            <Link to = '/'><a>Fresh Page</a></Link>
            <Link to = '/create'><a className = "choice" href="#">Create New Story</a></Link>
            <Link to = "/sitecollection"> <a className = "choice" href="#">Site Collection</a></Link>
          </div>
        </nav>
    </div>   
   )
 }

export default FixedHeader