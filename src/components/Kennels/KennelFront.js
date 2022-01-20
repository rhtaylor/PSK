import React, {useState} from 'react' 
import {v1 as uuid} from 'uuid'
import '../../css/Global.scss' 

const KennelFrontBack = ({id, url, title, des, clicked, handleClick, currentFliped}) => {

return (<div id={id} key={uuid()} className={`d-flex flex-row inner px-auto  ${currentFliped.includes(id) ? 'clicked' : 'none'}`} 
          onClick={(e)=>handleClick(e)}> 
          { !currentFliped.includes(id) && 
          <div className='front mx-auto' id={id} key={uuid()}>
            <picutre id={id} key={uuid()}>
            <img id={id} key={uuid()} className="card-img-top rounded smaller" src={url} alt="Custom Phoenix Dog Run" />
            </picutre> 
            </div> }
           { currentFliped.includes(id) && 
           <div id={id} key={uuid()}  className="back" onClick={(e)=>handleClick(e)}> 
           <h3 id={id} key={uuid()} className='text-white'>{title}</h3> 
           <h4 id={id} key={uuid()} className='text-white'>{des}</h4>
         </div>
           }
       </div>)
}
export default KennelFrontBack