import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import config from '../config/config';
import useContainer from '../hooks/useContainer';
import TitleWrapper from '../components/construction/TitleWrapper';
import TitleText from '../components/construction/TitleText';

const Music = () => useContainer(
  <>
    <TitleWrapper>
      <TitleText size="6em">
        Zeitkapsel
      </TitleText>
      <TitleText size="1.5em">
        Ein persönliches Projekt zur Vergangenheitsbewältigung
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
