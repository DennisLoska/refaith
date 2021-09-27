import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import Backdrop from '../components/Backdrop';
import TitleWrapper from '../components/TitleWrapper';
import TitleText from '../components/TitleText';
import 'react-jinke-music-player/assets/index.css';
import audioList from '../config/config';

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
      <ReactJkMusicPlayer
        theme="dark"
        bounds="html"
        mode="full"
        glassBg
        spaceBar
        responsive
        showDownload
        showThemeSwitch
        showMediaSession
        autoPlay={false}
        remove={false}
        showLyric={false}
        toggleMode={false}
        autoPlayInitLoadPlayList={false}
        defaultVolume={0.7}
        audioLists={audioList}
      />
      <GlobalStyle />
    </Backdrop>
  );
};

export default App;
