import React from 'react';
import './Section.css';

interface SectionProps {
    children: JSX.Element;
    className?: string;
}

const Section: React.FC<SectionProps> = (props) => {

    return (
        <section className={(props.className ?? '') + ' section'} >
            {props.children}
        </section>
    );
};


export default Section;
