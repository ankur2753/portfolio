import React from 'react';
import './ScrollPage.css';
import Section from './components/Section';
import NavigationBar from './components/NavigationBar';
import ResumeSection from './ResumeSection';
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
                    abc
                </h1>
            </Section>
            <Section>
                <ResumeSection />
            </Section>
            <Section className='abc'>
                <h1>
                    abc
                </h1>
            </Section>
        </div>
    );
};

export default ScrollPage;
