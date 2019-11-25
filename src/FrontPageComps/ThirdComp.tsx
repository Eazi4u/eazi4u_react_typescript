import React, { FunctionComponent } from 'react';
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBBtn } from 'mdbreact';
import Images from './images.jpeg';

const Third: FunctionComponent = (props: any) => {

    return (
        <React.Fragment>
            <MDBCard className='my-5 px-5 pb-5'>
                <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Eazi4u Blogs
                    </h2>
                    <p className="text-center w-responsive mx-auto mb-5">
                        We are all about ensuring that you receive your dream job as a
                        candidate, below there are blogs written by our team members that
                        can help you boost your confidence in face to face interviews, read
                        them carefully they are very useful.
                    </p>
                    <MDBRow>
                        <MDBCol lg='5'>
                            <MDBView>
                                <img className='img-fluid' src={Images} alt='no image' />
                                <a href='#!'> <MDBMask overlay='white-slight' /> </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg='7'>
                            <a href='#!' className='blue-text'>
                                <h6 className='font-weight-bold mb-3 p-0'>
                                    <MDBIcon icon='briefcase' className='pr-2' />
                                    Interviews
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>How to excel on your interviews</strong>
                            </h3>
                            <p>
                                One of our Talent Advisors has written this blog to 
                                help graduates who have not experienced how interviews
                                work. This starts from the beginning and guides you through
                                every step of the way till you get a job offer.
                            </p>
                            <p>
                                by
                            <a href="#!" style={{padding: '10px'}}>
                                    <strong>Alan Turing</strong>
                            </a><br/>
                                25/11/2019
                                </p>
                            <MDBBtn color="success" size='lg' className="waves-light ">
                                Read more
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                </MDBCardBody>
            </MDBCard>
        </React.Fragment>
    );
}

export default Third;