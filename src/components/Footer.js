import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { MdMailOutline, MdPhoneAndroid } from "react-icons/md";
import "../assets/css/footer.css";
export default class Footer extends Component {
  render() {
    return (
      <>
      <div className="footer-wrapper"> 
        <Container>
         <Row>
          <Col lg={3} className="py-4">
           <div className="widget-wrapper">
            <h4>Follow Me</h4>
            <ul>
            <li><a href="#"> <FontAwesomeIcon icon={faFacebookF}/> Facebook</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faTwitter}/> Twitter</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faLinkedinIn}/> Linkedin</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faYoutube}/> Youtube</a></li>
            </ul>
           </div>
          </Col>
          <Col lg={3} className="py-4">
           <div className="widget-wrapper">
            <h4>Address </h4>
            <p>Probo Chhatni, Chhatni Dhekra, Adamdighi, Bogra, Bangladesh</p>
            <p><FontAwesomeIcon icon={faEnvelope}/> rubel2585@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +8801763633959</p>
           </div>
          </Col>
          <Col lg={3} className="py-4">
           <div className="widget-wrapper">
            <h4>Information</h4>
            <ul>
             <li><a href="#">Information</a></li>
             <li> <a href="#"> About Me</a></li>
             <li><a href="#">My Resume</a></li>
             <li><a href="#">Contact Me</a></li>
            </ul>
           </div>
          </Col>
         <Col lg={3} className="py-4">
          <div className="widget-wrapper">
           <h4>Legal</h4>
           <ul>
            <li><a href="#">Legal</a></li>
            <li> <a href="#"> Refund Policy</a></li>
            <li><a href="#">Terms And Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
           </ul>
          </div>
         </Col>
         </Row>
        </Container>
        <div className="footerBottom">
         <Container>
          <Row>
           <Col className="text-center">
           <p className="mb-0 text-white">raihanislam.cse@gmail.com &copy; 2019-2020</p>
           </Col>
          </Row>
         </Container>
        </div>
      </div>
      </>
    );
  }
}
