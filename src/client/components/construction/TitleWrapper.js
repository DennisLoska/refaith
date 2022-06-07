import styled from 'styled-components';

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 25px;

    a {
        display: block;
        width: 30%;

        img {
            &:hover {
                box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 
                -webkit-box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 
                -moz-box-shadow: ${props => props.boxShadow || '3px 2px 18px rgba(0, 0, 0, 0.3)'}; 
            }
        }
    }
`;

export default TitleWrapper;
