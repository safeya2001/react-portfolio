import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Testimonials() {
    return (
        <section className="text-light p-4">
            <Container>
                <h2 className="text-center mb-4">Testimonials</h2>
                <div className="bg-dark p-4 rounded">
                    <Card className="bg-secondary text-light mb-3">
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>"Safeya is a brilliant developer who is dedicated and hard-working."</p>
                                <footer className="blockquote-footer text-light">
                                    sanaa <cite title="Source Title">trainer</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    
                </div>
            </Container>
        </section>
    );
}

export default Testimonials;