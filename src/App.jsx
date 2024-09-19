// src/App.jsx
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/ScroolUp/ScrollUp';
import Work from './components/work/Work';
import Team from './components/team/Team';
import Teams from './components/teama/Teams';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
       {/* <Team /> */} 
       {/* <Teams />*/}
        <Contact />
      
        
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
