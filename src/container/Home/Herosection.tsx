import React from 'react';
import Grid from '@mui/material/Grid';

//component
import bghero from '../../image/bghero.mp4';
import userimage from '../../image/userimage.jpg'
import { InformationProps } from '../../App'
import Scroll from '../../component/Scroll'

interface HerosectionProps {
    information: InformationProps,
    matchesmd: boolean,
}

const Herosection: React.FC<HerosectionProps> = ({ information, matchesmd }) => {
    return (
        <div className={matchesmd ? "bgleft" : "bghero"} id="herosection">
            {!matchesmd && <video className='videoTag' autoPlay loop muted>
                <source src={bghero} type='video/mp4' />
            </video>}
            <Grid className='container' container sx={{ position: "absolute", top: 0, left: 0, height: "100vh" }} justifyContent="center" alignItems="center">
                <Grid container item lg={12} md={12} justifyContent="center" alignItems="center" sx={{ paddingTop: { lg: "13%", xs: "27%" } }}>
                    <Grid container item lg={7} md={12} className='animate__animated animate__fadeInUp'>
                        <Grid item lg={12} md={12} className="typewriter">
                            <h1>{information.welcome}</h1>
                        </Grid>
                        <Grid container item lg={12} md={12} className='role header' justifyContent="center">
                            <div style={{ width: "100%" }}>{information.role}</div>
                        </Grid>
                        <Grid container item lg={12} md={12} className='personality description' justifyContent="center">
                            <div>{information.personality}</div>
                        </Grid>
                    </Grid>
                    <Grid container item lg={5} md={12} justifyContent="center" alignItems="center">
                        <img src={userimage} alt='userimage' width="70%" height="70%" className='img-wrap animate__animated animate__zoomIn' />
                    </Grid>
                </Grid>
                <Grid container item lg={12} md={12} id="hero_section" justifyContent="center" alignItems="center">
                    <Scroll id="technical-skills" />
                </Grid>
            </Grid>
        </div>
    );
}

export default Herosection