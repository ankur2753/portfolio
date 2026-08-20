import React, { useState } from 'react'
import './Card.css'

interface CardProps { 
    Heading: React.JSX.Element | string, 
    footer: React.JSX.Element | string, 
    content: string,
    backContent?: string,
    pills?: string[]
}

const Card: React.FC<CardProps> = ({ Heading, content, footer, backContent, pills }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    return (
        <div 
            className={`card-container ${isFlipped ? 'flipped' : ''} ${isTouched ? 'touched' : ''}`} 
            onClick={() => setIsFlipped(!isFlipped)}
            onTouchStart={() => setIsTouched(true)}
            onTouchEnd={() => setIsTouched(false)}
            onTouchCancel={() => setIsTouched(false)}
        >
            <div className="card-inner">
                <div className="card card-front">
                    <div className="content">
                        <p className="heading">{Heading}</p>
                        <p className="para">{content}</p>
                        <button className="btn">{footer}</button>
                    </div>
                </div>
                <div className="card card-back">
                    <div className="content">
                        <p className="heading">{Heading}</p>
                        <p className="para">{backContent}</p>
                        <div className="pills">
                            {pills?.map(pill => <span key={pill} className="pill">{pill}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card