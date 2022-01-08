import React, { Component } from 'react'  
import {v1 as uuid} from 'uuid'
import { Link} from 'react-router-dom'; 
import '../css/fade.css'

const PSKNavBar = ({fadeState}) =>{
    
    return(
        <div key={fadeState} className={`d-flex flex-column ml-2 ${fadeState.fade === 'fade-out' ? 'fade-in' : 'fade-out'}`}>
           
            <Link to="/about">About</Link>
            <Link to='/Kennels'>Kennels</Link>
            <Link to='/Contact'>Contact</Link> 
            <Link to='/pics'>Pics</Link>
            <Link to='Buy'>Purchase</Link>
           
        </div>
    )

}

export default PSKNavBar