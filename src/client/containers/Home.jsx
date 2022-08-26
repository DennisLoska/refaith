import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardWrapper from '../components/card/CardWrapper';
import useContainer from '../hooks/useContainer';
import TitleWrapper from '../components/construction/TitleWrapper';
import TitleText from '../components/construction/TitleText';
import BackgroundImage from '../assets/images/riverside.jpg';
import HomeButton from '../components/buttons/HomeButton';
import Row from '../components/row/Row';

const StyledHome = styled.div`
    display: flex;
    padding-top: 50px;
    justify-content: center;
    flex-wrap: wrap;
    height: 80vh;
`;

const Home = () => useContainer(
  (() => {
    const history = useNavigate();
    return (
      <StyledHome>
        <CardWrapper>
          <TitleWrapper>
            <TitleText size="4em">
              Starte den Glauben neu!
            </TitleText>
            <Row horizontalAlignment="center">
              <HomeButton isFull onClick={() => history('/poetry')}>
                Meine Poesie
              </HomeButton>
              <HomeButton onClick={() => history('/about')}>
                Über Re:Faith
              </HomeButton>
            </Row>
          </TitleWrapper>
        </CardWrapper>
      </StyledHome>

    );
  })(),
  BackgroundImage
);

export default Home;
