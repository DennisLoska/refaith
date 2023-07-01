import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Backdrop from '../components/construction/Backdrop';
import GlobalStyle from './GlobalStyle';
import BackgroundImage from '../assets/images/optimized/disciple.webp';

const keyFrames = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;

const StyledLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px) grayscale(1);
    height: 100vh;

    .heart-wrapper {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        transform-origin: 40px 40px;
        transform: rotate(45deg);
    }

    .heart {
        top: 32px;
        left: 32px;
        position: absolute;
        width: 32px;
        height: 32px;
        background: #000;
        filter: drop-shadow(2px 4px 50px red);
        animation: ${keyFrames} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);

        &:before,
        &:after {
            content: " ";
            position: absolute;
            display: block;
            width: 32px;
            height: 32px;
            background: #000;
        }

        &:before {
            left: -24px;
            border-radius: 50% 0 0 50%;
        }

        &:after {
            top: -24px;
            border-radius: 50% 50% 0 0;
        }
    }

    .loading-content {
        width: 300px;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }

    .loading-text {
        color: #fff;
        font-size: 24px;
        text-align: center;
    }
`;

const Loader = () => {
    const [text, setText] = useState('.');
    const [stop, setStop] = useState(false);

    useEffect(() => {
        let timer = null;

        if (!stop) {
            timer = setInterval(() => {
                if (text.split('').length <= 5) {
                    setText(`${text} .`);
                } else setText('.');
            }, 600);
        }

        setTimeout(() => {
            clearInterval(timer);
            setText('');
            setStop(true);
        }, 7000);

        return () => clearInterval(timer);
    }, [text]);

    return (
        <Backdrop coverImage={BackgroundImage} animation>
            <StyledLoader>
                <div className="loading-content">
                    <div className="heart-wrapper">
                        <div className="heart" />
                    </div>
                    <div className="loading-text">
                        {text}
                        {
                            text === '' && stop && (
                                <span>Thank you for your patience. It is almost ready!</span>
                            )
                        }
                    </div>
                </div>
            </StyledLoader>
            <GlobalStyle />
        </Backdrop>
    );
};


export default Loader;
