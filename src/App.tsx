import './App.css'
import AboutMe from './components/AboutMe/AboutMe';
import BackgroundPattern from './components/Background/BackgroundPattern';
import Expirience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

function App() {
  return(
    <div className="container relative min-h-[300vh]">
      <BackgroundPattern />
      <Header />
      <main className="pt-16">
        < Welcome />
        < AboutMe />
        < Expirience />
      </main>
    </div>
  );
}

export default App
