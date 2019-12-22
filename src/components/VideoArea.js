import React, { Component } from 'react';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "../assets/css/videoArea.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton, PosterImage } from "video-react";
export default class VideoArea extends Component {

  constructor(){

     super();
     this.state = {
       show: false
     }
  }

  showModal = ()=> {
    this.setState({
      show: true
    });
  }

  hideModal = ()=> {
    this.setState({
      show: false
    });
  }
  render() {
    return (
      <>
        <section className="videoArea my-5">
          <Container>
              <Row>
                  <Col>
                    <div className="videoWrap text-center p-5">
                        <h3>How I Do</h3>
                        <p>First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                        <button onClick={this.showModal} className="icon"><FontAwesomeIcon icon={faPlayCircle}/></button>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Modal show={this.state.show} onHide={this.hideModal} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Player poster="https://planetdigitalmedia.com/img/services/playing.png">
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                <BigPlayButton position="center" />
              </Player>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hideModal}>
                Close
          </Button>
            </Modal.Footer>
          </Modal>
        </section>
      </>
    );
  }
}
