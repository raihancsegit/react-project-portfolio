import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default class RecentProjects extends Component {
  render() {
    return (
        <>
          <section className="my-5">
              <Container>
                    <Row>
                        <Col className="sectionTitle text-center text-uppercase my-5">
                            <h3>Our Recent Projects</h3>
                        </Col>
                    </Row>
                  <Row>
                      <Col lg={4} md={6}>
                        <Card className="text-center">
                        <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary" className="btn btn-danger">Details</Button>
                        </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={4} md={6}>
                        <Card className="text-center">
                        <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary" className="btn btn-danger">Details</Button>
                        </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={4} md={6}>
                        <Card className="text-center">
                        <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary" className="btn btn-danger">Details</Button>
                        </Card.Body>
                        </Card>
                      </Col>
                  </Row>
              </Container>
          </section>
         </>
    );
  }
}
