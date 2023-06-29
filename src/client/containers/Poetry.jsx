import React, { useMemo } from 'react';
import Markdown from 'markdown-to-jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Virtuoso } from 'react-virtuoso';
import CardWrapper from '../components/card/CardWrapper';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import BackgroundImage from '../assets/images/optimized/library.webp';

const importAll = r => r.keys().map(r);

const Poetry = () => {
  const poems = useMemo(() => importAll(
    require.context('../content/poems', false, /\.(md)$/)
  ));

  const illustrations = useMemo(() => importAll(
    require.context('../assets/images/poems/optimized', false, /\.(webp)$/)
  ).sort(() => Math.random() - 0.5));

  const Poem = useMemo(() => ({ i }) => (
    window.innerWidth <= 1024 ? (
      <Card
        height="fit-content"
        isPoem
        padding="0 0 25px 0"
        margin="0px auto 50px"
        key={`poem-${i}`}
      >
        <div style={{ height: 'fit-content', overflow: 'hidden' }}>
          <LazyLoadImage
            alt="Poem illustration"
            src={illustrations[i < illustrations.length ? i : Math.ceil(i * 0.5)]}
            width="100%"
          />
        </div>
        <Markdown className="poem">{poems[i]?.default}</Markdown>
      </Card>
    ) : (
      <Card
        height="fit-content"
        isPoem
        padding="0 0 25px 0"
        margin="0px auto 50px"
        key={`poem-${i}`}
      >
        <div style={{ height: 'fit-content', overflow: 'hidden' }}>
          <LazyLoadImage
            alt="Poem illustration"
            src={illustrations[i < illustrations.length ? i : Math.ceil(i * 0.5)]}
            width="100%"
          />
        </div>
        <Markdown className="poem">{poems[i]?.default}</Markdown>
      </Card>
    )
  ));

  // {Array.isArray(poemList) && poemList}
  return useContainer(
    <CardWrapper padding="50px 0px">
      {
        Array.isArray(poems) && Array.isArray(illustrations) && (
          <>
            <Virtuoso
              style={{
                height: '75vh',
                width: '100%',
                overflowX: 'hidden'
              }}
              totalCount={poems.length}
              itemContent={index => (
                <Poem i={index} />
              )}
            />
          </>
        )
      }
    </CardWrapper>,
    BackgroundImage
  );
};
export default Poetry;
