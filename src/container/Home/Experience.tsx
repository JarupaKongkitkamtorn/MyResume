import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

//component
import { ExperienceProps, ProjectProps } from '../../App'

interface ExperiencesProps {
    information: ExperienceProps[],
    matchesmd: boolean
}

const Experience: React.FC<ExperiencesProps> = ({ information, matchesmd }) => {
    const [offset, setOffset] = useState<number>(0)
    const [section, setSection] = useState<number>(0)
    useEffect(() => {
        document.addEventListener("scroll", trackScrolling, { passive: true })
        const sections = document.getElementById("experience")
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
        const sections = document.getElementById("experience")
        if (sections) {
            setSection(sections.offsetTop / 2)
        }
    }
    const renderItem = (item: ExperienceProps, key: number) => {
        return <Grow
            key={key}
            in={offset >= section}
            style={{ transformOrigin: '0 0 0' }}
            {...(offset >= section ? { timeout: !key ? 3000 : key * 3000 } : {})}
        >
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: '20px 0', color: "#ffffff" }}
                    color="text.secondary"
                >
                    {item.dateTime}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: "transparent", boxShadow: "none" }}>
                        <Avatar src={item.icon} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, color: "#ffffff" }}>
                    <Typography className='title'>{item.company}</Typography>
                    <Typography className='titlehead'>{item.role}</Typography>
                    <Typography className='description'>{item.description}</Typography>
                    <Grid container>
                        <Grid item lg={12} sm={12}>
                            <Typography className='titlehead'>Projects</Typography>
                        </Grid>
                        <Grid item lg={12} sm={12}>
                            <ul>
                                {item.project.map((itemproject: ProjectProps, key: number) => <li key={key}>
                                    <Typography className='title flex-left' >
                                        {itemproject.icon && <img src={itemproject.icon} alt='projecticon' width="40px" style={{ marginRight: 8 }} />}
                                        {itemproject.title}
                                        <a href={itemproject.link} target='_blank' rel="noreferrer" style={{ color: "#8dc63f", marginLeft: 5 }}>
                                            {itemproject.link}
                                        </a>
                                    </Typography>
                                    <Typography className='description'>{itemproject.description}</Typography>
                                    <ul>
                                        <li>
                                            <Typography className='description'>{itemproject.tech}</Typography>
                                        </li>
                                    </ul>
                                </li>)}
                            </ul>
                        </Grid>
                    </Grid>
                </TimelineContent>
            </TimelineItem>
        </Grow>
    }
    const renderItemmd = (item: ExperienceProps, key: number) => {
        return <Grow
            key={key}
            in={offset >= section}
            style={{ transformOrigin: '0 0 0' }}
            {...(offset >= section ? { timeout: !key ? 2000 : key * 2000 } : {})}
        >
            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item lg={12} sm={12}>
                    <Typography className='description'>{item.dateTime}</Typography>
                    <Typography className='title'>{item.company}</Typography>
                    <Typography className='title'>{item.role}</Typography>
                    <Typography className='description'>{item.description}</Typography>
                </Grid>
                <Grid item lg={12} sm={12}>
                    <Typography className='titlehead' sx={{ marginBottom: "0px !important" }}>Projects</Typography>
                </Grid>
                <Grid item lg={12} sm={12}>
                    <ul style={{ color: "#ffffff" }}>
                        {item.project.map((itemproject: ProjectProps, key: number) => <li key={key}>
                            <Typography className='title flex-left' >
                                {itemproject.icon && !matchesmd && <img src={itemproject.icon} alt='projecticon' width="40px" style={{ marginRight: 8 }} />}
                                {itemproject.title}
                                {!matchesmd && <a href={itemproject.link} target='_blank' rel="noreferrer" style={{ color: "#8dc63f", marginLeft: 5 }}>
                                    {itemproject.link}
                                </a>}
                            </Typography>
                            {matchesmd && !!itemproject.link && <Typography className='description'>
                                <a href={itemproject.link} target='_blank' rel="noreferrer" style={{ color: "#8dc63f", marginLeft: 5 }}>
                                    {itemproject.link}
                                </a>
                            </Typography>}
                            <Typography className='description'>{itemproject.description}</Typography>
                            <ul>
                                <li>
                                    <Typography className='description'>{itemproject.tech}</Typography>
                                </li>
                            </ul>
                        </li>)}
                    </ul>
                </Grid>
            </Grid>

        </Grow>
    }
    return (
        <div className="bg container" id="experience">
            <Grid container className='paddingtopbottom' justifyContent="center" alignItems="center">
                <Grid item lg={12} sm={12} className='header'>
                    <div>Experience</div>
                </Grid>
                {matchesmd ? <Grid container item lg={12} sm={12} justifyContent="center" alignItems="center">
                    {information.map((item: ExperienceProps, key: number) => renderItemmd(item, key))}
                </Grid>
                    : <Grid item lg={12} sm={12}>
                        <Timeline
                            sx={{
                                [`& .${timelineOppositeContentClasses.root}`]: {
                                    flex: 0.2,
                                },
                            }}>
                            {information.map((item: ExperienceProps, key: number) => renderItem(item, key))}
                        </Timeline>
                    </Grid>}
            </Grid>
        </div>
    );
}

export default Experience;