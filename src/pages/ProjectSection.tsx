import React from 'react'
import Card from '../components/Card'
import './ProjectSection.css'
const ProjectSection: React.FC = () => {
    return (
        <div className='project-container'>
            <h2>Projects </h2>
            <Card Heading="Homepage" content='Todos list + time as homepage of browser'
                footer={<a href='https://ankur2753.github.io/homePage/'>Click Here to Visit</a>} />
            <Card Heading="Learn IDB" content='a guide on how to use index db'
                footer={<a href='https://ankur2753.github.io/learn-idb'>Click Here to Visit</a>} />
            <Card Heading="Thirsty" content='an app to order water bottles online from your local vendor' footer={<a href='.'>Click Here to Visit</a>} />
        </div>
    )
}

export default ProjectSection