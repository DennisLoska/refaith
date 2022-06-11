import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    border-radius: 5px;
    min-height: 400px;
    min-width: 300px;
    width: ${props => props.width || '300px'};
    margin: ${props => props.margin || '25px'};
    padding: ${props => props.padding || '25px'};
    height: ${props => props.height || '500px'};
    background: ${props => props.background || '#F8F8F8'}; 
    border: ${props => props.border}; 
    box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 
    -webkit-box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 
    -moz-box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'};
    height: ${props => (props.isOpen || !props.isPoem ? props.height : '500px')};
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
      text-align: center;
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
  const { isPoem, children, height } = props;

  return (
    <StyledCard {...props} isOpen={isOpen}>
      { children }
      {
          !isOpen && isPoem ? (
            <div className="fadeout" />
          ) : null
      }
      {
          isOpen && isPoem ? (
            <div className="contentSpacer" />
          ) : null
      }
      {
            isPoem ? (
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
