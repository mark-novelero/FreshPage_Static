import React, { useState, useEffect } from 'react'
import './header.css';
import {Link} from 'react-router-dom'
import { Segment, Header, Divider } from 'semantic-ui-react';

import { FaHandPeace } from "react-icons/fa";


const FixedHeader = (props) => {

  

  return(
    <div className = "shadow">
      <header className = "header" >
        <nav className = "headerMenu">
            <Link to = '/'><a onClick = {() => props.changeHome()}>Fresh Page</a></Link>
            <Link to = '/create'><a className = "choice" href="#">Create New Story</a></Link>
            <Link to = "/userhome"><a className = "choice" href="#">User Collection</a></Link>
            <Link to = "/sitecollection"> <a className = "choice" href="#">Site Collection</a></Link>
        </nav>
      </header>
       </div>
   
   )
 }

export default FixedHeader