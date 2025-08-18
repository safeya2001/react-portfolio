import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import './index.css'; 

function App() {
    const [page, setPage] = useState('home');

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <Home />;
            case 'services':
                return <Services />;
            case 'skills':
                return <Skills />;
            case 'education':
                return <Education />;
            case 'experience':
                return <Experience />;
            case 'projects':
                return <Projects />;
            case 'testimonials':
                return <Testimonials />;
            case 'contactus':
                return <ContactUs />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="bg-dark text-light min-vh-100 d-flex flex-column">
            <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-secondary">
                <Container>
                    <Navbar.Brand href="#" onClick={() => setPage('home')}>
                        SAFEYA ISTETI
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={() => setPage('home')}>Home</Nav.Link>
                            <Nav.Link onClick={() => setPage('services')}>Services</Nav.Link>
                            <Nav.Link onClick={() => setPage('skills')}>Skills</Nav.Link>
                            <Nav.Link onClick={() => setPage('education')}>Education</Nav.Link>
                            <Nav.Link onClick={() => setPage('experience')}>Experience</Nav.Link>
                            <Nav.Link onClick={() => setPage('projects')}>Projects</Nav.Link>
                            <Nav.Link onClick={() => setPage('testimonials')}>Testimonials</Nav.Link>
                            <Nav.Link onClick={() => setPage('contactus')}>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className="flex-grow-1">
                {renderPage()}
            </main>

            <footer className="bg-dark text-center p-3 mt-auto">
                <p>&copy; 2024 SAFEYA ISTETI. All Right Reserved.</p>
            </footer>
        </div>
    );
}

export default App;
