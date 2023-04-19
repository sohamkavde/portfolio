import './App.css';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Education from './components/education/education';
import Project from './components/projects/project';
import Skills from './components/skills/skills';
import Leetcode from './components/leetcode50days/leetcode';
import Pop from './components/pop/pop';
function App() {
  return (
    <>
    <Header />
    <Skills/>
    <Project/>
    <Leetcode/>
    <Education/>
    <Contact />
    <Pop/>
    <Footer/>
    </>

  );
}

export default App;
