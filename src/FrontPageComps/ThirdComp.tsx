import React, { FunctionComponent } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const Third: FunctionComponent = (props: any) => {

    return (
        <React.Fragment>
            {props.howTo} + {props.screenshots}
        </React.Fragment>
    );
}

export default Third;