import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import webIcon from "../assets/images/web.svg";
import mobileIcon from "../assets/images/mobile.svg";
import graphicsIcon from "../assets/images/graphics.svg";
import "../assets/css/services.css";

class Services extends Component {
    render() {
        return (
           <Fragment>
               <Container>
                   <Row>
                       <Col className="sectionTitle text-center text-uppercase my-5">
                           <h3>My Services</h3>
                       </Col>
                   </Row>
                   <Row>
                       <Col lg={4} md={6}>
                         <div className="singleService text-center">
                             <img className="img-fluid mb-2" src={webIcon} alt="web"/>
                             <h4>Web Development</h4>
                             <p>I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                         </div>
                       </Col>
                       <Col lg={4} md={6}>
                         <div className="singleService text-center">
                             <img className="img-fluid mb-2" src={mobileIcon} alt="web"/>
                             <h4>Mobile Development</h4>
                             <p>I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                         </div>
                       </Col>
                       <Col lg={4} md={6}>
                         <div className="singleService text-center">
                             <img className="img-fluid mb-2" src={graphicsIcon} alt="web"/>
                             <h4>Graphics Development</h4>
                             <p>I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                         </div>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        );
    }
}

export default Services;