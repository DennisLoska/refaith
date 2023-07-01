import React from 'react';
import styled from 'styled-components';
import useContainer from '../hooks/useContainer';
import config from '../config/config';
import BackgroundImage from '../assets/images/optimized/abstract_angel.webp';
import List from '../components/virtuoso/List';

const StyledVideos = styled.div`
    padding: 100px 10%;
    display: flex;
    padding-top: 25px;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    padding-left: 10%;
    padding-right: 10%;
    
    @media only screen and (max-width: 768px) {
        padding-left: 0;
        padding-right: 0;
    }
    
    @keyframes shine {
        to {
            background-position: 100% 0, /* move highlight to right */ 0 0;
        }
    }
    
    .videoWrapper {
        margin: 25px auto;
        width: 560px;
        max-width: 100%;
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

        @media only screen and (max-width: 768px) {
          height: 16em;
        }

        @media only screen and (max-width: 480px) {
          height: 180px;
        }
    }
        
    iframe {
        border-radius: 5px;
        max-width: 100%;
        width: 100%;
        height: 100%;
    }
`;

const Videos = () => useContainer(
    <StyledVideos>
        {
            Array.isArray(config?.videoList) ? (
                <List
                    asyncMode
                    items={config.videoList}
                    content={index => (
                        <div
                            className="videoWrapper"
                            key={config.videoList[index]}
                        >
                            <iframe
                                width="560"
                                src={config.videoList[index]}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}
                />
            ) : <h2>Keine Videos gefunden!</h2>
        }
    </StyledVideos>,
    BackgroundImage
);


export default Videos;
