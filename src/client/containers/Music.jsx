import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import config from '../config/config';
import useContainer from '../hooks/useContainer';
import TitleWrapper from '../components/construction/TitleWrapper';
import TitleText from '../components/construction/TitleText';
import AlbumCover from '../assets/images/zeitkapsel.png';

const Music = () => useContainer(
  <>
    <TitleWrapper>
      <img
        src={AlbumCover}
        width="20%"
        alt="Zeitkapsel Albumcover"
        style={{ marginBottom: '50px', borderRadius: '5px' }}
      />
      <TitleText size="1.5em">
        Zeitkapsel ist ein persönliches Projekt aus dem Jahr 2021,
        {' '}
        <br />
        {' '}
        um Frieden mit meiner Vergangenheit zu schließen!
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
      audioLists={config?.audioList}
    />
  </>
);

export default Music;
