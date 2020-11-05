import React from "react";
import HomeContainer from "./components/Home/HomeContainer/HomeContainer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Blog from "./components/Pages/Blog/Blog";
import Nav from "./components/Home/Nav/Nav";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import About from "./components/Pages/About/About";
import Service from "./components/Pages/Service/Service";
import { NotFound } from "./components/Pages/NotFound/NotFound";
import { AllBlog } from "./components/Pages/AllBlog/AllBlog";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <HomeContainer/>
        </Route>
        <Route  path="/home">
         <HomeContainer/>
        </Route>
        <Route  path="/blog">
          <Nav/>
          <AllBlog/>
        </Route>
        <Route  path="/portfolio">
          <Nav/>
          <Portfolio/>
        </Route>
        <Route  path="/about">
          <Nav/>
          <About/>
        </Route>
        <Route path="/service">
          <Nav/>
          <Service/>
        </Route>
      </Switch>
      <Redirect>
        <HomeContainer/>
      </Redirect>
    </Router>
  );
}

export default App;
