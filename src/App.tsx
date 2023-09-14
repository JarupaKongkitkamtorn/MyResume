import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//component
import Navbar from './component/static/Navbar'
import Herosection from './container/Home/Herosection'
import Technicalskills from './container/Home/Technicalskills'
import Experience from './container/Home/Experience'
import { information } from './const/Information'

interface EducationProps {
  bachelor: string,
  university: string,
  gpa: string,
}
export interface TechnicalskillsProps {
  icon: any,
  label: string,
}
export interface ExperienceProps {
  dateTime: any,
  company: string,
  role: string,
  description: string,
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
  Training: string[],
  technicalskills: TechnicalskillsProps[],
  experience: ExperienceProps[]
}

const App: React.FC = () => {
  const theme = useTheme();
  const matchesmd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
      <Navbar information={information} matchesmd={matchesmd} />
      <Herosection information={information} matchesmd={matchesmd} />
      <Technicalskills information={information.technicalskills} matchesmd={matchesmd} />
      <Experience information={information.experience} matchesmd={matchesmd} />
    </div>
  );
}
export default App