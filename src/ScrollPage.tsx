import React from 'react';
import BackgroundSVG from './components/Background';
import './ScrollPage.css';
import Section from './components/Section';
const ScrollPage: React.FC = () => {
    return (
        <div className="scroll-page">
            <BackgroundSVG />
            <Section>
                <h1>
                    abc
                </h1>
            </Section>
            <Section>
                <h1>
                    abc
                </h1>
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
