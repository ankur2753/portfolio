import React from 'react';
import './ScrollPage.css';
import Section from './components/Section';
import NavigationBar from './components/NavigationBar';
import ResumeSection from './pages/ResumeSection';
import ProjectSection from './pages/ProjectSection';
import ExperienceSection from './pages/ExperienceSection';
const ScrollPage: React.FC = () => {
    return (
        <div className="scroll-page">
            <NavigationBar />
            <Section className='paralax-container' id='home'>
                <>
                    Hi There,
                    <div className='foreground'>
                        I am <span>Ankur Kumar</span>
                    </div>
                    a Full Stack  Developer
                </>
            </Section>
            <Section id='about'>
                <ResumeSection />
            </Section>
            <Section id='experience'>
                <ExperienceSection />
            </Section>
            <Section className='short' id='projects'>
                <ProjectSection />
            </Section>
        </div>
    );
};

export default ScrollPage;
