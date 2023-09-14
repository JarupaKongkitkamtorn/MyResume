import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';

//component
import { TechnicalskillsProps } from '../../App'


interface TechnicalSkillsProps {
    information: TechnicalskillsProps[],
    matchesmd: boolean
}

const Technicalskills: React.FC<TechnicalSkillsProps> = ({ information, matchesmd }) => {
    const [offset, setOffset] = useState<number>(0)
    const [heroPosition, setHeroPosition] = useState<number>(0)
    useEffect(() => {
        document.addEventListener("scroll", trackScrolling, { passive: true })
        const hero_section = document.getElementById("technical-skills")
        if (hero_section) {
            setHeroPosition(hero_section.offsetTop / 2)
        }
        return () => {
            window.removeEventListener("scroll", trackScrolling)
        }
    }, [])

    const trackScrolling = () => {
        const getOffset = document.body.scrollTop || document.documentElement.scrollTop
        setOffset(getOffset)
        const hero_section = document.getElementById("technical-skills")
        if (hero_section) {
            setHeroPosition(hero_section.offsetTop / 2)
        }
    }
    const renderItem = (item: TechnicalskillsProps, key: number) => {
        return <Grid item lg={2} md={12}>
            <Grow
                in={offset >= heroPosition}
                style={{ transformOrigin: '0 0 0' }}
                {...(offset >= heroPosition ? { timeout: key * 500 } : {})}
            >
                <Grid key={key} container className='item' justifyContent="center" alignItems="center">
                    <Grid item container lg={12} md={12} className='center'>
                        <Grid item lg={12} md={12} className='center'>
                            <img src={item.icon} alt='iconSkills' width="40px" height="auto" />
                            <div style={{ color: "#ffffff" }}>{item.label}</div>
                        </Grid>
                    </Grid>
                </Grid >
            </Grow>
        </Grid>

    }
    return (
        <div className="bgcom container" id="technical-skills">
            <Grid container justifyContent="center" alignItems="center">
                <Grid item lg={12} md={12} className='animate__animated animate__fadeInUp'>
                    <Paper elevation={12} className='technical-skills-paper' >
                        <Grid container spacing={matchesmd ? 3 : 4} justifyContent="center" alignItems="center">
                            <Grid item lg={12} md={12} className='header'>
                                <div>Technical Skills</div>
                            </Grid>
                            {information.map((item: TechnicalskillsProps, key: number) => renderItem(item, key))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Technicalskills