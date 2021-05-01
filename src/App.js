import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

//Global style
import GlobalStyle from "./component/GlobalStyle";

// import Components
import AboutMe from "./pages/AboutMe";
import Nav from "./component/Nav";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
      <Route exact path="/">
        <AboutMe />
      </Route>
      <Route exact path="/projects">    
        <Projects />
      </Route>
      <Route path="/projects/:id">
        <ProjectDetails />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
