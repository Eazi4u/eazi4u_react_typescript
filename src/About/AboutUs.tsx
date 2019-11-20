import React from 'react';
import { MDBContainer, MDBCard, MDBRow, MDBCol, MDBCardText, MDBCardBody, MDBCardImage} from 'mdbreact';
import PheloImg from '../About/phelo.jpg'
import AneleImg from '../About/mabheka.jpg'
import './AboutUs.css';


const AboutUs = (props: any) => {

    return (

            <MDBContainer className='container-fluid' align='center'>
                <MDBRow>
                    <MDBCol>
                        <MDBCard style={{padding: '10', height:'42rem', width:'30rem'}}>
                            <MDBCardImage className='img-fluid' src={PheloImg} />
                                <MDBCardText><strong>Phelo Macanda (Co-Founder & CEO)</strong></MDBCardText> 
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard style={{padding: '10', width: '30rem'}}>
                            <MDBCardImage className='img-fluid' src={AneleImg} />
                            <MDBCardText><strong>Anele Chila (Co-Founder & CTO)</strong></MDBCardText>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

    );
}

export default AboutUs;