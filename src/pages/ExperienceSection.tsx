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
                    <Card Heading={"SafeSend Technologies"} content='Senior QA Engineer' footer={"Feb 2023 - Present"} backContent='Architected end-to-end Python & Playwright automation. Engineered intelligent agentic workflows. Implemented parallel execution on Azure.' pills={['Python', 'Playwright', 'React', 'Azure', 'ChromaDB']} />
                </div>
                <div>
                    <div className="horizontal-line"></div>
                    <Card Heading={"SafeSend Technologies"} content='Graduate Engineering Trainee' footer={"Jul 2022 - Feb 2023"} backContent='Developed ASP.NET REST APIs using SAGA & CQRS. Optimized MSSQL performance. Migrated legacy MVC to React.js.' pills={['C#', 'ASP.NET Core', 'MSSQL', 'React.js']} />
                </div>
                <div >
                    <div className="horizontal-line"></div>
                    <Card Heading={"Deloitte"} content='Front End Intern' footer={"May 2022 - Jul 2022"} backContent='Developed responsive web applications and reusable UI component libraries for cross-team development.' pills={['React.js', 'CSS3']} />
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection