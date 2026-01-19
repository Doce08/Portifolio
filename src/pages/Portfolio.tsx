import Header from '../components/Header';
import ValueProposition from '../components/ValueProposition';
import TechnicalSkills from '../components/TechnicalSkills';
import BehavioralCompetencies from '../components/BehavioralCompetencies';
import PracticalCases from '../components/PracticalCases';
import Education from '../components/Education';
import ProfessionalGoals from '../components/ProfessionalGoals';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ValueProposition />
      <TechnicalSkills />
      <BehavioralCompetencies />
      <PracticalCases />
      <Education />
      <ProfessionalGoals />
      <Footer />
    </div>
  );
}
