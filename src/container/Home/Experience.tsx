import React from 'react';
import Grid from '@mui/material/Grid';

//component
import { ExperienceProps } from '../../App'

interface ExperiencesProps {
    information: ExperienceProps[],
    matchesmd: boolean
}

const Experience: React.FC<ExperiencesProps> = ({ information, matchesmd }) => {
    return (
        <div className="bgleft container" id="experience">

        </div>
    );
}

export default Experience;