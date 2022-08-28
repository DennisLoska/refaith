import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    height: 50px;
    min-width: 50px;
    width: fit-content;
    padding: 15px;
    font-size: 18px;
    color: #fff;
    margin: 0 1em 25px 1em;
    border-radius: 5px;
    border: 0px solid #e0e0e0;
    background: rgba(0,0,0,0.5);
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3); 
    -webkit-box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3); 
    -moz-box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);

    ${(props) => {
    if (props.isFull) {
      return `
        background-color: #fff;
        background: linear-gradient(45deg, var(--active-color) 20%, #fff 100%) no-repeat;
        animation: colorChange 20s alternate infinite;
        `;
    }
    return `
      background-image: radial-gradient(circle at 100% 100%, transparent -2px, #d50000 -2px, #d50000 1px, transparent 1px), linear-gradient(to right, #d50000, #304ffe), radial-gradient(circle at 0% 100%, transparent -2px, #304ffe -2px, #304ffe 1px, transparent 1px), linear-gradient(to bottom, #304ffe, #00bfa5), radial-gradient(circle at 0% 0%, transparent -2px, #00bfa5 -2px, #00bfa5 1px, transparent 1px), linear-gradient(to left, #00bfa5, #ffd600), radial-gradient(circle at 100% 0%, transparent -2px, #ffd600 -2px, #ffd600 1px, transparent 1px), linear-gradient(to top, #ffd600, #d50000);
      background-size: 1px 1px, calc(100% - 2px) 3px, 1px 1px, 3px calc(100% - 2px);
      background-position: top left,top center,top right,center right, bottom right,bottom center,bottom left,center left;
      background-repeat: no-repeat;
      `;
  }}

    &:hover {
      background: rgba(0,0,0,0.5);
      cursor: pointer;
    }
`;

const HomeButton = (props) => {
  const { children } = props;
  return (
    <StyledButton {...props} role="button">
      {children}
    </StyledButton>
  );
};

export default HomeButton;
