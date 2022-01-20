import React, {useReducer, useState, useCallback} from 'react';
import KennelFrontBack from './KennelFront' 
import KennelBack from './KennelBack'
import {ComponentContext} from '../../index.js' 
import side_yard_kennel from '../../images//Side_Yard_Kennel_Solid_Roof_Dog_Run.jpg' 
import yard_dog_run from '../../images/Tucson-Cox_Kennel-A-2.jpg'
import walk_in from '../../images/4FTwideX32FTlongX6FTtall-kennel.jpg'
import wire_roof from '../../images/6FT-California-Kennel.jpg'
import '../../css/component.scss'
import {v1 as uuid} from 'uuid' 

const DOG_RUNS = [{title: "Tunnel Run", des: "More economical for the size as you are paying for 2 fewer kennel sides", url: side_yard_kennel}, 
                  {title: "Yard Run", des: "a large expansise play area where your dogs can be safe", url: yard_dog_run}, 
                  {title: "Walk In", des: "You too can be the tiger king with these walk in kennels", url: walk_in}, 
                  {title: "Wire Roof", des: "No Coyotes or WildCats will be getting in these", url: wire_roof}]


const KennelCard = () => { 
    
    const [clicked, setState] = useState({clicked: false}) 
    const [currentFliped, setFlipped] = useState([]) 

     const update = useCallback((e) =>{ 
         
         e.preventDefault() 
         let id = parseInt(e.target.id)
         debugger
        setState((preState)=>{ 
        return { clicked: preState.clicked === false ? true : false} }) 
        setFlipped((preState) =>{ 
         return   currentFliped.includes(id) === true  ? currentFliped.filter((i) => i != id ) :  [ id, ...currentFliped]   }) 
        setTimeout(console.log("yo"), 1000)
     }, [setState, setFlipped, currentFliped])

     const makeCards = () =>{ 
       
        
         let components = DOG_RUNS.map( (obj,index) =>{ 
             
             return ( 
                    <div key={uuid()} className='bg-warning d-inline-flex justify-content-center card'> 
                     <KennelFrontBack id={index} url={obj.url} clicked={clicked} handleClick={update} 
                     title={obj.title} 
                     des={obj.des} currentFliped={currentFliped} />
                </div> 
             )
         }) 

    
    return components
     }
    
    return (<ComponentContext.Provider >
            {makeCards()}
            </ComponentContext.Provider>
            ) 

} 

export default KennelCard