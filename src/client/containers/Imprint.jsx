
import React from 'react';
import styled from 'styled-components';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import BackgroundImage from '../assets/images/forest-far.webp';

const StyledAbout = styled.article`
    display: flex;
    padding-top: 25px;
    justify-content: center;
    flex-wrap: wrap;
`;

const Imprint = () => useContainer(
  <StyledAbout>
    <Card width="20em" height="fit-content">
      <h2>Impressum</h2>
      <p>Verantwortlich im Sinne des § 5 TMG:</p>
      <p>
        <span>Dennis Loska</span>
        <br />
        <span>Schwielowseestr. 38</span>
        <br />
        <span>13599 Berlin</span>
      </p>
      <p>Kontakt:</p>
      <span>d.loska@proton.me</span>
    </Card>
  </StyledAbout>,
  BackgroundImage
);

export default Imprint;
