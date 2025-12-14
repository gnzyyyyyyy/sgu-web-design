import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import SecondHeader from './components/SecondHeader/SecondHeader';
import AboutSGU from './components/AboutSGU/AboutSGU';
import DoubleDegree from './components/DoubleDegree/DoubleDegree';
import Faculties from './components/Faculties/Faculties';
import Values from './components/Values/Values';
import NewsEvent from './components/NewsEvent/NewsEvent';
import Reels from './components/Reels/Reels';
import StudentsExp from './components/StudentsExp/StudentsExp';
import Footer from './components/Footer/Footer';

import Scholarship from './components/Scholarship/Scholarship';
import ScholarshipInfo from './components/ScholarshipInfo/ScholarshipInfo';
import ScholarshipChoices from './ScholarshipChoices/ScholarshipChoices';

import Admission from './components/Admission/Admission';
import Coaches from './components/Coaches/Coaches';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Intro />
                    <SecondHeader />
                    <AboutSGU />
                    <DoubleDegree />
                    <Faculties />
                    <Values />
                    <NewsEvent />
                    <Reels />
                    <StudentsExp />
                  </>
                  }
              />

              <Route 
                path="/scholarship" 
                element={
                <>
                  <Scholarship />
                  <ScholarshipInfo />
                  <ScholarshipChoices />
                </>
              }
              />

              <Route 
                path="/admission" 
                element={<Admission />}
              />

              <Route 
                path="/coaches" 
                element={<Coaches />}
              />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
