import React, {
    useMemo, useRef
} from 'react';
import { Virtuoso } from 'react-virtuoso';
import Footer from './Footer';

const List = ({ items, content, asyncMode = false }) => {
    const data = useMemo(() => items, [items]);
    const columns = useMemo(() => content, [items]);
    const virtuoso = useRef(null);

    return (
        !asyncMode ? (
            <Virtuoso
                useWindowScroll
                style={{
                    width: '100%',
                    filter: 'drop-shadow(2px 4px 6px black)'
                }}
                ref={virtuoso}
                components={{
                    Footer: () => <Footer virtuoso={virtuoso} />
                }}
                totalCount={data.length}
                itemContent={index => (
                    columns(index)
                )}
            />
        ) : data.map((item, index) => content(index))
    );
};

export default List;
