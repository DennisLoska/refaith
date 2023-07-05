/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
// import BackgroundImage from '../assets/images/optimized/cathedral_person2.webp';
import BackgroundImage from '../assets/images/poems/optimized/cathedral3.webp';

const StyledAbout = styled.article`
    display: flex;
    padding-top: 25px;
    justify-content: center;
    flex-wrap: wrap;

    .italic {
      font-style: italic;
    }
`;

const About = () => useContainer(
    <StyledAbout>
        <Card width="100%" background="transparent" boxShadow="unset" padding="unset" margin="unset">
            <Card width="45em" margin="25px auto" height="fit-content">
                <h3>Charakter und Ziele</h3>
                <p>
                    Auf dieser Seite teile ich meine Gedanken darüber, was es bedeutet, ein guter Mensch zu sein.
                    Für mich bedeutet das kurz gesagt das Vorbild, was Jesus vorgelebt hat, so gut es geht, im eigenen Leben zu verwirklichen und so selber ein Licht zu sein.
                    Ein reiner Charakter und ein moralisch einwandfreies Wesen sind das Ziel meines Glaubens.
                    Darin sehe ich die Erfüllung des Gebotes, Gott zu lieben.
                    Natürlich teile ich damit auch ein Stück weit mein persönliches Leben, meine Vergangenheit, Erfahrungen und Ziele.
                </p>
                <p>
                    Es geht mir also nicht um Ideologien, Religion oder das Christentum.
                    Der Mensch als Individuum steht für mich im Vordergrund.
                    Es geht um Glaube, Hoffnung, Liebe, Treue, Vertrauen, Mut und weitere Eigenschaften, die in meinen Augen die Welt zu einem besseren Ort machen.
                    Totalitäre System wie etwa unter der Sowjetunion oder dem NS-Regime konnten nur existieren, weil der Großteil der Individuen in diesen Gesellschaften ihre moralischen Prinzipien und Charakter zugunsten von kurzfristigem Frieden eintauschten.
                    Sie tauschten die Wahrheit gegen die Lüge.
                    Damit meine ich nicht eine objektive Wahrheit, sondern die subjektive Wahrheit jeder einzelnen Person, die wusste, dass das eigene Handeln nicht der Wahrheit gemäß ist.
                </p>
            </Card>
        </Card>
        <Card width="100%" background="transparent" boxShadow="unset" padding="unset" margin="unset">
            <Card width="45em" margin="25px auto" height="fit-content">
                <h3>Wozu die Kunst?</h3>
                <p>
                    Wenn Kunst fremdgeht, dann lass sie in Nietzsche&apos;s Abgrund stolpern, damit sie von den selben Monstern verzehrt wird, die sie hervorgerufen hat!
                    Ich sehe Kunst als einen dezentralen Dialog, welcher generations- und kulturübergreifend stattfindet.
                    Dieser von Zeit und Raum unabhängige Dialog wird gefüttert und unterschiedliche Strömungen entstehen.
                    Vielleicht fließen diese Ströme zusammen und bilden ein Meer an Ideen, Archetypen und Charakteren, die man nach Carl Jung als kollektives Unterbewusstsein der Kunst charakterisieren könnte.
                </p>
                <p>
                    Die Kunst eines Menschen ist Ausdruck dessen, was bereits in einem Menschen steckt und welche Antwort er dem Dialog der Kunst beisteuern möchte.
                    In welche Richtung möchte der Künstler die Konversation leiten?
                    Möchte der Künstler das Ideenmeer zu einer süßen oder einer bitteren Quelle machen? Sind die Archetypen edler oder niederer Natur?
                    Zeige mir deine Kunst, und ich sage dir, wer du wirklich bist.
                    Manche Künste muss man opfern, um Frieden mit Gott zu haben, weil ihr Charakter dem Wesen Gottes nicht entspricht.
                    Wie kann sogenannte Kunst, wo sich Menschen halb nackt zeigen, den Anspruch einer Allianz mit der höchsten moralischen Instanz erheben, wenn sie gleichzeitig archetypisch die Charaktereigenschaften der Schlange Eden's annimmt.
                    Denn List und Nacktheit sind eng miteinander verbunden und die Schlange war listiger, als alle Tiere im Garten.
                    Schon Dostoevsky traf die Aussage durch den Charakter Prinz Myshkin im Roman &quot;Der Idiot&quot;, dass Schönheit die Welt retten werde, doch ist dies nicht der Fall, wenn diese Schönheit pervertiert und missbraucht wird und am Ende dieses Prozesses dem Ganzen das Wort &quot;Kunst&quot; angeklebt wird.
                    Ein schönes Wesen und Charakter, welche einen schönen Körper und eine schöne Umgebung in ordentlicher Art und Weise hervorbringen, sind in der Lage, die Welt zu retten.
                    Diese Schönheit hat in der Tat etwas Göttliches an sich.
                </p>
            </Card>
        </Card>
        <Card width="100%" background="transparent" boxShadow="unset" padding="unset" margin="unset">
            <Card width="45em" margin="25px auto" height="fit-content">
                <h4>Musik ist besonders</h4>
                <p>
                    Musik ist die höchste Form von Kunst.
                    Jede andere Art der Kunst strebt den Wesenszustand der Musik an.
                    Musik ist genau dann am schönsten, wenn sie die Gratwanderung an der Grenze zwischen Ordnung und Chaos vollbringt.
                    Ist sie zu geordnet, ist sie zu langweilig.
                    Ist sie zu chaotisch, geht die Harmonie verloren oder ist zu komplex für uns, um sie noch wahrzunehmen.
                </p>
                <p>
                    Ich denke oft darüber nach, für welche Zwecke Musik genutzt werden sollte.
                    Während des Sports, beim Tanzen oder nur, um Gott zu loben, wenn man Christ sein möchte?
                    Sollte man verschiedene Genres oder Instrumente moralisch bewerten?
                    Sollte man jedes beliebige Thema in einem Lied ansprechen dürfen, oder kommt das einem Missbrauch gleich?
                    Heutzutage haben Menschen spirituelle Erfahrungen, wenn sie auf Musikfestivals gehen.
                    Damit haben sie im Prinzip den Gang in die Kirche ersetzt, was früher ein Fenster zur transzendentalen Realität war, aber in unserer Gesellschaft mehr und mehr verachtet wird, wahrscheinlich auch zurecht.
                    Vielleicht findet man auf einem Indie-Festival ehrlichere Charaktere als in einer Kirche, was lediglich ein Zeugnis für den charakterlichen Verfall der sogenannten christlichen Gemeinden wäre.
                </p>
                <p>
                    Musik sucht die Balance zwischen Ordnung und Chaos, da sie sonst zu langweilig oder überwältigend ist.
                    Manche meiner Texte bleiben Gedichte, andere werden zu Liedern oder zu Poetry-Slams.
                    Eine Auswahl meiner Texte findet ihr
                    {' '}
                    <Link to="/poetry" style={{ textDecoration: 'none' }}>hier</Link>
                    .
                </p>
                <span className="italic">
                    Zwei Geschenkschleifen können ein gebrochenes Herz erschreckend leicht ersticken.
                </span>
                <p>{' '}</p>
                <span>Dennis</span>
            </Card>
        </Card>
    </StyledAbout>,
    BackgroundImage,
    true
);

export default About;
