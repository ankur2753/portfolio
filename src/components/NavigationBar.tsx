import React from 'react'
import DirectionButton from './DirectionButton'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav>
            <DirectionButton to='#home' text='Home' />
            <DirectionButton to='#about' text='About Me' />
            <DirectionButton to='#projects' text='Projects' />
            <DirectionButton to='#experience' text='Experience' />
        </nav>
    )
}

export default NavigationBar