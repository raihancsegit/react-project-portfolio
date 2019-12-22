import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rubelPic from "../assets/images/rubel.jpg";
import "../assets/css/testimonials.css";
export default class Testimonials extends Component {
  render() {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true
   };
    return (
      <>
      <Container>
       <Row>
        <Col lg={8} className="text-center mx-auto">
         <Slider {...settings}>
          
            <div className="singleTestimonial">
              <img className="profilePic img-fluid" src={rubelPic} alt="rubel"/>
              <h4>Web Developer</h4>
              <p>lorem Perspiciatis volutpat repellat molestiae aliquid hic! Illo, feugiat excepteur, debitis wisi odit, cras deleniti nostrum. Elit senectus auctor repudiandae explicabo dictum veniam. Maecenas morbi enim</p>
            </div>
            <div className="singleTestimonial">
            <img className="profilePic img-fluid" src={rubelPic} alt="rubel"/>
              <h4>Web Developer</h4>
              <p>lorem Perspiciatis volutpat repellat molestiae aliquid hic! Illo, feugiat excepteur, debitis wisi odit, cras deleniti nostrum. Elit senectus auctor repudiandae explicabo dictum veniam. Maecenas morbi enim</p>
            </div>
            <div className="singleTestimonial">
           <img className="profilePic img-fluid" src={rubelPic} alt="rubel"/>
             <h4>Web Developer</h4>
              <p>lorem Perspiciatis volutpat repellat molestiae aliquid hic! Illo, feugiat excepteur, debitis wisi odit, cras deleniti nostrum. Elit senectus auctor repudiandae explicabo dictum veniam. Maecenas morbi enim</p>
            </div>
            <div className="singleTestimonial">
              <img className="profilePic img-fluid" src={rubelPic} alt="rubel"/>
                <h4>Web Developer</h4>
              <p>lorem Perspiciatis volutpat repellat molestiae aliquid hic! Illo, feugiat excepteur, debitis wisi odit, cras deleniti nostrum. Elit senectus auctor repudiandae explicabo dictum veniam. Maecenas morbi enim</p>
            </div>
            <div className="singleTestimonial">
             <img className="profilePic img-fluid" src={rubelPic} alt="rubel"/>
              <h4>Web Developer</h4>
              <p>lorem Perspiciatis volutpat repellat molestiae aliquid hic! Illo, feugiat excepteur, debitis wisi odit, cras deleniti nostrum. Elit senectus auctor repudiandae explicabo dictum veniam. Maecenas morbi enim</p>
            </div>
          
         </Slider>
        </Col>
       </Row>
      </Container>
      </>
    );
  }
}
