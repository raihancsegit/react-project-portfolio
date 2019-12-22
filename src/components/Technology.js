import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
      {
        project: "Java", value: 100
      },
      {
        project: "Javascript", value: 85
      },
      {
        project: "php", value: 65
      },
      {
        project: "html", value: 100
      },
      {
        project: "css", value: 95
      },
      {
        project: "wp", value: 45
      },
      {
        project: "laravel", value: 20
      },
      {
        project: "ruby", value: 5
      },
      {
        project: "nodejs", value: 98
      },
  ];


class Technology extends Component {

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                       <Col className="text-center my-5">
                           <h3 className="sectionTitle">Technology Used</h3>
                       </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                        <ResponsiveContainer> 
                         <BarChart width={100} height={350} data={data}>
                           <XAxis dataKey="project"/>
                           <Tooltip />
                           <Bar dataKey="value" fill="#b90a4b"/>
                         </BarChart>
                        </ResponsiveContainer>
                        </Col>
                        <Col lg={6}>
                           <div className="simpleText">
                           <p>To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
                           <p>I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.</p>
                           <p>Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
                           </div>
                        </Col>
                        
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Technology;