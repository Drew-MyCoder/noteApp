import React from 'react'
import '../src/ReactFacts/css.css'
import Navbar from './ReactFacts/Navbar'
import Main from './ReactFacts/Main'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  return (
    <>
    <div className='container'>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Main darkMode={darkMode}/>
    </div>
    </>
  )
}

export default App
