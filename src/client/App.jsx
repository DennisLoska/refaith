import React, { useState, useEffect } from 'react';
import './App.scss';

const App = () => {
  // setup initial component state
  const [data, setData] = useState(null);
  return (
    <div className="colorBackdrop">
      <div className="titleContainer">
        <div className="titleContainer__title">Re:Faith</div>
        <div className="titleContainer__subtitle">Seite wird aktuell bearbeitet!</div>
      </div>
    </div>
  );
};

export default App;
