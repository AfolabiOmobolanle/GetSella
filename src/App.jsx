import React from 'react'
import './App.css'
import './index.css'
import Herosection from './Components/Herosection';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import DownloadSegment from './Components/DownloadSegment';
import Register from './Components/Register';
import SetupAccount from './Components/SetupAccount';
import LastSection from './Components/LastSection';
import GooglePlay from './Components/GooglePlay';
import AppStore from './Components/AppStore';
import Footer from './Components/Footer';
import FooterSection from './Components/FooterSection';
import FooterBottom from './Components/FooterBottom';

function App() {

  return (
    < >
     <Herosection/>
    <Navigation/>
    <Main/>
    <DownloadSegment/>
    <Register/>
    <SetupAccount/>
    <LastSection/>
    <GooglePlay/>
    <AppStore/> 
    <Footer/>
    <FooterSection/>
    <FooterBottom/>
    
    </>
  )
}

export default App
