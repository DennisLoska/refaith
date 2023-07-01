import React, { useMemo, useRef } from 'react';
import Markdown from 'markdown-to-jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Virtuoso } from 'react-virtuoso';
import CardWrapper from '../components/card/CardWrapper';
import Card from '../components/card/Card';
import useContainer from '../hooks/useContainer';
import BackgroundImage from '../assets/images/optimized/library.webp';

const importAll = r => r.keys().map(r);

const Poetry = () => {
    const virtuoso = useRef(null);

    const poems = useMemo(() => importAll(
        require.context('../content/poems', false, /\.(md)$/)
    ));

    console.log(poems[0]);

    const illustrations = useMemo(() => importAll(
        require.context('../assets/images/poems/optimized', false, /\.(webp)$/)
    ).sort(() => Math.random() - 0.5));

    const Poem = useMemo(() => ({ i }) => (
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
    ));

    // {Array.isArray(poemList) && poemList}
    return useContainer(
        <CardWrapper padding="50px 0px">
            {
                Array.isArray(poems) && Array.isArray(illustrations) && (
                <>
                    <Virtuoso
                        useWindowScroll
                        style={{
                            width: '100%',
                            filter: 'drop-shadow(2px 4px 6px black)'
                        }}
                        ref={virtuoso}
                        components={{
                            Footer: () => (
                                <div
                                    style={{
                                        padding: '1rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="scroll-button"
                                        onClick={() => {
                                            virtuoso.current.scrollToIndex({
                                                index: 0, align: 'end', behavior: 'smooth'
                                            });
                                            return false;
                                        }}
                                    >
                                        <i className="arrow-up" />
                                    </button>
                                </div>
                            ),
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
