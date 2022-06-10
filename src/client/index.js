import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Construction from './containers/Construction';
import Home from './containers/Home';
import About from './containers/About';
import Poetry from './containers/Poetry';
import Music from './containers/Music';
import Videos from './containers/Videos';
import Imprint from './containers/Imprint';

// render the root component App
ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/poetry" element={<Poetry />} />
      <Route path="/music" element={<Music />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/imprint" element={<Imprint />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
