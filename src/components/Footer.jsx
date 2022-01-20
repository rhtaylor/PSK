import React from 'react' 
import {Alert, Col, Row} from 'reactstrap'; 
import '../css/Global.scss'
import '../images/petsafe_logo.png'

const Footer = () =>{

    return(<Row><Col>
            <div className="d-flex flex-column mt-2 mb-0 pb-2 text-center arizonaPets">
            <h1 className='mt-auto'>Safest Dog Kennels You Can Buy</h1>
            <footer data-testid="footer" className="text-warning safe-dog">pet-safe-kennels, llc. 520-730-7020, Phoenix, AZ</footer>
          </div> 
          </Col></Row> 
          )
} 
export default Footer;