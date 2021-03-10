import React, { useState} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ExpenditureProvider } from './component/ExpenditureContext';
import ExpenditureTemplate from './component/ExpenditureTemplate';
import ExpenditureHead from './component/ExpenditureHead';
import ExpenditureFilter from './component/ExpenditureFilter';
import ExpenditureList from './component/ExpenditureList';
import ExpenditureCreate from './component/ExpenditureCreate';

const palette = {
  blue: '#4c6ef5',
  lightblue: '#74c0fc',
  gray: '#495057',
  pink: '#e64980',
  yellow: '#ffec99',
  lime: '#d8f5a2',
  orange:'#ffd8a8',
  purple: '#eebefa',
}
 
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`


function App() {
  return (
    <ThemeProvider theme={{palette}}>
      <>
        <ExpenditureProvider>
          <GlobalStyle />
          <ExpenditureTemplate>
            <ExpenditureHead></ExpenditureHead>
            <ExpenditureFilter></ExpenditureFilter>
            <ExpenditureList></ExpenditureList>
            <ExpenditureCreate>
            </ExpenditureCreate>
          </ExpenditureTemplate>
        </ExpenditureProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
