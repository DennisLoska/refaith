import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    padding: ${props => (props.padding ? props.padding : '25px 10%')};
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 768px) {
        padding: 50px 0;
    }

    .scroll-button {
        display: block;
        cursor: pointer;
        margin: 0px auto 50px auto;
        background: unset;
        border: unset;
    }

    .arrow-up {
        border: solid white;
        border-width: 0 9px 9px 0;
        width: 30px;
        height: 30px;
        display: inline-block;
        padding: 3px;
        margin-top: 10px;
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        filter: drop-shadow(2px 4px 6px black);

        
        @keyframes floating {
            0% { transform: translate(0,  0px) rotate(-135deg); }
            50%  { transform: translate(0, -15px) rotate(-135deg); }
            100%   { transform: translate(0, 0px) rotate(-135deg); }   
        }
    
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation: floating 3s ease-in-out infinite;
        
    }
`;

export default Card;
