import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactUs() {
    return (
        <section className="text-light p-4">
            <Container>
                <h2 className="text-center mb-4">Contact Us</h2>
                <Form className="bg-dark p-4 rounded">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Your message" />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </section>
    );
}

export default ContactUs;