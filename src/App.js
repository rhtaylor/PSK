import React, {useState, useEffect, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import {Col, Row} from 'reactstrap'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import TitleSafePets from './components/TitleSafePets.js'
import {v1 as uuid} from 'uuid'
import './App.css';
import './css/fade.css'
import './css/global.css'
import PSKNavBar from './components/PSKNavBar'; 
import Footer from './components/Footer'
import { ComponentContext } from './index.js';

const App=()=>{
  const [fadeState, setFade] = useState({fade: 'fade-in'})
  const [currentData, setData] = useState(undefined) 
  const location = useLocation()
  const myComponent = useContext(ComponentContext) 

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
           <Col className='bg-dark flex-column arizona-pets'>
            <TitleSafePets setFade={setFade} fadeState={fadeState} data={currentData} location={location}/>
            <PSKNavBar fadeState={fadeState} pathname={location.pathname}/>
            <Footer />
           </Col>
          </Row>);
}



export default App;
