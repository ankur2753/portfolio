import React from 'react';
import './DirectionButton.css';

const DirectionButton: React.FC<{ text: string, to: string }> = ({ text, to }) => {
    return (
        <button className="button">
            <a href={to}>
                {text}
            </a>
        </button>
    );
};

export default DirectionButton;
