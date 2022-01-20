import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import {v1 as uuid} from 'uuid'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; 
import About from './components/About';
import Kennels from './components/Kennels'
import Contact from './components/Contact'
import DogRun from './components/Dog_Run';


export const ComponentContext = createContext()

ReactDOM.render( 
<ComponentContext.Provider  >
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route  exact path='/about' element={<About key={uuid()} fadeState={'fade-in'}/> }  />
      <Route exact path='/kennels' element={ <Kennels key={uuid()} /> }  />
      <Route exact path='/kennels/dog_runs' element={ <DogRun key={uuid()} /> }  /> 
      <Route exact path='/contact' element={ <Contact key={uuid()} /> }  /> 
    </Routes>
  </Router> 
  </ComponentContext.Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
