//helper function/custom to handle context of theme
import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext =  React.createContext();

//create custom hook to access theme anywhere
export function useTheme(){
  return useContext(ThemeContext)
}
//create custom hook to access theme update anywhere
export function useThemeUpdate(){
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}){
  const [darkTheme, setDarkTheme] =  useState(true);

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  //code refactored to be able to use ANY child component and give it its proper theme
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )

}