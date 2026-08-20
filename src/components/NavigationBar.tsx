import React, { useState } from 'react'
import DirectionButton from './DirectionButton'
import './NavigationBar.css'

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="nav-container">
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={isOpen ? "open" : ""}>
                <DirectionButton to='#home' text='Home' />
                <DirectionButton to='#about' text='About Me' />
                <DirectionButton to='#projects' text='Projects' />
                <DirectionButton to='#experience' text='Experience' />
            </nav>
        </div>
    )
}

export default NavigationBar