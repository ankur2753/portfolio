import React from 'react'
import './ResumeSection.css'
const ResumeSection: React.FC = () => {
    return (
        <div>
            <h2 >Curriculum vitae</h2>
            <img className='resume-image' src={require("../assets/Resume.bmp")} alt="Resume" />
        </div>
    )
}

export default ResumeSection