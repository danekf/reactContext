//helper function/custom to handle context of theme
import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
//create context for updating theme within the context of THEME and create a function lower down to use it.
const ThemeUpdateContext =  React.createContext();

//create custom hook to access theme and update value anywhere
export function useTheme(){
  return useContext(ThemeContext)
}
export function useThemeUpdate(){
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}){
  const [darkTheme, setDarkTheme] =  useState(true);
  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )

}