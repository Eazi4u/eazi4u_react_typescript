import React, { FunctionComponent } from 'react';
import { MDBCol, MDBRow, MDBIcon } from 'mdbreact';
import './Main.css';


const Second: FunctionComponent = (props: any) => {

    return (
        <section className='text-center my-5'>
            <h2 className="h1-responsive font-weight-bold my-5">
                What you need to know about Eazi4u
            </h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
                Eazi4u prides itself in providing the best communication platform between
                our clients and job seeking candidates in the following fields.
            </p>
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="laptop" size="3x" className="blue-text" />
                    <h5 className="font-weight-bold my-4">Information Technology</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Our clients are head-hunting for graduates and experienced people
                        in IT, this will include: Developers, Business Analysts, Systems Analysts,
                        Project Managers, Product Owners, Scrum Masters and IT Managers.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="medkit" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Health</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Health companies and hospitals are looking for people with degrees
                        or expertise in: Doctors, Dentistry, Pharmacy, General Practioners,
                        Gyneacology, Oncology, Speech Therapy.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon far icon="money-bill-alt" size="3x" className="green-text" />
                    <h5 className="font-weight-bold my-4">Finance</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Our financial clients are looking for people with qualifications
                        in the following fields: Finance, Accounting, Economics, Statistics,
                        Data Analysts, Business Management.
                    </p>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default Second;

