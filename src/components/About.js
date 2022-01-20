import React from 'react' 
import { useLocation } from 'react-router-dom';
import {Alert, Col, Row} from 'reactstrap';
import { arrayOf, bool, func, shape, string, object } from 'prop-types' 
import '../css/global.css' 
import '../css/Global.scss' 
import '../images/petsafe_logo.png' 
import '../images/jack_owner_pet_safe_kennels.jpg'
import PSKNavBar from './PSKNavBar';
const About = ({fadeState}) =>{
    const location = useLocation()
    return(<div className='pl-2 pt-4 about bg-dark'> 
            <div className='d-flex flex-column justify-content-end'></div> 
            <PSKNavBar pathname={location.pathname} fadeState={{fade: 'fade-out'}}/>
            <p className='pt-1 mx-0 pl-0 southWest text-center'>I started building kennels that are safe for pets in 2006 after my daughter's dachshund was killed by a coyote.</p>
            <p className='pl-2 southWest text-center'>Ten years and over 2,500 predator proof dog & cat enclosures later, we have been called the Michelangelo of dog kennels.</p>
            <p className='pl-2 southWest text-center'>It's our years of experience that makes us better than other dog kennels companies because with each kennel</p> 
            <p className='pl-2 southWest text-center'>we research and develop new techniques, methods, and proprietary designs that other comapnies can not duplicate.</p> 
            <p className='pl-2 southWestB text-center'>Call Us for a Free Estimate.</p>
            <p className='pl-2 southWestB text-center'>520-730-7020</p>
          </div>
         
         
         )
}
About.defaultProps={
  fadeState: {fade: 'fade-out'}
}
About.propTypes={
  fadeState: object
}

export default About