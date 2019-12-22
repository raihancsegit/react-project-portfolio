import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import webIcon from "../assets/images/web.svg";
import mobileIcon from "../assets/images/mobile.svg";
import graphicsIcon from "../assets/images/graphics.svg";
import "../assets/css/services.css";
export default class ContactPageContent extends Component {
  render() {
    return (
      <div>
      <Container className="mt-5">
       <Row>
         <Col lg={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Give Me Message</Form.Label>
                  <Form.Control as="textarea" rows="4" />
                </Form.Group>
              <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
         </Col>
         <Col lg={6}>
          <div className="text-widget">
            <h2>Discuss Now</h2>
            <p>Probo Chhatni, Chhatni Dhekra, Adamdighi, Bogra, Bangladesh</p>
            <p>Email: rubel2585@gmail.com</p>
            <p>+8801763633959</p>
          </div>
         </Col>
       </Row>
      </Container>
      </div>
    );
  }
}
