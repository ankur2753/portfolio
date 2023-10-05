import React from 'react'
import './Card.css'
const Card: React.FC<{ Heading: React.JSX.Element | string, footer: React.JSX.Element | string, Tags: string[] }> = ({ Heading, footer, Tags }) => {
    return (
        <div className="card">
            <div className="main-content">
                <div className="header">
                    <span>Article on</span>
                    <span>29-June-2023</span>
                </div>
                <p className="heading">{Heading}</p>
                <div className="categories">
                    {Tags.map(tag => <span>{tag}</span>)}
                </div>
            </div>
            <div className="footer">
                {footer}
            </div>
        </div>
    )
}

export default Card