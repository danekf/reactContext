import React, {useState} from 'react'
import './App.css';
import ClassContextComponent from './Components/ClassContextComponent';
import FunctionContextComponent from './Components/FunctionContextComponent';

//create a context to use and EXPORT it, here for theme
export const  ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] =  useState(true);

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <> 
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  )
}

export default App;
