
import React from 'react';
import Markdown from 'markdown-to-jsx';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
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
          <Draggable
            axis="both"
            handle=".dragHandling"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            scale={1}
            bounds="parent"
            key={uuidv4()}
          >
            <Card
              height="fit-content"
              className="dragHandling"
              isPoem
              style={{ cursor: 'pointer' }}
            >
              <Markdown className="poem">{poem?.default}</Markdown>
            </Card>
          </Draggable>
        ))) : null
    }
  </CardWrapper>,
  BackgroundImage
);

export default Poetry;
