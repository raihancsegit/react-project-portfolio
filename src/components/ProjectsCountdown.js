import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/css/ProjectCountdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
class ProjectsCountdown extends Component {

    render() {
        return (
            <Fragment>
                <section className="projects-countdown-wrapper my-5"> 
                <Container fluid={false}>
                   <Row className="d-flex justify-content-center align-items-center">
                       <Col lg={8} md={6}>
                         <Row>
                             <Col>
                               <div className="single-project">
                                 <span>
                                 <CountUp start={0} end={850} duration={40} delay={1}>
                                  {({ countUpRef, start }) => (
                                      <VisibilitySensor onChange={start} delayedCall>
                                           <span ref={countUpRef}></span>
                                      </VisibilitySensor>
                                  )}
                                </CountUp>
                                 </span>
                                 <p>TOTAL PROJECTS</p>
                               </div>
                             </Col>
                             <Col>
                             <div className="single-project">
                                 <span>
                                 <CountUp start={0} end={1250} duration={50} delay={1}>
                                  {({ countUpRef, start }) => (
                                      <VisibilitySensor onChange={start} delayedCall>
                                           <span ref={countUpRef}></span>
                                      </VisibilitySensor>
                                  )}
                                </CountUp>
                                 </span>
                                 <p>TOTAL CLIENTS</p>
                               </div>
                             </Col>
                         </Row>
                       </Col>
                       <Col lg={4} md={6}>
                         <div className="project-info">
                         <Card>
                          <Card.Body>
                              <Card.Title>How I Work</Card.Title>
                                  <ul>
                                    <li><span><FontAwesomeIcon icon={faCheckCircle}/></span> Requirement Gathering</li>
                                    <li><span><FontAwesomeIcon icon={faCheckCircle}/></span> System Analysis</li>
                                    <li><span><FontAwesomeIcon icon={faCheckCircle}/></span> Coding Testing</li>
                                    <li><span><FontAwesomeIcon icon={faCheckCircle}/></span> Implementation</li>
                                </ul>
                            </Card.Body>
                          </Card>
                         </div>
                       </Col>
                   </Row>
                </Container>
                </section>
            </Fragment>
        );
    }
}

export default ProjectsCountdown;