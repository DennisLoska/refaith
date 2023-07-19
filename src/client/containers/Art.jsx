
import React, { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import CardWrapper from '../components/card/CardWrapper';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import BackgroundImage from '../assets/images/poems/optimized/cathedral3.webp';
import InfoImage from '../assets/images/optimized/luna.webp';
import List from '../components/virtuoso/List';
import ToggleButton from '../components/buttons/ToggleButton';

const importAll = r => r.keys().map(r);

const StyledModal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
    padding: 50px;
    top: 0;

    button {
        position: absolute;
        border: none;
        background: unset;
        background-color: unset;
        color: #fff;
        margin: 25px;
        font-size: 32px;
        font-weight: 600;
        top: 0;
        right: 0;

        &:hover {
            cursor: pointer;
        }
    }

    img {
        max-width: calc(90% - 100px);
        max-height: 90vh;
        margin: auto;
        display: block;
        border-radius: 5px;
    }
`;

const ImageModal = ({ image, hideModal }) => (
    <StyledModal onClick={hideModal}>
        <button type="button" onClick={hideModal}>X</button>
        <img
            src={image}
            alt="Art"
            onClick={e => e.stopPropagation()}
        />
    </StyledModal>
);

const Art = () => {
    const [viewMode, toggleViewMode] = useState(true);
    const [modal, setModal] = useState(false);
    const [activeImg, setActiveImg] = useState(null);

    const hideModal = () => {
        setModal(false);
        setActiveImg(null);
    };


    const illustrations = useMemo(() => importAll(
        require.context('../assets/images/art/optimized', false, /\.(webp)$/)
    ).sort(() => Math.random() - 0.5));

    const ArtPiece = useMemo(() => ({ index: i }) => (
        <Card
            height="fit-content"
            minHeight="unset"
            width={viewMode ? '42em' : '70em'}
            background="unset"
            boxShadow="unset"
            padding="0"
            margin="0px auto 50px"
            cursor="pointer"
            key={`poem-${i}`}
            onClick={() => {
                setActiveImg(
                    illustrations[i < illustrations.length ? i : Math.ceil(i * 0.5)]
                );
                setModal(true);
            }}
        >
            <div style={{ height: 'fit-content', overflow: 'hidden', position: 'relative' }}>
                <LazyLoadImage
                    alt="Poem illustration"
                    src={illustrations[i < illustrations.length ? i : Math.ceil(i * 0.5)]}
                    width="100%"
                />
            </div>
        </Card>
    ), [illustrations]);

    return useContainer(
        <CardWrapper padding="25px 10% 100px 10%">
            {modal && createPortal(
                <ImageModal image={activeImg} hideModal={hideModal} />, document.body
            )}
            <ToggleButton toggleViewMode={toggleViewMode} viewMode={viewMode} />
            <Card width="100%" background="transparent" boxShadow="unset" padding="unset" margin="unset">
                <Card
                    width="42em"
                    height="fit-content"
                    margin="0px auto 50px auto"
                    backgroundImage={InfoImage}
                    background="unset"
                    color="#fff"
                >
                    <h1>Fenster ins Metaphysische</h1>
                    “A real piece of art is a window into the transcendent, and unless you can make a connection to the transcendent, then you don&apos;t have the strength to prevail” - Jordan Peterson
                    <p>
                        Zu sehen sind hier Kunstwerke, welche ich mit Hilfe von künstlicher Intelligenz erstellt habe.
                        Auch wenn ich die Werke nicht selber gemalt habe, transportieren die Bilder dennoch ansatzweise die Bedeutung von transzendentalen Gefühlswelten.
                    </p>
                    <p>Ich bezeichne mich selbst nicht als Künstler und tatsächlich kann ich auch mit vielem, was sich Kunst nennt, nicht viel anfangen.</p>
                    <p>
                        Zu versuchen dem eigenen Ideal gerecht zu werden und danach zu leben ist eine sehr schwierige Aufgabe.
                        Mit meinen Bildern ist es mir ein Anliegen, Aspekte dieses Prozesses festzuhalten.
                    </p>
                    <p>Mein Ideal ist es, vom Charakter & Wesen her so zu sein wie Jesus!</p>
                </Card>
            </Card>
            {
                Array.isArray(illustrations) && (
                    <List
                        asyncMode={viewMode}
                        items={illustrations}
                        content={index => <ArtPiece index={index} />}
                    />
                )
            }
        </CardWrapper>,
        BackgroundImage,
        Math.random() < 0.5
    );
};
export default Art;
