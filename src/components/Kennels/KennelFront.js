import React, {useState} from 'react'
import { arrayOf, bool, func, shape, string, object, int, array } from 'prop-types' 
import {v1 as uuid} from 'uuid'
import '../../css/Global.scss' 

const KennelFrontBack = ({id, url, title, des, clicked, handleClick, currentFliped}) => {
  debugger
return (<div id={id} key={uuid()} className={`d-flex flex-row inner px-auto cent box ${currentFliped.includes(id) ? 'clicked' : 'none'}`} 
          onClick={(e)=>handleClick(e)}> 
          { !currentFliped.includes(id) && 
          <div className='front mx-4' id={id} key={uuid()}>
            <picutre id={id} key={uuid()}>
            <img id={id} key={uuid()} className="card-img-top rounded smaller cent" src={url} alt="Custom Phoenix Dog Run" />
            </picutre> 
            </div> }
           { currentFliped.includes(id) && 
           <div id={id} key={uuid()}  className="back" onClick={(e)=>handleClick(e)}> 
           <h3 id={id} key={uuid()} className='back text-white box px-4 mx-4'>{title}</h3> 
           <h4 id={id} key={uuid()} className='back text-white box px-4 mx-4'>{des}</h4>
         </div>
           }
       </div>)
} 

KennelFrontBack.defaultProps={
  id: 0, 
  url: '../../images/pskicon.png', 
  title: 'Pet Safe Kennels', 
  des: 'your pet is gonna be safe', 
  clicked: false,
  currentFliped: []
}
KennelFrontBack.propTypes={
 id: int, 
 url: string, 
 title: string, 
 des: string, 
 clicked: bool, 
 currentFliped: array
}
export default KennelFrontBack