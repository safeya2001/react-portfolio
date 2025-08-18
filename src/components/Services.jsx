import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaDatabase, FaTable } from 'react-icons/fa'; 

function Services() {
  return (
    <section className="text-light p-4">
      <Container>
        <h2 className="text-center mb-4">Services</h2>
        <Row className="text-center">

       
          <Col md={4} className="mb-3">
            <div className="bg-dark p-4 rounded">
              <i className="bi bi-code-slash h1 mb-3"></i>
              <h3>Web Development</h3>
              <p>Building responsive and modern websites using React and Bootstrap.</p>
            </div>
          </Col>

   
          <Col md={4} className="mb-3">
            <div className="bg-dark p-4 rounded">
              <div className="d-flex justify-content-center h1 mb-3">
                <FaHtml5 className="me-2" style={{ color: '#E34F26' }} />
                <FaCss3Alt className="me-2" style={{ color: '#1572B6' }} />
                <FaJs style={{ color: '#F7DF1E' }} />
              </div>
              <h3>Frontend Development</h3>
              <p>Expertise in creating static and dynamic web pages with HTML, CSS, and JavaScript.</p>
            </div>
          </Col>

        
    
          <Col md={4} className="mb-3">
            <div className="bg-dark p-4 rounded">
              <div className="d-flex justify-content-center h1 mb-3">
                <FaDatabase className="me-2" />
                <i className="bi bi-file-earmark-spreadsheet-fill me-2"></i>
              </div>
              <h3>Data Analysis</h3>
              <p>Analyzing and visualizing data using Python and Excel to uncover key insights.</p>
            </div>
          </Col>
   
          <Col md={4} className="mb-3">
            <div className="bg-dark p-4 rounded">
              <FaTable className="h1 mb-3" />
              <h3>Tableau Development</h3>
              <p>Designing interactive dashboards and reports for powerful data visualization.</p>
            </div>
          </Col>

       
          <Col md={4} className="mb-3">
            <div className="bg-dark p-4 rounded">
              <div className="d-flex justify-content-center h1 mb-3">
                <FaPhp className="me-2" style={{ color: '#777BBE' }} />
                <FaLaravel style={{ color: '#FF2D20' }} />
              </div>
              <h3>Back-End Development</h3>
              <p>Building robust server-side applications using PHP and the Laravel framework.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;