import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <section className="text-light p-4">
            <Container className="text-center">
                <h1 className="display-4">Welcome to my Official Website</h1>
<img
  style={{ width: '10%', height: '10%' }}
  src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/2618.svg"
  alt=""
/>                <p className="lead">SAFEYA ISTETI</p>
                <p>Personal Website</p>
                <a href='https://github.com/safeya2001'> <p>My GitHub</p></a>
                <a href='mailto:safeyasaleh11@gmail.com'><p>safeyasaleh11@gmail.com</p></a>
                <a href='tel:0791485324'><p>0791485324</p></a>
            </Container>
        </section>
    );
}

export default Home;
