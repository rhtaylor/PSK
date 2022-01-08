import React, {useState, useEffect} from 'react';
import { slide as Menu } from 'react-burger-menu' 
import { arrayOf, bool, func, shape, string } from 'prop-types'  
import {v1 as uuid} from 'uuid' 
import {
    Link,
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom'; 
  import About from './About';

const PSKMenu = ({setFade, fadeState, display}) =>{
        let {fade} = fadeState 
   
    return(
    fade === 'fade-out' && (
        <Menu className="float-left bg-danger " width={ '24%' }  isOpen={ true }>
        <a id="home" className="menu-item" href="/">Home</a> 


        <a id="kennels" className='menu-item' href='/kennels'>Kennels</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>) 
    )
} 

export default PSKMenu