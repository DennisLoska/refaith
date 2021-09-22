import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Backdrop from '../components/Backdrop';
import TitleWrapper from '../components/TitleWrapper';
import TitleText from '../components/TitleText';

const GlobalStyle = createGlobalStyle`
  :root {
    --active-color: #00aeb0;
  }

  * {
    box-sizing: border-box;
  }

  @keyframes colorChange {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    height: 100%;
    background: var(--active-color);
    transition: background 0.4s ease;
  }
`;

const App = () => {
  // setup initial component state
  const [data, setData] = useState(null);
  return (
    <Backdrop>
      <TitleWrapper>
        <TitleText size="6em">
          Re:Faith
        </TitleText>
        <TitleText size="1.5em">
          Seite wird aktuell bearbeitet!
        </TitleText>
      </TitleWrapper>
      <GlobalStyle />
    </Backdrop>
  );
};

export default App;
