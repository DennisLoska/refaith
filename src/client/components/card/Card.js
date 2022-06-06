import styled from 'styled-components';

const Card = styled.div`
    border-radius: 5px;
    min-height: 400px;
    min-width: 300px;
    width: ${props => props.width || '300px'};
    margin: ${props => props.margin || '25px'};
    padding: ${props => props.padding || '25px'};
    height: ${props => props.height || '400px'};
    background: ${props => props.background || '#F8F8F8'}; 
    border: ${props => props.border}; 
    box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 
    -webkit-box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 
    -moz-box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 

    img {
        border-radius: 5px;
    }
`;

export default Card;
