//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import LandingPage from './Components/Landing/LandingPage'
import Footer from './Components/Layout/Footer'
import Navbar from './Components/Layout/Navbar'
import SecondSlide from './Components/Slide2/SecondSlide'
import ThirdSlide from './Components/Slide3/ThirdSlide'

import { Component } from 'react'
import MainPage from './Components/MainPage/MainPage'
import FifthSlide from './Components/Slide5/FifthSlide'
import Location from './Components/Location/Location'

export default class App extends Component {
  render() {
    return <>
      <Navbar />
      <MainPage />
      <SecondSlide />
      <ThirdSlide />
      <FifthSlide/>
      <Location/>
      <Footer />
      {/* <LandingPage /> */}
    </>
  }
}

