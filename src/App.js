import './App.css';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Education from './components/education/education';
import Project from './components/projects/project';
import Skills from './components/skills/skills';
function App() {
  return (
    <>
    <Header />
    <Skills/>
    <Project/>
    <Education/>
    <Contact />
    <Footer/>
    </>

  );
}

export default App;
