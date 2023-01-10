import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "~/components/Header/Header";
import Navigation from "~/components/Navigation/Navigation";
import Footer from "~/components/Footer/Footer";
import RouteApp from "~/components/helpers/Navigation/RouteApp";
const HomeTemplate = (props) => {
  return (
    <Router>
      <Header />
      <Navigation />
      <RouteApp />
      <Footer />
    </Router>
  );
};

export default HomeTemplate;
