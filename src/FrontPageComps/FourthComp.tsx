import React, { FunctionComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from 'mdbreact';

const Fourth: FunctionComponent = (props: any) => {

    return (
        <React.Fragment>
            <MDBContainer>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Contact us
                </h2>
                <p className="text-center w-responsive mx-auto pb-5">
                    For people with queries and complains and compliments
                    you may write to us by filling in the form below, if it
                    is a complaint it will be attended to within 24 hours.
                </p>
                <MDBRow>
                    <MDBCol md="9" className="md-0 mb-5">
                        <form>
                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="md-form mb-0 ">
                                        <MDBInput type="text" id="contact-name" label="Your name"/>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="text"
                                            id="contact-email"
                                            label="Your email"
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12">
                                    <div className="md-form mb-0">
                                        <MDBInput type="text" id="contact-subject" label="Subject" />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12">
                                    <div className="md-form mb-0">
                                        <MDBInput
                                            type="textarea"
                                            id="contact-message"
                                            label="Your message"
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </form>
                        <div className="text-center text-md-left">
                            <MDBBtn color="primary" size="lg">
                                Send
                             </MDBBtn>
                        </div>
                    </MDBCol>
                    <MDBCol md="3" className="text-center">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                                <p>Tyger Falls, Tygervalley, Bellville Cape Town</p>
                            </li>
                            <li>
                                <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                                <p>+27 21 4000 0000</p>
                            </li>
                            <li>
                                <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
                                <p>info@eazi4u.com</p>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    );
}

export default Fourth;