import React, {useState, useEffect} from 'react'; 
import {Col, Row} from 'reactstrap'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import TitleSafePets from './components/TitleSafePets.js'
import {v1 as uuid} from 'uuid'
import './App.css';
import './css/fade.css'
import './css/global.css'
import PSKNavBar from './components/PSKNavBar'; 
import Footer from './components/Footer'


const App=()=>{
  const [fadeState, setFade] = useState({fade: 'fade-in'})

  useEffect(() => {
    const timeout = setInterval(() => {
       if (fadeState.fade === 'fade-in') {
          setFade({
               fade: 'fade-out'
          })
       }
    }, 3000);
    return () => clearInterval(timeout)
    } ) 

  return (<Row className='d-flex justify-content-center'>
           <Col className='bg-dark flex-column vh-100 arizona-pets'>
            <TitleSafePets setFade={setFade} fadeState={fadeState} />
            <PSKNavBar fadeState={fadeState}/>
            <Footer />
           </Col>
         </Row>);
}



export default App;
