import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerBg from "../assets/images/project_bg.jpg";
import "../assets/css/pageHeader.css";
export default class PageHeader extends Component {

  render() {
   const headerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${headerBg})`,
        backgroundColor: "rgba(0,0,0,.3)",
        height: "350px",
   }
    return (
      <>
      <div className="page-header-wrapper" style={headerStyle}> 
        <Container>
         <Row>
          <Col>
            <div className="page-header text-center">
              <h2 className="text-white">{this.props.pageTitle}</h2>
            </div>
          </Col>
         </Row>
        </Container>
      </div>
      </>
    );
  }
}
