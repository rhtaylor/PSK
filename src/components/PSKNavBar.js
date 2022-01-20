import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import {v1 as uuid} from 'uuid'
import { Link} from 'react-router-dom'; 
import '../css/fade.css'
import { func, object } from 'prop-types';




const PSKNavBar = ({pathname, fadeState}) => { 
    
    return( 
    
        <div data-testid="navbar" id="navbar" key={fadeState.fade} className={`d-flex flex-column pb-2 pl-2 ml-2 ${pathname} ${pathname === '/about' ? 'jack' :'psk' }  ${fadeState.fade === 'fade-out' ? 'fade-in' : 'fade-out'}`}>
            <Link  key={uuid()} to="/about">About</Link>
            <Link  key={uuid()} to='/Kennels'>Kennels</Link>
            <Link  key={uuid()} to='/Contact'>Contact</Link> 
            <Link  key={uuid()} to='/pics'>Pics</Link>
            <Link  key={uuid()} to='Buy'>Purchase</Link>
        </div>
    )}

PSKNavBar.defaultProps ={
    fadeState: 'fade-in' 
    }
PSKNavBar.propTypes = {
    pathname: func, 
    fadeState: object
} 


export default PSKNavBar