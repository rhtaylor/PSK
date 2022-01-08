import React, {useState, useEffect} from 'react';
import { arrayOf, bool, func, shape, string, object } from 'prop-types' 
import '../css/global.css'



const TitleSafePets = ({text, subText, setFade, fadeState}) => { 

    

    return(<div className={`d-flex mt-4 flex-column text-center justify-content-center align-content-end ${fadeState.fade}`} >
        <h3 className="southWest">{text}</h3>
        <h2 className="southWest" >{subText}</h2>
        <h1 className="text-warning">Pet Safe Kennels</h1>
    </div>)
} 

TitleSafePets.defaultProps={
    text: 'Your pet is gonna be safe!', 
    subText: 'We Guarantee It'
}

TitleSafePets.prototypes={
    text: string,
    subText: string,
    setFade: func, 
    fadeState: object,
}

export default TitleSafePets