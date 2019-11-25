import React, { Component } from 'react';
import './Main.css';
import './Scroll.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Badge } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
    MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline, MDBFooter
} from "mdbreact";
import axios from 'axios';
import Second from './SecondComp';
import Third from './ThirdComp';
import Fourth from './FourthComp';
import Footer from './Footer';

class Main extends Component<{}, {}>{

    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <div id="classicformpage">
                <Router>
                    <MDBView>
                        <MDBMask className="d-flex justify-content-center align-items-center gradient">
                            <MDBContainer>
                                <MDBRow>
                                    <div className="white-text text-left text-md-left col-md-8 mt-xl-5 mb-5">
                                        <h1 className="h1-responsive font-weight-bold">
                                            Sign Up Now!{" "}
                                        </h1>
                                        <hr className="hr-light" />
                                        <h6 className="mb-4">
                                            Eazi4u is an online platform that connects companies and job seeking candidates
                                            to engage and set up interviews. Companies search for candidates and request
                                            interviews, a candidate that gets a job through our platform will receive R2000
                                            cash within a week after employment. Candidates must sign up and complete their
                                            profiles to receive requests from companies!
                                        </h6>
                                        <MDBBtn outline color="white">
                                            Learn More
                                        </MDBBtn>
                                    </div>
                                    <MDBCol md="8" xl="4" className="mb-4">
                                        <MDBCard id="classic-card">
                                            <MDBCardBody className="z-depth-2 white-text" align="left">
                                                <h3 className="text-center">
                                                    <MDBIcon icon="user" /> Register:
                                                </h3>
                                                <div className='text'><MDBBtn color='indigo'><MDBIcon fab icon="google" /> Sign In with Google</MDBBtn></div>
                                                <hr className="hr-light" />
                                                <MDBInput label="Your name" icon="user" className="white-text" />
                                                <MDBInput label="Your email" icon="envelope" className="white-text" />
                                                <MDBInput
                                                    label="Your password"
                                                    icon="lock"
                                                    type="password"
                                                    className="white-text"
                                                />
                                                <div className="text-center mt-4 black-text">
                                                    <MDBBtn color="indigo">Sign Up</MDBBtn>
                                                    <hr className="hr-light" />
                                                    <div className="text-center d-flex justify-content-center white-label">
                                                        <a href="https://twitter.com/" className="p-2 m-2">
                                                            <MDBIcon fab icon="twitter" className="white-text" />
                                                        </a>
                                                        <a href="#!" className="p-2 m-2">
                                                            <MDBIcon fab icon="linkedin-in" className="white-text" />
                                                        </a>
                                                        <a href="#!" className="p-2 m-2">
                                                            <MDBIcon fab icon="instagram" className="white-text" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBMask>
                    </MDBView>
                    </Router>
                    <Second />
                    <Third />
                    <Fourth />
                    <Footer />
                    </div>
        );
    }
}

export default Main;


