import React from 'react'
import Card from '../components/Card'
import './ProjectSection.css'
const ProjectSection: React.FC = () => {
    return (
        <div className='project-container'>
            <h2>Projects </h2>
            <Card Heading="Homepage" Tags={["Vanilla Js", "HTML", "CSS"]} footer={<>hello</>} />
            <Card Heading="Learn IDB" Tags={["React", "Chakra UI", "DB blog"]} footer={<>hello</>} />
            <Card Heading="Thirsty" Tags={["Flutter", "Firebase"]} footer={<>hello</>} />

        </div>
    )
}

export default ProjectSection