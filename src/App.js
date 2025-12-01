import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />

    </div>
  );
}

export default App;
