import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function Education() {
    return (
        <section className="text-light p-4">
            <Container>
                <h2 className="text-center mb-4">Education & Certificates</h2>
                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="bg-dark text-light p-4 rounded">
                            <h3>University of Jordan</h3>
                            <p>B.Sc. in Computer Engineering</p>
                            <p>Graduated 2025</p>
                            <p>I am a computer engineer with a passion for technology and problem-solving. I study at the University of Jordan. With a strong work ethic and expertise in clean architecture code, I thrive in collaborative environments and excel under pressure.</p>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="bg-dark text-light p-4 rounded">
                            <h3>Certificates</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="https://drive.google.com/file/d/1-2dZv7vUK7fy1ztHz48nWyWZ-7jdJ_dt/view" target="_blank" rel="noopener noreferrer">
                                        Tech for Jobs Advanced Data Analytics - High Performing
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://drive.google.com/file/d/1Lgi3Ha8JIuduIEyqZYB5rf-s5gCBXBuf/view" target="_blank" rel="noopener noreferrer">
                                        CCNA from Cisco
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://drive.google.com/file/d/1rlpJ8oOb-tcozSsklNAjBVCal4Sg7kx1/view" target="_blank" rel="noopener noreferrer">
                                        Python from SoloLearn
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://drive.google.com/file/d/1UI37AB1ZYwsOtfpNBVZuo8HCsPdi_1ha/view" target="_blank" rel="noopener noreferrer">
                                        Simscape Onramp from MathWorks
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://drive.google.com/file/d/1QGRNTJ2lllKVmFc6nS0OJGQcqszITFUq/view" target="_blank" rel="noopener noreferrer">
                                        NDG Linux Unhatched from Cisco
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://drive.google.com/file/d/1ciXUOKhbqG-Fk6yDTktl9SwjFZZ1m_LZ/view" target="_blank" rel="noopener noreferrer">
                                        Matlab Onramp
                                    </a>
                                </li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Education;