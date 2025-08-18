import React, { useState } from 'react';
import newspaperImage from '../components/assets/NewsPaper.png';
import todoImage from '../components/assets/todo.png';
//import newspaperImage from '../assets/images/NewsPaper.png'; 
import myWebsiteImage from '../components/assets/my_website.png';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';

function Projects({ setPage }) {
    const [showFrontendProjects, setShowFrontendProjects] = useState(false);

    const renderProjectsList = () => {
        return (
            <div>
                <Button variant="secondary" onClick={() => setShowFrontendProjects(false)} className="mb-4">
                    Back to Projects
                </Button>
                <Row>
                    {}
                    <Col md={6} className="mb-4">
                        <Card className="bg-dark text-light border-secondary">
                            <Card.Img
                                variant="top"
                                src={newspaperImage} 
                                alt="Newspaper Website Thumbnail"
                                style={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>Newspaper/html</Card.Title>
                                <Card.Text>
                                    A newspaper-style website built using pure HTML and CSS.
                                </Card.Text>
                                <a href="https://safeya2001.github.io/newspaper1/" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                                    View Project
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    {}
                    <Col md={6} className="mb-4">
                        <Card className="bg-dark text-light border-secondary">
                            <Card.Img
                                variant="top"
                                src={myWebsiteImage}
                                alt="My Website Thumbnail"
                                style={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>My Website Portfolio</Card.Title>
                                <Card.Text>
                                    A personal portfolio website built with HTML and CSS.
                                </Card.Text>
                                <a href="https://safeya2001.github.io/my_website/" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                                    View Project
                                </a>
                                </Card.Body>
                        </Card>
                    </Col>
   

    {}
                    <Col md={4} className="mb-4">
                        <Card className="bg-dark text-light border-secondary">
                            <Card.Img
                                variant="top"
                                src={todoImage}
                                alt="To-Do List Thumbnail"
                                style={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>Simple To-Do List</Card.Title>
                                <Card.Text>
                                    A simple to-do list application built with HTML, CSS, and JavaScript.
                                </Card.Text>
                                <a href="https://safeya2001.github.io/ToDo/" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                                    View Project
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    };
    return (
        <section className="text-light p-4 text-center">
            <Container>
                <h2 className="mb-4">Projects</h2>
                {showFrontendProjects ? (
                    renderProjectsList()
                ) : (
                    <div className="bg-dark p-5 rounded d-flex flex-column align-items-center">
                        <h3 className="mb-4">Explore My Front-End Projects</h3>
                        <Button
                            variant="info"
                            size="lg"
                            onClick={() => setShowFrontendProjects(true)}
                        >
                            View Front-End Projects
                        </Button>
                    </div>
                )}
            </Container>
        </section>
    );
}

export default Projects;