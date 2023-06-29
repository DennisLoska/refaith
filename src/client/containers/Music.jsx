import React, { useState } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import config from '../config/config';
import useContainer from '../hooks/useContainer';
import AlbumCover from '../assets/images/zeitkapsel.webp';
import CardWrapper from '../components/card/CardWrapper';
import Card from '../components/card/Card';
import BackgroundImage from '../assets/images/optimized/turntables.webp';

const Music = () => useContainer(
  (() => {
    const [album, setAlbum] = useState(null);

    return (
      <>
        <CardWrapper>
          <Card
            width="20em"
            height="fit-content"
            onClick={() => setAlbum('zeitkapsel')}
            padding="0px"
          >
            <div className="albumCover">
              <img
                src={AlbumCover}
                width="100%"
                alt="Zeitkapsel Albumcover"
                style={{ marginBottom: '0px', borderRadius: '0px' }}
              />
            </div>
            <div className="album">
              <div>
                <h2>Zeitkapsel (2021)</h2>
                <p>
                  <a href={config?.playlist} target="_blank" rel="noopener noreferrer">Zeitkapsel </a>
                  ist ein persönliches Projekt aus dem Jahr 2021,
                  um Frieden mit unterschiedlichsten Phasen aus meiner Vergangenheit zu schließen.
                </p>
                <p>
                  Die Beats stammen von diversen Produzenten (siehe entsprechende Videobeschreibungen).
                  Das Mixing, Mastering und Recording hat Norman von
                  {' '}
                  <a href="https://www.cuttel.de/" target="_blank" rel="noopener noreferrer">Cuttel Studio</a>
                  {' '}
                  übernommen. Vielen Dank für die gute Zusammenarbeit mein Bester!
                </p>
              </div>
            </div>
          </Card>
        </CardWrapper>
        {
          album !== null ? (
            <ReactJkMusicPlayer
              theme="dark"
              mode="full"
              glassBg
              spaceBar
              responsive
              showDownload
              showThemeSwitch={false}
              showMediaSession
              autoPlay={false}
              remove={false}
              showLyric={false}
              toggleMode={false}
              audioLists={config?.audioList[album]}
            />
          ) : null
        }
      </>
    );
  })(),
  BackgroundImage
);

export default Music;
