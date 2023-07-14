
import React from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../components/construction/Backdrop';
import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';
import NavigationItem from '../components/navigation/NavigationItem';
import GlobalStyle from '../containers/GlobalStyle';

const useContainer = (children, coverImage, animation) => (
    <Backdrop coverImage={coverImage} animation={animation}>
        <div className="backdrop-blur">
            <Header>
                <Link id="title" to="/" style={{ textDecoration: 'none' }}>Re:Faith</Link>
            </Header>
            <Navigation>
                <NavigationItem navId="poetry" to="/poetry">Poesie</NavigationItem>
                <NavigationItem navId="art" to="/art">Kunst</NavigationItem>
                <NavigationItem navId="about" to="/about">Über</NavigationItem>
                <NavigationItem navId="imprint" to="/imprint">Impressum</NavigationItem>
            </Navigation>
            { children }
            <GlobalStyle />
        </div>
    </Backdrop>
);

export default useContainer;
