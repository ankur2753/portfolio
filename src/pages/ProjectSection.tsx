import React from 'react'
import Card from '../components/Card'
import './ProjectSection.css'
const ProjectSection: React.FC = () => {
    return (
        <div className='project-container'>
            <h2>Projects </h2>
            <Card Heading="Job Applier Agent" content='Bot detection avoidance automation tool with LLM fallbacks.' footer={'2025'} backContent='Intelligent automation tool utilizing evasive techniques for bot detection avoidance and LLMs when standard DOM interaction fails.' pills={['Python', 'Playwright', 'LLMs']} />
            <Card Heading="Vanilla JS HomePage" content='Offline-first browser homepage for notes and quotes.' footer={'2020'} backContent='Offline-first browser homepage for notes, live quotes, and time display.' pills={['JavaScript', 'HTML5', 'CSS3']} />
        </div>
    )
}

export default ProjectSection