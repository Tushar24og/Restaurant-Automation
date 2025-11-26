import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Feedback from './pages/homePage/feedback';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <div className="app">
      {/* Navigation */}
      <Navbar />
      
      
      <feedback />

     

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}

export default App
