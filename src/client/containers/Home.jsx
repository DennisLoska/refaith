import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../components/card/CardWrapper';
import useContainer from '../hooks/useContainer';
import TitleWrapper from '../components/construction/TitleWrapper';
import TitleText from '../components/construction/TitleText';

const StyledHome = styled.div`
    display: flex;
    padding-top: 50px;
    justify-content: center;
    flex-wrap: wrap;
    height: 80vh;
`;

const Home = () => useContainer(
  <StyledHome>
    <CardWrapper>
      <TitleWrapper>
        <TitleText size="4em">
          Starte den Glauben neu!
        </TitleText>
      </TitleWrapper>
    </CardWrapper>
  </StyledHome>
);

export default Home;
