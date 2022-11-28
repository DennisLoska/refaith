import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    border-radius: 5px;
    min-height: ${props => (props.isPoem ? '250px' : '300px')};
    min-width: 300px;
    width: ${(props) => {
    if (props.isPoem && window.innerWidth <= 600) {
      return '100%';
    }
    if (props.isPoem) {
      return 'fit-content';
    }
    return props.width || '300px';
  }};
    max-width: ${props => (props.isPoem ? '35em' : 'unset')};
    margin: ${props => props.margin || '25px'};
    padding: ${props => props.padding || '25px'};
    background: ${props => props.background || '#F8F8F8'}; 
    border: ${props => props.border}; 
    box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 
    -webkit-box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 
    -moz-box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'};
    height: ${(props) => {
    if (props.isOpen || !props.isPoem) {
      return props.height;
    }
    if (props.isPoem && !props.isOpen) {
      return 'fit-content';
    }
    if (props.height) {
      console.log('hi');

      return props.height;
    }
    return '500px';
  }};
    max-height: ${props => (props.isPoem && !props.isOpen ? '500px' : 'unset')};
    overflow-y: ${props => (props.isPoem ? 'hidden' : 'auto')};
    position: relative;
    overflow-x: hidden;
    font-family: inherit;

    .fadeout {
        position: absolute; 
        bottom: 0em;
        left: 0;
        width: 100%;
        height: 30em;
        background: -webkit-linear-gradient(
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        ); 
        background-image: -moz-linear-gradient(
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
        background-image: -o-linear-gradient(
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
        background-image: linear-gradient(
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
        background-image: -ms-linear-gradient(
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
    } 

    @keyframes shine {
        to {
            background-position: 100% 0, /* move highlight to right */ 0 0;
        }
    }

    .toggleButton {
        position: absolute;
        bottom: 25px;
        display: block;
        left: 50%;
        border-radius: 5px;
        border: 0px solid #e0e0e0;
        transform: translate(-50%, -50%);
        font-family: inherit;
        min-width: 150px;
        min-height: 40px;
        font-size: 15px;
        font-weight: 600;
        background-color: #fff;
        color: #fff;
        background: linear-gradient(45deg, var(--active-color) 20%, #fff 100%) no-repeat;
        animation: colorChange 20s alternate infinite;
        box-shadow: ${props => props.boxShadow || '10px 10px 15px rgba(0, 0, 0, 0.3)'}; 
        -webkit-box-shadow: ${props => props.boxShadow || '10px 10px 15px rgba(0, 0, 0, 0.3)'}; 
        -moz-box-shadow: ${props => props.boxShadow || '10px 10px 15px rgba(0, 0, 0, 0.3)'};
        
        &:hover {
            background: #fff;
            color: #000;
            cursor: pointer;
        }
    }

    .contentSpacer {
        height: 100px;
        width: 100%;
    }

    img {
        border-radius: 5px;
    }

    .poem {
      text-align: left;
      padding-left: 25px;
      padding-right: 25px;

      @media only screen and (max-width: 768px) {
        padding-left: 10px;
        padding-right: 10px;
      }
    }

    .albumCover {
      &:hover {
        cursor: pointer;
      }
    }

    .album {
      padding: 25px;

      h2 {
        margin: 0;
      }

      a {
        text-decoration: none;
      }

      &:hover {
        cursor: pointer;
      }
    }
  `;

const Card = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { isPoem, children } = props;

  // character length of a potential poem
  const contentLength = children?.props?.children?.length;

  // no expand option for short poems
  const SHORT_LIMIT = 500;

  return (
    <StyledCard {...props} isOpen={isOpen}>
      { children }
      {
          !isOpen && isPoem && contentLength > SHORT_LIMIT ? (
            <div className="fadeout" />
          ) : null
      }
      {
          isOpen && isPoem && contentLength > SHORT_LIMIT ? (
            <div className="contentSpacer" />
          ) : null
      }
      {
            isPoem && contentLength > SHORT_LIMIT ? (
              <button
                onClick={() => setOpen(!isOpen)}
                type="button"
                className="toggleButton"
              >
                {!isOpen ? 'Weiterlesen' : 'Schließen'}
              </button>
            ) : null
        }
    </StyledCard>
  );
};


export default Card;
