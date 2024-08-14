import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import HeaderTwo from './components/HeroTwo';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Skills from './components/Skills';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "blue";

  return (
    <>
      <Nav color={color} />
      <HeaderTwo />      
      <About color={color} />
      <Skills color={"blue"} />
      <Experience color={color} />
      <Projects color={color} />
      <Courses color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
