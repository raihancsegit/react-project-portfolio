import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/css/topNavigation.css";
import whiteLogo from "../assets/images/navlogo.svg";
import blueLogo from "../assets/images/navlogoScroll.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
class TopNavigation extends Component {

    constructor(){
         super();
         this.state = {
            navbarClass: "topNavigation",
            brandLogo: [whiteLogo],
            mobileMenuIcon: "whiteIcon",
            menuBg: ""
         }
    }

    scrollMenu = ()=> {

        if(window.scrollY > 100){
           
           this.setState({
               navbarClass: "fixedTopNavigation",
               brandLogo: [blueLogo],
               mobileMenuIcon: "blueIcon"
           });
     } else {

        this.setState({
            navbarClass: "topNavigation",
            brandLogo: [whiteLogo],
            mobileMenuIcon: "whiteIcon"
        });
     }

    }
    mobileMenu = () => {

        const screenWidth = window.innerWidth;

        if (screenWidth > 991) {
            this.setState({
                menuBg: "largeMenu"
            });
        } else {
            this.setState({
                menuBg: "darkMenu"
            });
        }

    }
     componentDidMount(){
        window.addEventListener("scroll", this.scrollMenu);
        window.addEventListener("resize", this.mobileMenu);
     }
    render() {
        return (
            <>
                <Container className="topMenu">
                    <Row>
                     <Col>
                        <Navbar collapseOnSelect expand="lg" className={this.state.navbarClass} fixed="top" bg={this.state.menuBg}>
                        <Navbar.Brand href="/" className="text-white brandText"><img src={this.state.brandLogo}/> Raihan Islam</Navbar.Brand>
                                <Navbar.Toggle className={this.state.mobileMenuIcon} aria-controls="responsive-navbar-nav"> <FontAwesomeIcon icon={faBars}/> </Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavItem> 
                               <NavLink className="nav-link" exact={true} to="/">HOME</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink className="nav-link" to="/services">SERVICES</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink className="nav-link" to="/courses">COURSES</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink className="nav-link" to="/portfolios">PORTFOLIO</NavLink>
                            </NavItem>
                            <NavItem> 
                               <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                            </NavItem>
                            <NavItem> 
                               <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                            </NavItem>
                        </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                      </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default TopNavigation;