
import './App.css';
import React from 'react';
//Global style
import GlobalStyle from './component/GlobalStyle';

// import Components
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <AboutMe/>
    </div>
  );
}

export default App;
