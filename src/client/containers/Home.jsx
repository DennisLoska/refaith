import React from 'react';
import styled from 'styled-components';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import AlbumCover from '../assets/images/zeitkapsel.png';

const StyledHome = styled.div`
    display: flex;
    padding-top: 50px;
    justify-content: center;
    flex-wrap: wrap;
`;

const Home = () => useContainer(
  <StyledHome>
    <Card width="45em" height="fit-content">
      <h2>Starte den Glauben neu!</h2>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit tempora alias excepturi magni commodi deserunt, ab quod accusamus odit possimus quis dolores voluptatum quas exercitationem necessitatibus illo voluptas expedita dolore!
      Magni quaerat soluta dolor itaque asperiores. Necessitatibus, voluptatum. Similique, delectus odio ducimus in repudiandae vitae voluptate, eos doloremque expedita, et ratione dolorum reiciendis! Omnis perspiciatis saepe nesciunt sed odio optio.
      Obcaecati eos, a, harum inventore maiores in amet doloremque incidunt ipsam corporis nesciunt saepe magnam ad non sit omnis fugit itaque, animi quibusdam aperiam laboriosam enim dolorum commodi? Ducimus, illo!
      Pariatur tenetur illo nisi cumque inventore beatae! Enim ratione consequuntur sapiente ex tempore libero pariatur excepturi ducimus, voluptatem totam nam, vero facere repellat commodi neque! A ipsam repudiandae voluptate consequuntur?
      Iste tempora nam veniam commodi saepe totam magni aspernatur odio aliquam natus rerum est repudiandae id, dolorum, in tempore inventore ipsa aperiam. Facere doloremque voluptas totam velit quod earum facilis.
      Esse similique accusantium explicabo, nihil assumenda ipsam repudiandae. Recusandae, dignissimos! Voluptatem facere nesciunt id sint beatae mollitia, neque dolor tenetur saepe sapiente quidem ratione culpa soluta error praesentium? Deserunt, dicta.
    </Card>
    <Card
      width="425px"
      height="fit-content"
      padding="0"
      background="none"
      border="none"
      boxShadow="none"
    >
      <img src={AlbumCover} width="100%" alt="Zeitkapsel Albumcover" />
    </Card>
  </StyledHome>
);

export default Home;
