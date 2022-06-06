import styled from 'styled-components';

const TitleText = styled.div`
    color: #fff;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;

    font-size: ${props => props.size};
`;
export default TitleText;
