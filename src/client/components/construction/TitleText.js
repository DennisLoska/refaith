import styled from 'styled-components';

const TitleText = styled.div`
    color: #fff;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    margin-bottom: 25px;
    font-size: ${props => props.size};

    a {
        display: inline-block;
        width: 100%;
        color: #fff;
        text-decoration: none;
        text-shadow: 0 0 20px var(--active-color);
    }
`;
export default TitleText;
