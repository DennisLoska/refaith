
import React from 'react';
import Markdown from 'markdown-to-jsx';
import CardWrapper from '../components/card/CardWrapper';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import BackgroundImage from '../assets/images/tree.webp';

const importAll = r => r.keys().map(r);

// import all poem markdown files dynamically
const poems = importAll(require.context('../content/poems', false, /\.(md)$/));

const Poetry = () => useContainer(
  <CardWrapper padding="25px 6.8%">
    {
      Array.isArray(poems) ? (
        poems.map(poem => (
          <Card
            height="fit-content"
            key={new Date().getTime() + Math.floor(Math.random() * 42069)}
            isPoem
          >
            <Markdown className="poem">{poem?.default}</Markdown>
          </Card>
        ))) : null
    }
  </CardWrapper>,
  BackgroundImage
);

export default Poetry;
