import React, { useMemo } from 'react';
import Markdown from 'markdown-to-jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CardWrapper from '../components/card/CardWrapper';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import BackgroundImage from '../assets/images/optimized/library.webp';

const importAll = r => r.keys().map(r);

const createPoems = (poems, illustrations) => poems.map((poem, i) => (
  window.innerWidth <= 1024 ? (
    <Card
      height="fit-content"
      isPoem
      style={{ cursor: 'pointer' }}
      padding="0 0 25px 0"
      key={`poem-${i}`}
    >
      <div style={{ height: '340px', overflow: 'hidden' }}>
        <LazyLoadImage
          alt="Poem illustration"
          src={illustrations[i < illustrations.length ? i : Math.ceil(i * 0.5)]}
          width="100%"
        />
      </div>
      <Markdown className="poem">{poem?.default}</Markdown>
    </Card>
  ) : (
    <Card
      height="fit-content"
      isPoem
      padding="0 0 25px 0"
      key={`poem-${i}`}
    >
      <div style={{ height: 'fit-content', overflow: 'hidden' }}>
        <LazyLoadImage
          alt="Poem illustration"
          src={illustrations[i < illustrations.length ? i : Math.ceil(i * 0.5)]}
          width="100%"
        />
      </div>
      <Markdown className="poem">{poem?.default}</Markdown>
    </Card>
  )
));

const Poetry = () => {
  const poems = useMemo(() => importAll(
    require.context('../content/poems', false, /\.(md)$/)
  ));

  const illustrations = useMemo(() => importAll(
    require.context('../assets/images/poems/optimized', false, /\.(webp)$/)
  ).sort(() => Math.random() - 0.5));

  const poemList = useMemo(
    () => createPoems(poems, illustrations),
    [poems, illustrations]
  );

  return useContainer(
    <CardWrapper padding="25px 6.8%">
      {Array.isArray(poemList) && poemList}
    </CardWrapper>,
    BackgroundImage
  );
};
export default Poetry;
