import React, { Component } from 'react';
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import AboutPageContent from "../components/AboutPageContent";
export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <title>About Page</title>
        <TopNavigation/>
        <PageHeader pageTitle="About Page"/>
        <AboutPageContent/>
        <Footer/>
      </div>
    );
  }
}
