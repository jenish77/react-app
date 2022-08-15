// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
// import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'dark'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'light'
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-2">
        {/* <Routes> */}
        {/* <Route path="/about">
              {/* <About /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* </Route>  */}
        {/* <Route path="/"> */}
        {/* <TextForm heading="Enter text to analyze" mode={mode} /> */}
        {/* <Route
                path="/"
                element={ */}
        <TextForm heading="Enter text to analyze" mode={mode} />
        {/* } */}
        {/* /> */}
        {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App
