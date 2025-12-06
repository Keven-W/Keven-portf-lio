import React from 'react';
import Maintenance from './Maintenance';
import './index.css';

function App() {
  // Temporariamente mostrando apenas a tela de manutenção
  return <Maintenance />;
  
  // Quando quiser voltar ao normal, comente a linha acima
  // e descomente abaixo:
  /*
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
  */
}

export default App;
