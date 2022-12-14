//shows context using a function (use effect) to set the style which is simpler
import { useTheme, useThemeUpdate } from "../Helpers/ThemeContext";

export default function FunctionContextComponent() {
  //Sets theme based on theme Context, and also updates within theme context
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  )
}