import React from 'react';
import { Container } from 'react-bootstrap';

function Projects() {
    return (
        <section className="text-light p-4">
            <Container>
                <h2 className="text-center mb-4">Projects</h2>
                <div className="bg-dark p-3 rounded mb-3">
                    <h3>Histogram Equalization</h3>
                    <p>Histogram Equalization is a technique used in computer image processing...</p>
                    <a href="#" className="text-info">Click here to go to GitHub project</a>
                </div>
                <div className="bg-dark p-3 rounded">
                    <h3>Digital electronics lab</h3>
                    <p>In this project we made a comprehensive design that contains Flip Flops...</p>
                    <a href="#" className="text-info">Click here to go to project</a>
                </div>
            </Container>
        </section>
    );
}

export default Projects;