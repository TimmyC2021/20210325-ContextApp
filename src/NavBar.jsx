import React, { useContext } from 'react';
import NavDropDown from './NavDropDown';
import { ThemeContext } from './context/ThemeProvider';

const NavBar = () => {

  const themeContext = useContext(ThemeContext);

  return (
    <nav className={themeContext.isDarkTheme ? 'dark' : 'light'}>
      <h2>Mealworm</h2>
      <button onClick={themeContext.toggleTheme}>Change Theme</button>
      <NavDropDown/>
    </nav>
  )
}

export default NavBar
