import React from 'react'
import './Card.css'

interface CardProps { Heading: React.JSX.Element | string, footer: React.JSX.Element | string, content: string }

const Card: React.FC<CardProps> = ({ Heading, content, footer }) => {
    return (
        <div className="card">
            <div className="content">
                <p className="heading">{Heading}</p>
                <p className="para">
                    {content}
                </p>
                <button className="btn">{footer}</button>
            </div>
        </div>
    )
}

export default Card