import React, { Component } from 'react';
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ContactPageContent from "../components/ContactPageContent";
export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <title>Contact Page</title>
        <TopNavigation/>
        <PageHeader pageTitle="Contact Page"/>
        <ContactPageContent/>
        <Footer/>
      </div>
    );
  }
}
