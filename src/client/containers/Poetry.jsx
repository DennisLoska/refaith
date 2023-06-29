import React, { useMemo, Suspense } from 'react';
import Markdown from 'markdown-to-jsx';
import CardWrapper from '../components/card/CardWrapper';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import BackgroundImage from '../assets/images/library.webp';

const importAll = r => r.keys().map(r);

const Poetry = () => {
  // const [poems, setPoems] = useState(null);
  // const [illustrations, setIllustrations] = useState(null);
  const poems = useMemo(() => importAll(
    require.context('../content/poems', false, /\.(md)$/)
  ));
  const illustrations = useMemo(() => importAll(
    require.context('../assets/images/poems', false, /\.(webp)$/)
  ));

  return useContainer(
    <CardWrapper padding="25px 6.8%">
      {
      Array.isArray(poems) ? (
        poems.map((poem, i) => (
          window.innerWidth <= 1024 ? (
            <Card
              height="fit-content"
              isPoem
              style={{ cursor: 'pointer' }}
              padding="0 0 25px 0"
              key={`poem-${i}`}
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
            <Card
              height="fit-content"
              isPoem
              padding="0 0 25px 0"
              style={{ cursor: 'pointer' }}
              key={`poem-${i}`}
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
          )
        ))) : null
        }
    </CardWrapper>,
    BackgroundImage
  );
};
export default Poetry;
