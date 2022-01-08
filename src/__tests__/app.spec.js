import React from 'react';
import { shallow, mount, render } from 'enzyme'; 

import App from '../App.js'

describe("App displays landing page", ()=>{
    test('Title Pet Safe Kennels should be rendered on page', ()=>{
       const wrapper = shallow(<App />)
       expect(wrapper.contains(<h1>Pet Safe Kennels</h1>)).toBeTruthy();
    })
}) 


describe('Expect App to display Side NavBar At all times', ()=>{
    test('App should have Nav Bar Displayed', ()=>{
        const appPage = mount(<App/>) 
        expect(appPage.find('a').text()).toEqual('Pics');
    })
})