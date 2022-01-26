import { useCallback, useState, useEffect } from 'react';
import {Alert, Col, Row} from 'reactstrap';
import {v1 as uuid} from 'uuid'
import PSKNavBar from '../PSKNavBar';
import { useLocation } from 'react-router-dom' 
import KennelFrontBack from './KennelFront';

import solid_catio from '../../images/Catio-Solid-Roof.jpg' 
import cat_kennel from '../../images/Cat-Kennel.jpg' 
import catio from '../../images/Cat-Security-Kennels-3.jpg' 
import cat_heaven from '../../images/Catio-Security-Kennel.jpg'
const CAT_KENNEL_TITLE = 'You too can be the tiger king with our Catios' 
const CAT_KENNEL_INFO = "Your Cat will be able to go outside and sunbath, bird watch, and let their inner Lion come out" 

const PICS = [{url: solid_catio, title: "Cat Tunnel", des: 'adjacent to home Cat can enjoy life' }, {url: cat_kennel, title: 'Wide open Cat Play area', des: 'Your Cat is free to be the Lion they think they are'}, 
{url: catio, title: 'Classic Catio', des: 'your patio is now a "catio"'}, {url: cat_heaven, title: 'Gorgeous Catio', des: 'Mr Kitty can roam free outside in safety'}]




const CatKennels = ({fadeState}) =>{
    const location = useLocation() 
    const [prop, setProp] = useState(); 
    const [currentFliped, setFlipped] = useState([]);
    const [clicked, setState] = useState({clicked: false}) 

    useEffect(() => {
        let myPath = location.pathname.replace (/\//g, "_");
        setProp(myPath) 
      }, [location])
      
      const handleClick = useCallback((e) =>{ 
         
        e.preventDefault() 
        let id = parseInt(e.target.id)
        
       setState((preState)=>{ 
                return { clicked: preState.clicked === false ? true : false} }) 
       setFlipped((preState) =>{ 
                return currentFliped.includes(id) === true  ? currentFliped.filter((i) => i != id ) :  [ id, ...currentFliped]   }) 
       setTimeout(console.log("yo"), 1000)
    }, [setState, setFlipped, currentFliped])

      const showCatiosKennels = () => {
        let pictures =  PICS.map((obj, index) =><div key={uuid()} className='bg-warning cent card'>
                                 <KennelFrontBack key={uuid} id={index} des={obj.des} title={obj.title} 
                                   url={obj.url} currentFliped={currentFliped} clicked={clicked} handleClick={handleClick}
                                   /></div>) 
         return pictures
       }


     return(<Row key={uuid()} className='pl-2 pt-4 d-flex justify-content-center bg-dark'>
             <Col>
                <PSKNavBar fadeState={fadeState} pathname={prop}/>
                <p className='pt-2 text-center text-warning'>{CAT_KENNEL_TITLE}</p>
                <p className='text-center  text-warning'>{CAT_KENNEL_INFO}</p> 
                <span className='d-flex  flex-row  px-auto mx-auto  overflow-hidden justify-content-center box'>{showCatiosKennels()}</span>
                <a className='d-flex justify-content-center' href='http://cat-safe-kennels.com' target="_blank">Cat Safe Kennels</a>
                <footer className='d-flex justify-content-center bg-dark'> 
                 <div className="process_footer justify-content-center"> 
                  <p className="southWest text-warning text-center">Pet Safe Kennels, llc.</p> 
                  <p className="southWest text-warning text-center">Your pet is gonna be safe</p> 
                  <p className="southWest text-warning text-center">We Guarantee it</p>
                 </div>
               </footer>
             </Col>
            </Row>)

}

export default CatKennels