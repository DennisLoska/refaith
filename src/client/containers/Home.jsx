import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardWrapper from '../components/card/CardWrapper';
import useContainer from '../hooks/useContainer';
import TitleWrapper from '../components/construction/TitleWrapper';
import TitleText from '../components/construction/TitleText';
import BackgroundImage from '../assets/images/optimized/disciple.webp';
import HomeButton from '../components/buttons/HomeButton';
import Row from '../components/row/Row';

const StyledHome = styled.div`
    display: flex;
    padding-top: 50px;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 80vh;
    height: fit-content;
`;

const Home = () => useContainer(
    (() => {
        const history = useNavigate();
        return (
            <StyledHome>
                <CardWrapper>
                    <TitleWrapper>
                        <TitleText size="4em">
                            Christlicher Glaube in Poesie. Ein Versuch die Wahrheit in Worte zu fassen.
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
                    <TitleText size="1em">
                        <a
                            href="https://redeemedblog.jimdofree.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Inspiriert durch Redeemed
                        </a>
                    </TitleText>
                </CardWrapper>
            </StyledHome>
        );
    })(),
    BackgroundImage
);

export default Home;
