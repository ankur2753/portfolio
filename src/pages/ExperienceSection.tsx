import React from 'react'
import './ExperienceSection.css'
import Card from '../components/Card'
const ExperienceSection = () => {
    return (
        <div className="timeline-main">
            <h2>Experience</h2>
            <div className="cards">
                <div>
                    <div className="horizontal-line"></div>
                    <Card Heading={"SafeSend Technologies"} content='Senior QA Engineer' footer={"Feb 2023 - Present"} />
                </div>
                <div>
                    <div className="horizontal-line"></div>
                    <Card Heading={"SafeSend Technologies"} content='Graduate Engineering Trainee' footer={"Jul 2022 - Feb 2023"} />
                </div>
                <div >
                    <div className="horizontal-line"></div>
                    <Card Heading={"Deloitte"} content='Front End Intern' footer={"May 2022 - Jul 2022"} />
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection