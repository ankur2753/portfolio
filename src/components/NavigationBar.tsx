import React from 'react'
import DirectionButton from './DirectionButton'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav>
            <DirectionButton to='#' text='Home' />
            <DirectionButton to='#' text='About Me' />
            <DirectionButton to='#' text='Contact' />
            <DirectionButton to='#' text='Projects' />
            <DirectionButton to='#' text='Experience' />
        </nav>
    )
}

export default NavigationBar