import React from 'react';

import FunctionContextComponent from './Components/FunctionContextComponent';
import { ThemeProvider } from './Helpers/ThemeContext';

function App() {
  return (
    <> 
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  )
}

export default App;
