import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
export default class OurCourses extends Component {
  render() {
    return (
      <>
        <section>
          <Container>
            <Row>
                <Col className="sectionTitle text-center text-uppercase my-5">
                    <h3>Our Courses</h3>
                </Col>
            </Row>
            <Row>
             <Col md={6}>
                <Row className="single-course mb-3">
                    <Col lg={6}>
                    <div className="feature-image">
                        <img className="img-fluid" src="https://planetdigitalmedia.com/img/services/playing.png" alt="" />
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="course-info">
                        <h5 className="sub-title">Web Development</h5>
                        <p>I build native and cross platfrom mobile app for your business app for your business</p>
                        <a href="#" className="post-link">Details</a>
                    </div>
                    </Col>
                </Row>
            </Col>
             <Col md={6}>
                <Row className="single-course mb-3">
                    <Col lg={6}>
                    <div className="feature-image">
                        <img className="img-fluid" src="https://planetdigitalmedia.com/img/services/playing.png" alt="" />
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="course-info">
                        <h5 className="sub-title">Web Development</h5>
                        <p>I build native and cross platfrom mobile app for your business app for your business</p>
                        <a href="#" className="post-link">Details</a>
                    </div>
                    </Col>
                </Row>
            </Col>
             <Col md={6}>
                <Row className="single-course mb-3">
                    <Col lg={6}>
                    <div className="feature-image">
                        <img className="img-fluid" src="https://planetdigitalmedia.com/img/services/playing.png" alt="" />
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="course-info">
                        <h5 className="sub-title">Web Development</h5>
                        <p>I build native and cross platfrom mobile app for your business app for your business</p>
                        <a href="#" className="post-link">Details</a>
                    </div>
                    </Col>
                </Row>
            </Col>
             <Col md={6}>
                <Row className="single-course mb-3">
                    <Col lg={6}>
                    <div className="feature-image">
                        <img className="img-fluid" src="https://planetdigitalmedia.com/img/services/playing.png" alt="" />
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="course-info">
                        <h5 className="sub-title">Web Development</h5>
                        <p>I build native and cross platfrom mobile app for your business app for your business</p>
                        <a href="#" className="post-link">Details</a>
                    </div>
                    </Col>
                </Row>
            </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
