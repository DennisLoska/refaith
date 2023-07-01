import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';

import Loader from './containers/Loader';

// const Construction = lazy(() => import('./containers/Construction'));
const Home = lazy(() => import('./containers/Home'));
const About = lazy(() => import('./containers/About'));
const Music = lazy(() => import('./containers/Music'));
const Videos = lazy(() => import('./containers/Videos'));
const Imprint = lazy(() => import('./containers/Imprint'));
const Poetry = lazy(() => import('./containers/Poetry'));

// render the root component App
ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/poetry" element={<Poetry />} />
                {
                    /*
                        <Route path="/music" element={<Music />} />
                    */
                }
                <Route path="/videos" element={<Videos />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </HashRouter>
    </Suspense>,
    document.getElementById('root')
);
