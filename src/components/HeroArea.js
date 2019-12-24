import React, { Component, Fragment } from 'react';

import {Container, Row, Col, Button} from "react-bootstrap";

import TopNavigation from "./TopNavigation";

import "../assets/css/heroArea.css";

class heroArea extends Component {
    render() {
        return (
          <Fragment>
              <Container fluid={true} className="heroArea">
                  <Row>
                      <Col>
                         <div className="heroWrapper">
                            <div className="heroContent text-center">
                                <h1 className="text-white text-uppercase font-weight-bold">Web Developer</h1>
                                <h4 className="text-white subTitle">Mobile Apps Collections</h4>
                                <Button varient="primary" className="btn btn-danger">Read More</Button>
                            </div>
                         </div>
                      </Col>
                  </Row>
              </Container>
          </Fragment>
        );
    }
}

export default heroArea;