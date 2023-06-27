import React from 'react';
import Markdown from 'markdown-to-jsx';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
import CardWrapper from '../components/card/CardWrapper';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import BackgroundImage from '../assets/images/library.webp';

const importAll = r => r.keys().map(r);

// import all poem markdown files dynamically
const poems = importAll(require.context('../content/poems', false, /\.(md)$/))
  .sort(() => 0.5 - Math.random());
const illustrations = importAll(require.context('../assets/images/poems', false, /\.(webp)$/))
  .sort(() => 0.5 - Math.random());

console.log(window);
const Poetry = () => useContainer(
  <CardWrapper padding="25px 6.8%">
    {
      Array.isArray(poems) ? (
        poems.map((poem, i) => (
          window.innerWidth <= 1024 ? (
            <Card
              height="fit-content"
              className="dragHandling"
              isPoem
              style={{ cursor: 'pointer' }}
              padding="0 0 25px 0"
              key={uuidv4()}
            >
              <div style={{ height: '340px', overflow: 'hidden' }}>
                <img
                  src={illustrations[i < illustrations.length ? i : Math.ceil(i * 0.5)]}
                  width="100%"
                  alt="Poem illustration"
                  style={{ marginBottom: '0px', borderRadius: '0px', maxHeight: '560px' }}
                />
              </div>
              <Markdown className="poem">{poem?.default}</Markdown>
            </Card>
          ) : (
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
                padding="0 0 25px 0"
                style={{ cursor: 'pointer' }}
              >
                <div style={{ height: '550px', overflow: 'hidden' }}>
                  <img
                    src={illustrations[i]}
                    width="100%"
                    alt="Poem illustration"
                    style={{ marginBottom: '0px', borderRadius: '0px', maxHeight: '560px' }}
                  />
                </div>
                <Markdown className="poem">{poem?.default}</Markdown>
              </Card>
            </Draggable>
          )
        ))) : null
    }
  </CardWrapper>,
  BackgroundImage
);

export default Poetry;
