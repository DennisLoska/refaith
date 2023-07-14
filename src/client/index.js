import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';

import Loader from './containers/Loader';
import Art from './containers/Art';

const Home = lazy(() => import('./containers/Home'));
const About = lazy(() => import('./containers/About'));
const Imprint = lazy(() => import('./containers/Imprint'));
const Poetry = lazy(() => import('./containers/Poetry'));

ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/poetry" element={<Poetry />} />
                <Route path="/art" element={<Art />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </HashRouter>
    </Suspense>,
    document.getElementById('root')
);
