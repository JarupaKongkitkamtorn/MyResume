import React from 'react';
import { handleScroll } from '../function/smooth'

interface ScrollProps {
    id: string,
}

const Scroll: React.FC<ScrollProps> = ({ id }) => {
    return (
        <div style={{ cursor: "pointer" }} onClick={() => handleScroll(id)}>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="textscroll">Scroll down</span>
        </div>
    );
}

export default Scroll;