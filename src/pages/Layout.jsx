import React from 'react'
import SideBar from './SideBar'
import SwitchBlock from './SwitchBlock'
import Fan from '../components/Fan'
import Water from '../components/Water'
import Weather from '../components/Weather'
import Light from '../components/Light'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
function Hero() {
  return (
    <Router>
      <div className='flex h-screen flex-row'>
        <SideBar/>
        <div className='bg-eggshell w-6/7 flex items-center'>
          <Routes>
            <Route path='/' element={<Weather />} />
            <Route path='/light' element={<Light />} />
            <Route path='/fan' element={<Fan />} />
            <Route path='/irrigation' element={<Water />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  )
}

export default Hero