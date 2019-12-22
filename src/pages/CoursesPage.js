import React, { Component } from 'react';
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import CoursesPageContent from "../components/CoursesPageContent";
export default class CoursesPage extends Component {
  render() {
    return (
     <div>
      <title>Courses Page</title>
      <TopNavigation />
        <PageHeader pageTitle="Courses Page" />
      <CoursesPageContent/>
      <Footer />
     </div>
    );
  }
}
