import './App.css'
import AboutMe from './components/AboutMe/AboutMe';
import BackgroundPattern from './components/Background/BackgroundPattern';
import Expirience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Project';
import { LanguageProvider } from './utils/LanguageContext';
import StackScroll from './components/StackScroll';

function App() {
  return(
    <div className="dark:bg-black dark:opacity-90 transition-colors duration-500 min-h-screen px-20 mobile:px-0">
        <div className="max-w-[1280px] mx-auto text-center">
          <LanguageProvider>
            <BackgroundPattern/>
            <Header />
              <main >
                <Welcome/>
                <AboutMe/>
                <Expirience/>
                <StackScroll/>
                <Project/>
              </main>
            <Footer />
          </LanguageProvider>
        </div>
      </div>
    
  );
}

export default App
