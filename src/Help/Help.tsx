import React from 'react';
import './Help.css';
import * as ReactBootStrap from 'react-bootstrap';

const Help = (props: any) => {

    var questions = [{_id: 0, quest: 'What is Eazi4u?', ans: 'Eazi4u is an online recruitment procedure whereby companies filter and select their desired candidates'}, 
                     {_id: 1, quest: 'How is it done?', ans: 'Like this'}];

    const handleAlert = () => { 
        alert("Thank you, your query has been submitted! One of our members will get back to you shortly."); 
    }
    
    const faqs = questions.map((item) => {
        return (
            <div key={item._id}>
                <ReactBootStrap.Accordion defaultActiveKey={item._id.toString()}>
                <ReactBootStrap.Card>
                    <ReactBootStrap.Accordion.Toggle as={ReactBootStrap.Card.Header} eventKey={item._id.toString()} style={{ cursor: 'pointer' }}>
                        {item.quest}
                    </ReactBootStrap.Accordion.Toggle>
                    <ReactBootStrap.Accordion.Collapse eventKey={item._id.toString()}>
                        <ReactBootStrap.Card.Body>{item.ans}</ReactBootStrap.Card.Body>
                    </ReactBootStrap.Accordion.Collapse>
                </ReactBootStrap.Card>
            </ReactBootStrap.Accordion>
            </div>
        );
    })

    return (
        <div className='container-fluid'>
            <h1><b>FAQ's</b></h1>
            {faqs}
            <h2 style={{paddingTop:'30px', paddingBottom:'30px'}}><b>Submit a query</b></h2>
            <div className='form-cont' style = {{borderColor: 'white'}}>
                <input type='email' placeholder='E-mail'/>
                <input placeholder='Reason'/>
                <textarea placeholder='Message'/>
                <form onSubmit={handleAlert}>
                    <ReactBootStrap.Button type="submit" color='grey'>Send</ReactBootStrap.Button>
                </form>
                
            </div>
        </div>
    );
}

export default Help;