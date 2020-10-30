import React from 'react'; 

export const theme = {
    dark: {
      color: 'white',
      background: 'black'
    },
    light: {
      color: 'black',
      background: 'white'
    }
}   

const ThemeContext = React.createContext(theme.light);
export default ThemeContext;