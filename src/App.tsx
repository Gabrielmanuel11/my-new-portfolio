import './App.css'
import AboutMe from './components/AboutMe/AboutMe';
import BackgroundPattern from './components/Background/BackgroundPattern';
import Expirience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Project';

function App() {
  return(
    <div>
      <BackgroundPattern/>
      <Header />
      <main >
        <Welcome/>
        <AboutMe/>
        <Expirience/>
        <Project/>
      </main>
      <Footer />
    </div>
  );
}

export default App
