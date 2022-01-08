import React from 'react';
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


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path='/about' element={<About key={uuid()} /> }  />
      <Route exact path='/kennels' element={ <Kennels key={uuid()} /> }  /> 
      <Route exact path='/contact' element={ <Contact key={uuid()} /> }  />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
