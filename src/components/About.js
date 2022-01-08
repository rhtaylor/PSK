import React from 'react'
import {Alert, Col, Row} from 'reactstrap'; 
import '../css/global.css' 
import '../css/Global.scss' 
import '../images/petsafe_logo.png'

const About = () =>{

    return(<div className='ml-2 about bg-dark vh-100 arizonaPets'>
            <p className='pt-1 mx-1 pl-1 southWest'>I started building kennels that are safe for pets in 2006 after my daughter's dachshund was killed by a coyote.</p>
            <p className='southWest'>Ten years and over 2,500 predator proof dog & cat enclosures later, we have been called the Michelangelo of dog kennels. Call Us for a Free Estimate.</p>
            <p className='southWest'>It's our years of experience that makes us better than other dog kennels companies because with each kennel we research and develop new techniques, methods, and proprietary designs that other comapnies can not duplicate.</p>
          
          </div>
         )
} 

export default About