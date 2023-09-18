import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

//component
import { InformationProps } from '../../App'
interface AboutMeProps {
    information: InformationProps,
    matchesmd: boolean,
}

const AboutMe: React.FC<AboutMeProps> = ({ information, matchesmd }) => {
    const [offset, setOffset] = useState<number>(0)
    const [section, setSection] = useState<number>(0)
    useEffect(() => {
        document.addEventListener("scroll", trackScrolling, { passive: true })
        const sections = document.getElementById("aboutme")
        if (sections) {
            setSection(sections.offsetTop / 2)
        }
        return () => {
            window.removeEventListener("scroll", trackScrolling)
        }
    }, [])

    const trackScrolling = () => {
        const getOffset = document.body.scrollTop || document.documentElement.scrollTop
        setOffset(getOffset)
        const sections = document.getElementById("aboutme")
        if (sections) {
            setSection(sections.offsetTop / 2)
        }
    }
    return (
        <div className="bgleft" id="aboutme">
            <div className="container" >
                <Grid container className='paddingtopbottom' justifyContent="center" alignItems="center">
                    <Grid item lg={12} sm={12}>
                        <Paper elevation={12} className='technical-skills-paper' >
                            <Grid container spacing={matchesmd ? 3 : 4} justifyContent="center" alignItems="center">
                                <Grid item lg={12} sm={12} className='header'>
                                    <div>About Me</div>
                                </Grid>
                                <Grid item container lg={12} sm={12} spacing={6} sx={{ color: "#ffffff" }}>
                                    <Grow
                                        in={offset >= section}
                                        style={{ transformOrigin: '0 0 0' }}
                                        {...(offset >= section ? { timeout: 2000 } : {})}
                                    >
                                        <Grid item lg={6} sm={12}>
                                            <Divider className='divider'>Education</Divider>
                                            <Typography className='title'>{information.education.bachelor}</Typography>
                                            <Typography className='title'>{information.education.university}</Typography>
                                            <Typography className='description'>{information.education.gpa}</Typography>
                                        </Grid>
                                    </Grow>
                                    <Grow
                                        in={offset >= section}
                                        style={{ transformOrigin: '0 0 0' }}
                                        {...(offset >= section ? { timeout: 3000 } : {})}
                                    >
                                        <Grid item lg={6} sm={12}>
                                            <Divider className='divider'>Training</Divider>
                                            <ul>
                                                {information.training.map((item: string, key: number) => <li key={key}>
                                                    <Typography className='description'>{item}</Typography>
                                                </li>
                                                )}
                                            </ul>
                                        </Grid>
                                    </Grow>
                                    <Grow
                                        in={offset >= section}
                                        style={{ transformOrigin: '0 0 0' }}
                                        {...(offset >= section ? { timeout: 4000 } : {})}
                                    >
                                        <Grid item lg={6} sm={12}>
                                            <Divider className='divider'>Certification</Divider>
                                            <ul>
                                                {information.certification.map((item: string, key: number) => <li key={key}>
                                                    <Typography className='description'>{item}</Typography>
                                                </li>
                                                )}
                                            </ul>
                                        </Grid>
                                    </Grow>
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