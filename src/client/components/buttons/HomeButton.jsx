import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    height: 50px;
    min-width: 50px;
    width: fit-content;
    padding: 15px;
    font-size: 18px;
    color: #fff;
    margin: 0 1em;
    border-radius: 5px;
    border: 0px solid #e0e0e0;
    background: linear-gradient(45deg, var(--active-color) 20%, #fff 100%) no-repeat;
    animation: colorChange 20s alternate infinite;
    box-shadow: '10px 10px 15px rgba(0, 0, 0, 0.3)'; 
    -webkit-box-shadow: '10px 10px 15px rgba(0, 0, 0, 0.3)'; 
    -moz-box-shadow: '10px 10px 15px rgba(0, 0, 0, 0.3)';

    &:hover {
        cursor: pointer;
    }
`;

const HomeButton = (props) => {
  const { children } = props;
  return (
    <StyledButton {...props} role="button">{children}</StyledButton>
  );
};

export default HomeButton;
