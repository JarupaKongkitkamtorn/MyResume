import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

//component
import { InformationProps } from '../../App'
interface AboutMeProps {
    information: InformationProps,
    matchesmd: boolean,
}

const AboutMe: React.FC<AboutMeProps> = ({ information, matchesmd }) => {
    return (
        <div className="bgleft" id="aboutme">
            <div className="container" >
                <Grid container className='paddingtopbottom' justifyContent="center" alignItems="center">
                    <Grid item lg={12} sm={12} className='animate__animated animate__fadeInUp'>
                        <Paper elevation={12} className='technical-skills-paper' >
                            <Grid container spacing={matchesmd ? 3 : 4} justifyContent="center" alignItems="center">
                                <Grid item lg={12} sm={12} className='header'>
                                    <div>About Me</div>
                                </Grid>
                                <Grid item container lg={12} sm={12} spacing={6} sx={{ color: "#ffffff" }}>
                                    <Grid item lg={6} sm={12}>
                                        <Divider className='divider'>Education</Divider>
                                        <Typography className='title'>{information.education.bachelor}</Typography>
                                        <Typography className='title'>{information.education.university}</Typography>
                                        <Typography className='description'>{information.education.gpa}</Typography>
                                    </Grid>
                                    <Grid item lg={6} sm={12}>
                                        <Divider className='divider'>Training</Divider>
                                        <ul>
                                            {information.training.map((item: string, key: number) => <li key={key}>
                                                <Typography className='description'>{item}</Typography>
                                            </li>
                                            )}
                                        </ul>
                                    </Grid>
                                    <Grid item lg={6} sm={12}>
                                        <Divider className='divider'>Certification</Divider>
                                        <ul>
                                            {information.certification.map((item: string, key: number) => <li key={key}>
                                                <Typography className='description'>{item}</Typography>
                                            </li>
                                            )}
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default AboutMe;