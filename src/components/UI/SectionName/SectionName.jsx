import React from 'react';
import classes from "../SectionName/SectionName.module.css";

const SectionName = ({text}) => {
    return (
        <div className={classes.sectionName}>
            {text}
        </div>
    );
};

export default SectionName;