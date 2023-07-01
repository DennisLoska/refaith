import React, { useMemo, useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CardWrapper from '../components/card/CardWrapper';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import BackgroundImage from '../assets/images/optimized/library.webp';
import List from '../components/virtuoso/List';

const importAll = r => r.keys().map(r);

const Poetry = () => {
    const [viewMode, toggleViewMode] = useState(false);

    const poems = useMemo(() => importAll(
        require.context('../content/poems', false, /\.(md)$/)
    ));

    const illustrations = useMemo(() => importAll(
        require.context('../assets/images/poems/optimized', false, /\.(webp)$/)
    ).sort(() => Math.random() - 0.5));

    const Poem = useMemo(() => ({ index: i }) => (
        <Card
            height="fit-content"
            isPoem
            padding="0 0 25px 0"
            margin="0px auto 50px"
            key={`poem-${i}`}
        >
            <div style={{ height: 'fit-content', overflow: 'hidden', position: 'relative' }}>
                <span className="poem-title">
                    { poems[i]?.default?.split?.('\n')?.[0]?.replace?.('#', '')?.trim?.() ?? '' }
                </span>
                <LazyLoadImage
                    alt="Poem illustration"
                    src={illustrations[i < illustrations.length ? i : Math.ceil(i * 0.5)]}
                    width="100%"
                />
            </div>
            <Markdown className="poem">
                {poems?.[i]?.default?.split?.('\n').splice?.(1).join?.('\n')}
            </Markdown>
        </Card>
    ), [poems]);

    return useContainer(
        <CardWrapper padding="50px 0px">
            <label
                className="viewmode-switch"
                htmlFor="list"
                onClick={() => toggleViewMode(prevState => !prevState)}
            >
                <input
                    type="checkbox"
                    name="list"
                    checked={viewMode}
                    readOnly
                />
                <div>
                    <span />
                </div>
            </label>
            {
                Array.isArray(poems) && Array.isArray(illustrations) && (
                    <List
                        asyncMode={viewMode}
                        items={poems}
                        content={index => <Poem index={index} />}
                    />
                )
            }
        </CardWrapper>,
        BackgroundImage,
        true
    );
};
export default Poetry;
