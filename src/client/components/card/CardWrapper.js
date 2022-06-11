import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    padding: 25px 10%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 768px) {
        padding: 50px 0;
    }
`;

export default Card;
