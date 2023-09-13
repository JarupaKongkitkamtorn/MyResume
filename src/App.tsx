import React from 'react';
import Navbar from './component/static/Navbar'
import Herosection from './container/Home/Herosection'
import Technicalskills from './container/Home/Technicalskills'
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
export interface InformationProps {
  welcome: string;
  name: string;
  role: string;
  personality: string;
  phone: string;
  email: string;
  linkedIn: string;
  github: string;
  education: EducationProps;
  certification: string[];
  Training: string[];
  technicalskills: TechnicalskillsProps[];
}

const App: React.FC = () => {
  return (
    <div>
      <Navbar information={information} />
      <Herosection information={information} />
      <Technicalskills information={information.technicalskills} />
    </div>
  );
}
export default App