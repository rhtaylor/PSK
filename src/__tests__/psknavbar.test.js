import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {getByRole, findByText, getByPlaceholderText} from '@testing-library/dom'
import PSKNavBar from '../components/PSKNavBar' 
import About from '../components/About'
import { 
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom'; 
import '@testing-library/jest-dom' 
import { expectCt } from 'helmet'


test('NavBar should have About link', ()=>{
    render(
        <div><Router>
                <Routes>
                <Route exact path='/about' element={<About />} /> 
            </Routes> 
            </Router>
        </div>
    )
    
    expect(screen.getByTestId("navbar")).getByText(/About/).toBeInTheDocument()
      })