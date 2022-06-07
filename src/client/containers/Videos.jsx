import React from 'react';
import styled from 'styled-components';
import useContainer from '../hooks/useContainer';
import config from '../config/config';

const StyledVideos = styled.div`
    display: flex;
    padding-top: 50px;
    justify-content: center;
    flex-wrap: wrap;

    @keyframes shine {
        to {
            background-position: 100% 0, /* move highlight to right */ 0 0;
        }
    }

    .videoWrapper {
        margin: 25px;
        width: 560px;
        height: 315px;
        border-radius: 5px;
        
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.254) 50%,
            rgba(255, 255, 255, 0) 80%
        ),#e1e1e1bd;
        background-repeat: repeat-y;
        background-size: 50px 500px;
        background-position: 0 0;
        animation: shine 1s infinite;
    }
        
    iframe {
        border-radius: 5px;
    }
`;

const Videos = () => useContainer(
  <StyledVideos>
    {
        Array.isArray(config?.videoList) ? (
          config.videoList.map(videoUrl => (
            <div
              className="videoWrapper"
              key={videoUrl}
            >
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))
        ) : <h2>Keine Videos gefunden!</h2>
    }
  </StyledVideos>
);

export default Videos;
