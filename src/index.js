import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'
import manageClients from './reducers/manageClients' 
import manageKennels from './reducers/manageKennels' 

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
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
import Process from './components/Kennels/Process';
import BoxKennels from './components/Kennels/BoxKennels';
import CatKennels from './components/Kennels/CatKennels'; 
import Pics from './Pics'; 
import Purchase from './components/Purchase'

export const ComponentContext = createContext()
function addMiddle(){
  return   applyMiddleware(thunk) &&
    window.__REDUX_DEVTOOLS_EXTENSION__  &&
     window.__REDUX_DEVTOOLS_EXTENSION__()  
}  
const rootReducer = combineReducers({
  clients: manageClients,
  kennels: manageKennels
});

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store} >
<ComponentContext.Provider  >
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route  exact path='/about' element={<About key={uuid()} fadeState={'fade-in'}/> }  />
      <Route exact path='/kennels' element={ <Kennels key={uuid()} /> }  /> 
      <Route exact path='/Pics' element={<Pics fadeState={{fade: 'fade-out'}}/>} />
      <Route exact path='/kennels/dogRuns' element={ <DogRun key={uuid()} /> }  /> 
      <Route exact path='/kennels/process' element={ <Process key={uuid()} /> }  /> 
      <Route exact path='/kennels/boxKennels' element={ <BoxKennels key={uuid()} fadeState={'fade-in'} /> }  /> 
      <Route exact path='/kennels/catKennels' element={ <CatKennels key={uuid()} fadeState={{fade: 'fade-out'}} /> }  /> 
      <Route exact path='/contact' element={ <Contact key={uuid()} fadeState={{fade: 'fade-out'}}/> }  /> 
      <Route exact path='/Purchase' element={<Purchase key={uuid()} />} />
    </Routes>
  </Router> 
  </ComponentContext.Provider> 
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
