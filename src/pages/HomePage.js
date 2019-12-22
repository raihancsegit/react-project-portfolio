import React, { Component } from 'react';
import TopNavigation from "../components/TopNavigation";
import HeroArea from "../components/HeroArea";
import Services from "../components/Services";
import Technology from "../components/Technology";
import ProjectsCountdown from "../components/ProjectsCountdown";
import RecentProjects from "../components/RecentProjects";
import OurCourses from "../components/OurCourses";
import VideoArea from "../components/VideoArea";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default class HomePage extends Component {
  render() {
    return (
      
      <div>
        <title>Home Page</title>
        <TopNavigation/>
        <HeroArea />
        <Services />
        <Technology />
        <ProjectsCountdown />
        <RecentProjects />
        <OurCourses />
        <VideoArea />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}
