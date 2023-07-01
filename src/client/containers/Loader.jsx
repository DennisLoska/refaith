import React from 'react';
import styled, { keyframes } from 'styled-components';

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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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
`;

const Loader = () => (
    <StyledLoader>
        <div className="heart-wrapper">
            <div className="heart" />
        </div>
    </StyledLoader>
);

export default Loader;
