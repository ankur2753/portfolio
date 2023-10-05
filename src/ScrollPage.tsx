import React from 'react';
import './ScrollPage.css';
import Section from './components/Section';
import NavigationBar from './components/NavigationBar';
import ResumeSection from './pages/ResumeSection';
import Card from './components/Card';
import ProjectSection from './pages/ProjectSection';
const ScrollPage: React.FC = () => {
    return (
        <div className="scroll-page">
            <NavigationBar />
            <Section className='paralax-container'>
                <>
                    Hi There,
                    <div className='foreground'>
                        I am <span>Ankur Kumar</span>
                    </div>
                    a Full Stack  Developer
                </>
            </Section>
            <Section>
                <h1>
                    Projects
                </h1>
            </Section>
            <Section>
                <ResumeSection />
            </Section>
            <Section className='abc'>
                <ProjectSection />
            </Section>
        </div>
    );
};

export default ScrollPage;
