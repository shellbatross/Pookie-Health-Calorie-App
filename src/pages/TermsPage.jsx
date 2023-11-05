import React, {useContext,useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./TermsPage.scss"
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function TermsPage() {
    return (<div className = "all-items">
        <div className='termstitle' style={{fontSize: '150px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Terms and Conditions</div>
        <Accordion defaultActiveKey="0" className='accordionterms' style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Acceptance of Terms and Conditions</Accordion.Header>
            <Accordion.Body>
            By accessing or using our app, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these Terms and Conditions, please do not use the app.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Privacy and Data Protection</Accordion.Header>
            <Accordion.Body>
            {'Data Collection and Usage: Our app collects and stores certain user data for the sole purpose of improving the app\'s functionality and user experience. We do not sell or outsource your data to any external apps, organizations, or third parties.'}
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Termination</Accordion.Header>
            <Accordion.Body>
            We reserve the right to terminate or suspend your access to the app at our discretion, with or without cause, including but not limited to your failure to comply with these Terms and Conditions.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Changes to Terms and Conditions</Accordion.Header>
            <Accordion.Body>
            We may update and modify these Terms and Conditions at any time. It is your responsibility to review these Terms and Conditions periodically for any changes.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
            <Accordion.Header>Contact Us</Accordion.Header>
            <Accordion.Body>
            If you have any questions, concerns, or feedback regarding these Terms and Conditions or our app, please contact us at testudo@terpmail.com.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Link to = "/userinfo"><Button variant = "secondary" style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize: '20px', backgroundColor: 'rgb(75, 89, 181)', textAlign: 'center'}} className="backtouserinfo"> Back to User Info</Button></Link>
        
        </div>)
        }



export default TermsPage;
