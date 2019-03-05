import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
