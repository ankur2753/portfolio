import React from 'react';
import './Section.css';

interface SectionProps {
    children: JSX.Element;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = (props) => {

    return (
        <section className={(props.className ?? '') + ' section'} id={props.id}>
            {props.children}
        </section>
    );
};


export default Section;
