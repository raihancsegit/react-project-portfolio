import React, { Component } from 'react';
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import PortfoliosPageContent from "../components/PortfoliosPageContent";
export default class ServicesPage extends Component {
  render() {
    return (
      <div>
        <title>Portfolios Page</title>
        <TopNavigation/>
        <PageHeader pageTitle="Portfolios Page"/>
        <PortfoliosPageContent/>
        <Footer/>
      </div>
    );
  }
}
