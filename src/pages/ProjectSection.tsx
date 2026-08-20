import React from 'react'
import Card from '../components/Card'
import './ProjectSection.css'
const ProjectSection: React.FC = () => {
    return (
        <div className='project-container'>
            <h2>Projects </h2>
            <Card Heading="Job Applier Agent" content='Use of various evasive techniques for bot detection avoidance. Automate Regular Task using playwright. Use LLM when the Automation is not able to perform.' footer={'2025'} />
            <Card Heading="Vanilla JS HomePage" content='Offline first homepage for browsers. Store notes and displays Quotes(online only) + Time.' footer={'2020'} />
        </div>
    )
}

export default ProjectSection