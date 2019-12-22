import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CoursesPage from "../pages/CoursesPage";
import PortfoliosPage from "../pages/PortfoliosPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
export default class index extends Component {
  render() {
    return (
      <div>
        <Switch>
           <Route path="/" exact component={HomePage}/>
           <Route path="/services" component={ServicesPage}/>
           <Route path="/courses" component={CoursesPage}/>
           <Route path="/portfolios" component={PortfoliosPage}/>
           <Route path="/contact" component={ContactPage}/>
           <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    );
  }
}
