import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';

const StyledAbout = styled.article`
    display: flex;
    padding-top: 25px;
    justify-content: center;
    flex-wrap: wrap;
`;

const About = () => useContainer(
  <StyledAbout>
    <Card width="45em" height="fit-content">
      <h2>Über Re:Faith</h2>
      <p>
        Auf dieser Seite teile ich meine Gedanken darüber, was es bedeutet, ein guter Mensch zu sein. Für mich bedeutet das kurz gesagt das Vorbild, was Jesus vorgelebt hat, so gut es geht, im eigenen Leben zu verwirklichen und so selber ein Licht zu sein. Natürlich teile ich damit auch ein Stück weit mein persönliches Leben, meine Vergangenheit, Erfahrungen und Ziele.
      </p>
      <p>
        Hier geht es
        {' '}
        <b>nicht</b>
        {' '}
        um Ideologien, Religion oder das Christentum. Der Mensch als Individuum steht für mich im Vordergrund. Es geht um
        {' '}
        <b>Glaube, Hoffnung, Liebe</b>
        {', '}
        Treue, Vertrauen, Mut und weitere Eigenschaften, die in meinen Augen die Welt zu einem besseren Ort machen.
      </p>
      <p>
        Kunst geht nicht fremd. Kunst ist Ausdruck dessen, was bereits in einem Menschen steckt. Zeige mir deine Kunst,
        und ich sage dir, wer du wirklich bist. Manche Künste muss man opfern, um Frieden mit Gott zu haben. Musik ist die höchste Form von Kunst. Jede andere Kunstart strebt den Wesenszustand der Musik an. Musik kann für Chaos sorgen, aber auch das Gemüt wieder besänftigen. Zwei Geschenkschleifen können ein gebrochenes Herz erschreckend leicht ersticken.
        Musik sucht die Balance zwischen Ordnung und Chaos, da sie sonst zu langweilig oder überwältigend ist.
      </p>
      <p>
        Poetry Slams sind irgendwo zwischen Musik und Gedicht zu finden. Die Melodie ist zwar leicht vorhersehbar, doch die Worte sind es hierbei, die die Musik machen. Manche meiner Texte bleiben Gedichte, andere werden zu Liedern oder zu Poetry Slams. Eine Auswahl meiner Texte findet ihr
        {' '}
        <Link to="/poetry" style={{ textDecoration: 'none' }}>hier</Link>
        .
      </p>
      <p>
        Ich habe selbst noch nicht die endgültige Antwort darauf gefunden, für welche Zwecke Musik am Besten geeignet ist. Sollte man verschiedene Genres moralisch bewerten? Zu welchen Aktivitäten sollte man Musik hören? Sollte man jedes beliebige Thema in einem Lied ansprechen dürfen, oder kommt das einem Missbrauch gleich?
        Was ist eine gesunde Beziehung zu „Kunst“?
      </p>
      <span>Dennis</span>
    </Card>
  </StyledAbout>
);

export default About;
