import React from 'react'
import './ResumeSection.css'
const Ankur_Resume = require("../assets/Ankur Kumar.pdf")

const ResumeSection: React.FC = () => {
    return (
        <div className='resume-section'>
            <h2 >Curriculum Vitae</h2>
            <div className="main">

                <div className="left">
                    <img className='resume-image' src={require("../assets/Resume.bmp")} alt="Resume" />
                </div>
                <div className="right">

                    As a recent Computer Science graduate, I bring a growth mindset, flexibility, and problem-solving skills to the table. I'm eager to apply the skills I've acquired through my studies and extracurricular activities. Open to learning new technologies, I'm always striving to improve. Constructive criticism helps me grow professionally, and my persistence and willingness to learn make me a valuable asset to any company. Actively seeking opportunities to contribute to a team and continue my career.
                    <button className='btn'> <a href={Ankur_Resume} download={"Ankur Resume"}>Download CV</a> </button>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection