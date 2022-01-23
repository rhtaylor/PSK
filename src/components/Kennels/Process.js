import React, {useEffect, useState, useCallback} from 'react' 
import {Col, Row} from 'reactstrap'
import PSKNavBar from '../PSKNavBar'
import { useLocation } from 'react-router-dom' 
import {v1 as uuid} from 'uuid' 
import KennelFrontBack from './KennelFront'
import welder from '../../images/Jimmy-Welding-Kennel.jpg'
import Large_Dog_Kennel from '../../images/Large-Dog-Kennels.jpg'
import { object } from 'prop-types'
import '../../css/component.scss'
import '../../css/Global.scss'
import '../../css/global.css'

const PICS = [{url: Large_Dog_Kennel, title: "Welding roof", des: 'Our Kennels are custom build' }, {url: welder, title: 'wielding dog kennel', des: 'One of our great wielders wielding a dog kennel'}]


const Process = () => {  
  
    const location = useLocation() 
    const [prop, setProp] = useState(); 
    const [currentFliped, setFlipped] = useState([]);
    const [clicked, setState] = useState({clicked: false}) 

    useEffect(() => {
        let myPath = location.pathname.replace (/\//g, "_");
        setProp(myPath) 
      }, [location]) 
    
    const showProcess = () => {
     let pictures =  PICS.map((obj, index) =><div key={uuid()} className='bg-warning cent card'>
                              <KennelFrontBack key={uuid} id={index} des={obj.des} title={obj.title} 
                                url={obj.url} currentFliped={currentFliped} clicked={clicked} handleClick={handleClick}
                                /></div>) 
      return pictures
    }
    const handleClick = useCallback((e) =>{ 
         
      e.preventDefault() 
      let id = parseInt(e.target.id)
      
     setState((preState)=>{ 
              return { clicked: preState.clicked === false ? true : false} }) 
     setFlipped((preState) =>{ 
              return currentFliped.includes(id) === true  ? currentFliped.filter((i) => i != id ) :  [ id, ...currentFliped]   }) 
     setTimeout(console.log("yo"), 1000)
  }, [setState, setFlipped, currentFliped])

    return(<Row key={uuid()} className='d-flex justify-content-center bg-dark'>
              <Col key={uuid()}>
               <div className='bg-dark mt-4'>
               <PSKNavBar key={uuid()} fadeState={{fade: 'fade-out'}} pathname={prop}/> 
                <div className='creation'> 
                  <h1 className='text-warning text-center'>We Taylor each Dog Kennel specifically to your home, dog, and protection needs</h1>
                  <h1 className='text-warning text-center'>We have a 3 part process:</h1>
                  <ol>
                    <li className='text-warning text-left'>Home Visit: We come out to meet the dog, see the home and take measurements</li> 
                    <li className='text-warning text-left'>Proposal: We will send you a proposed kennel plan to suit your needs. This includes specs like material types, and price</li> 
                    <li className='text-warning text-left'>Installation: If you accept the Proposal our construction crew installs your kennel.</li> 
                  </ol> 
                  <span className='d-flex  flex-row  px-auto mx-auto  overflow-hidden justify-content-center'>{showProcess()}</span>
                </div>
                </div>
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


export default Process