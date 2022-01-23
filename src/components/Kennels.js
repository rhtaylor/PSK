import React, {useState} from 'react' 
import {ComponentContext} from '../index.js'
import PSKNavBar from './PSKNavBar' 
import {Link, useLocation} from 'react-router-dom'
import '../css/Global.scss'  

const Kennels = () =>{

       const location = useLocation()
       
return( <ComponentContext.Provider >
       <div className='pl-2 pt-4 kennels bg-dark vh-100 justify-content-center'>
         <div className='d-flex flex-column justify-content-end'></div> 
        <PSKNavBar fadeState={{fade: 'fade-out'}} pathname={location.pathname} /> 
        <nav className='d-flex flex-row pb-4 justify-content-center px-3'>
        <Link className="px-2" to="/kennels/process">Our Process</Link>
        <Link className="px-2" to="/kennels/dogRuns">Dog Runs</Link>
        <Link className="px-2" to="/Kennels/boxKennels">Box Kennels</Link> 
        <Link className="px-2" to="/Kennels/catKennels">Catios</Link>
      </nav>
      <p className='d-flex southWest justify-content-center sm text-primary'>Learn about our different kennel types</p>
       </div> 
       </ComponentContext.Provider>
       )}

export default Kennels