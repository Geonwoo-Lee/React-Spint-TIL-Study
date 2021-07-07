import React from 'react'
import { Content } from './components/Content'
import styled, {ThemeProvider} from 'styled-components'
import { useDarkMode } from './styles/useDarkMode'
import { Toggle } from './components/Toggle'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles'
import { Nav } from './components/Nav'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TextTyping  } from './components/Animation'


const Container = styled.div `
 max-width: 50%;
 margin: 8rem auto 0;

`

function App() {
  const [theme, toggleTheme] = useDarkMode();
  console.log(theme)
  const themeMode = theme === 'light' ? lightTheme : darkTheme




  return (
    <ThemeProvider theme={themeMode}>
      <Container>  
        <GlobalStyles/>
        <TextTyping theme = {theme}/>
        <Header/>
        <Toggle theme = {theme} toggleTheme = {toggleTheme}/>
        <Nav/>
        <Content/>
        <Footer/>
      </Container>
    </ThemeProvider>
   

   
  );
}

export default App;
