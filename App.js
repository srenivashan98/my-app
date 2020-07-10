import React from "react";
import Nav from "./components/navigation.js";
import Insuredtype from "./components/insuranceType";
import Insuredinfo from "./components/insuredinfo";
import Details from "./components/Details";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <switch>
          <Route path="/" exact component={home} />
          <Route path="/type" component={Insuredtype} />
          <Route path="/info/" component={Insuredinfo} />
          <Route path="/detail" component={Details} />
        </switch>
      </div>
    </Router>
  );
}
const home = () => (
  <div>
    <form action="/type" method="get">
      <body>
        <img
          src="https://www.solartis.com/hubfs/logos/logo_active.png"
          id="homeimg"
          type="button"
          alt="solartis-logo"
        />
      </body>
    </form>
  </div>
);

export default App;
