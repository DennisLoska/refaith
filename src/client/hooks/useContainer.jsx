
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Backdrop from '../components/construction/Backdrop';
import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';
import NavigationItem from '../components/navigation/NavigationItem';

const GlobalStyle = createGlobalStyle`

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    * {
        box-sizing: border-box;
    }

    :root {
        --active-color: #a7b000;
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
        font-family: 'Lato', Arial, Helvetica, sans-serif;
        font-size: 16px;
        overflow-y: scroll;
        text-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2) ; 
       -webkit-text-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2) ; 
       -moz-text-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2) ; 
    }

    body {
        margin: 0;
    }
`;

const useContainer = children => (
  <Backdrop>
    <Header>Re:Faith</Header>
    <Navigation>
      <NavigationItem to="/">Start</NavigationItem>
      <NavigationItem to="/poetry">Poetry</NavigationItem>
      <NavigationItem to="/music">Musik</NavigationItem>
      <NavigationItem to="/videos">Videos</NavigationItem>
      <NavigationItem to="/about">Über</NavigationItem>
      <NavigationItem to="/imprint">Impressum</NavigationItem>
    </Navigation>
    { children }
    <GlobalStyle />
  </Backdrop>
);

export default useContainer;
