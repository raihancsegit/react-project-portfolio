import React, { Component } from 'react';
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ServicesPageContent from "../components/ServicesPageContent";
export default class ServicesPage extends Component {
  render() {
    return (
      <div>
        <title>Services Page</title>
        <TopNavigation/>
        <PageHeader pageTitle="Services Page"/>
        <ServicesPageContent/>
        <Footer/>
      </div>
    );
  }
}
