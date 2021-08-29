import React from "react";
import TabNav from "./Components/TabNav.js";
import Header from "./Components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Rates from "./Components/Rates";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/rates" component={Rates} />
    </main>
  );
}