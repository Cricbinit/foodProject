import React, { Component } from "react";
import Logo from "./Components/Navbar/Logo";
import Menu from "./Components/Navbar/Menu";
import Card from "./Components/Navbar/Card";
import Company from "./Components/Footer/Company";
import Contact from "./Components/Footer/Contact";
import Legal from "./Components/Footer/Legal";
import SocialMedia from "./Components/Footer/SocialMedia";
import Foot from "./Components/Footer-last/Foot";

class App extends Component {
  render() {
    return (
      <>
        <section id="navbar">
          <article>
            <Logo />
            <Menu />
          </article>
        </section>

        <section className="cardSection">
          <Card />
        </section>
        <section id="footer">
          <Company />
          <Contact />
          <Legal />
          <SocialMedia />
        </section>

        <section id="last-foot">
          <Foot />
        </section>
      </>
    );
  }
}
export default App;
