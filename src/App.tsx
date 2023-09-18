import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Fab from '@mui/material/Fab';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

//component
import Navbar from './component/static/Navbar'
import Herosection from './container/Home/Herosection'
import Technicalskills from './container/Home/Technicalskills'
import Experience from './container/Home/Experience'
import AboutMe from './container/Home/AboutMe'
import ContactMe from './container/Home/ContactMe'
import { information } from './const/Information'
import { handleScroll } from './function/smooth'

interface EducationProps {
  bachelor: string,
  university: string,
  gpa: string,
}
export interface ProjectProps {
  icon: string,
  link: string,
  title: string,
  description: string,
  tech: string,
}
export interface TechnicalskillsProps {
  icon: any,
  label: string,
}
export interface ExperienceProps {
  icon: string,
  dateTime: any,
  company: string,
  role: string,
  description: string,
  project: ProjectProps[],
}
export interface InformationProps {
  welcome: string,
  name: string,
  role: string,
  personality: string,
  phone: string,
  email: string,
  linkedIn: string,
  github: string,
  education: EducationProps,
  certification: string[],
  training: string[],
  technicalskills: TechnicalskillsProps[],
  experience: ExperienceProps[]
}

const App: React.FC = () => {
  const theme = useTheme();
  const matchesmd = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <div className='fade-in'>
      <Fab onClick={() => handleScroll("herosection")} size="small" color="secondary" aria-label="add" className='fab'>
        <KeyboardDoubleArrowUpIcon />
      </Fab>
      <Navbar information={information} matchesmd={matchesmd} />
      <Herosection information={information} matchesmd={matchesmd} />
      <Technicalskills information={information.technicalskills} matchesmd={matchesmd} />
      <Experience information={information.experience} matchesmd={matchesmd} />
      <AboutMe information={information} matchesmd={matchesmd} />
      <ContactMe information={information} matchesmd={matchesmd} />
    </div>
  );
}
export default App