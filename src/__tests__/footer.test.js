import React from 'react'; 

import { render, screen } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";

import Footer from '../components/Footer'

test('renders on DOM', ()=>{
    const {getByTestId} = render(<Footer/>); 
    const testFooterEle = getByTestId('footer'); 
    expect(testFooterEle.textContent).toBe('pet-safe-kennels, llc. 520-730-7020, Phoenix, AZ')
})