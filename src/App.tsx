import React from 'react';

import {ThemeProvider} from 'styled-components'
import { darkTheme, lightTheme } from './styles/Theme';
import { Main } from './styles'
import { Title } from './styles';
import { Button } from './styles';
import { useState } from 'react';
import { useEffect } from 'react';


function App({ theme = ''}) {

  const [themedark, setThemeDark] =useState(false)

  const themeDarkString = 'Dark Theme'
  const themeLightString = 'Ligh Theme'


  useEffect(() => {

  },[themedark])

  const switchTheme = () => {
    setThemeDark(!themedark)
  }



  return (
    <>
      <ThemeProvider theme={themedark ? darkTheme : lightTheme}>
          <Main>
            <Title>My App in {themedark ? themeDarkString : themeLightString}</Title>
            <Button onClick={switchTheme}>Switch Theme</Button>
          </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
