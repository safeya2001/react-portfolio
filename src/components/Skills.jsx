import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        <section className="text-light p-4">
            <Container>
                <h2 className="text-center mb-4">Skills</h2>
                <Row className="mb-4">
                    <Col lg={12}>
                        <div className="bg-dark p-3 rounded">
                            <h4 className="text-center mb-3">Programming & Development</h4>
                            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">React.js</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">JavaScript</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">HTML5 & CSS3</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Bootstrap</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Node.js</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Git & GitHub</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Python</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">SQL</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Java</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">C++</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col lg={12}>
                        <div className="bg-dark p-3 rounded">
                            <h4 className="text-center mb-3">Data & Analytics</h4>
                            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Data Sourcing</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Data Interpretation</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Data Profiling</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Data Wrangling</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Data Curation</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Predictive Modeling</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Microsoft Excel</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Power BI</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Tableau</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="bg-dark p-3 rounded">
                            <h4 className="text-center mb-3">Tools & Collaboration</h4>
                            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Google Workspace</li>
                                <li className="me-3 mb-2 p-2 bg-secondary rounded">Slack</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;