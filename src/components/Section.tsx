import React, { useRef } from 'react';
import './Section.css';

interface SectionProps {
    children: JSX.Element;
    showButton?: boolean;
    className?: string;
}

const Section: React.FC<SectionProps> = (props) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const scrollToNextSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={'section ' + (props.className ?? '')} ref={sectionRef}>
            {props.children}
            {
                props.showButton &&
                <button className='next-btn' onClick={scrollToNextSection}>
                    Next
                </button>
            }
        </div>
    );
};

Section.defaultProps = {
    showButton: true
}

export default Section;
