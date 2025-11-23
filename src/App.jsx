import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <SecondHeader />
      <AboutSGU />
      <DoubleDegree />
      <Faculties />
      <Values />
      <NewsEvent />
      <Reels />
      <StudentsExp />
      <Footer />
    </div>
  );
}

export default App;
