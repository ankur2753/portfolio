import React from 'react'
import './ResumeSection.css'
const Ankur_Resume = require("../assets/Ankur Kumar.pdf")

const ResumeSection: React.FC = () => {
    return (
        <div className='resume-section'>
            <h2>Curriculum Vitae</h2>
            <div className="main">
                <div className="right">
                    Software Development & Automation Engineer with 3+ years of experience architecting production Python microservices, intelligent AI-driven automation workflows, and responsive React.js web interfaces. Specialized in designing scalable Playwright automation frameworks, RAG/LLM-powered agentic tools, REST APIs, and CI/CD pipelines. Proven track record in parallelizing execution workloads to reduce runtime by 25% and building modular, high-impact engineering tools. Always seeking opportunities to learn new technologies and contribute to ambitious software and game development projects.
                    <div className="button-group">
                        <button className='btn'> <a href={Ankur_Resume} download={"Ankur Resume"}>Download CV</a> </button>
                        <button className='btn'> <a href="mailto:ankur2753.ak@gmail.com">Hire Me / Contact</a> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection