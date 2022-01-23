import { useState, useEffect } from 'react';
import {Col, Row} from 'reactstrap';
import { useLocation } from 'react-router-dom';
import PSKNavBar from './PSKNavBar';

const Contact = ({fadeState}) =>{ 
    const location = useLocation()  
    const [prop, setProp] = useState(); 
    useEffect(() => {
        let myPath = location.pathname.replace (/\//g, "_");
        setProp(myPath) 
      }, [location]) 
    
    return(<Row className='pl-2 pt-4'><Col>
            <PSKNavBar fadeState={fadeState} pathname={prop} />
            <h1 className='pl-2 pt-4 d-flex text-center justify-content-center soutWest text-danger'>Tel: (520) 730-7020</h1> 
            <h2 className='d-flex text-center justify-content-center soutWest text-danger'>email: jacksokcorrals@gmail.com</h2> 
            <footer className='d-flex justify-content-center'> 
                 <div className="process_footer justify-content-center"> 
                  <p className="southWest text-warning text-center">Pet Safe Kennels, llc.</p> 
                  <p className="southWest text-warning text-center">Your pet is gonna be safe</p> 
                  <p className="southWest text-warning text-center">We Guarantee it</p>
                 </div>
               </footer>
            </Col></Row>)
}

export default Contact;