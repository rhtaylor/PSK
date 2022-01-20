import React, {useState} from 'react'
import {v1 as uuid} from 'uuid'
import '../../css/component.scss'

const KennelBack = ({title, des}) => {
    
return (
         <div key={uuid() } id="sideKennel" className=" back"> 
           <p className='text-danger'>{title}</p> 
           <p className='text-danger'>{des}</p>
         </div>
         )
} 
export default KennelBack