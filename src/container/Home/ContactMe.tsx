import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


//component
import { InformationProps } from '../../App'
interface ContactMeProps {
    information: InformationProps,
    matchesmd: boolean,
}
const ContactMe: React.FC<ContactMeProps> = ({ information, matchesmd }) => {
    return (
        <div className="bg container" id="contactMe">
            <Grid container className='paddingtopbottom' justifyContent="center" alignItems="center">
                <Grid item lg={12} md={12}>
                    <Typography className='flex-center description'>
                        <EmailIcon sx={{ pr: 1 }} fontSize="large" />
                        <a href='mailto:jarupa.kongkitkamtorn@gmail.com' >
                            {information.email}
                        </a>
                    </Typography>
                    <Typography className='flex-center description'>
                        <LocalPhoneIcon sx={{ pr: 1 }} fontSize="large" />
                        {information.phone}
                    </Typography>
                    <Typography className='flex-center description'>
                        <a href='https://www.linkedin.com/in/jarupa-k/' target='_blank' rel="noreferrer" >
                            <LinkedInIcon className='iconcontactme' />
                        </a>
                        <a href='https://github.com/JarupaKongkitkamtorn' target='_blank' rel="noreferrer" >
                            <GitHubIcon className='iconcontactme' />
                        </a>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default ContactMe;