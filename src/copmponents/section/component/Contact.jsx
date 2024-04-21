import { Container, Row, Col, Form } from 'react-bootstrap';
import './css/contact.css'
import React, { forwardRef, useImperativeHandle } from 'react';
const Contact = forwardRef((props, ref) => {
  const { contactRef } = props;

  useImperativeHandle(contactRef, () => ({
    scrollIntoView: () => {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    },
  }));
  return (
    <section id="contact" className="contact my-5" ref={ref}>
      <Container>
        <div className="section-title">
          <h2><span>Contact</span> Us</h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
      </Container>

      <div className="map">
        <iframe title="Google Map" style={{ border: 0, width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
      </div>

      <Container className="mt-5">
        <Row>
          <Col lg={3} md={6}>
            <div className="info">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>A108 Adam Street<br />New York, NY 535022</p>
            </div>
          </Col>

          <Col lg={3} md={6} className="mt-4 mt-lg-0">
            <div className="info">
              <i className="bi bi-clock"></i>
              <h4>Open Hours:</h4>
              <p>Monday-Saturday:<br />11:00 AM - 23:00 PM</p>
            </div>
          </Col>

          <Col lg={3} md={6} className="mt-4 mt-lg-0">
            <div className="info">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@example.com<br />contact@example.com</p>
            </div>
          </Col>

          <Col lg={3} md={6} className="mt-4 mt-lg-0">
            <div className="info">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
            </div>
          </Col>
        </Row>

        <Form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <Row>
            <Col md={6} className="form-group">
              <Form.Control type="text" name="name" id="name" placeholder="Your Name" required />
            </Col>
            <Col md={6} className="form-group mt-3 mt-md-0">
              <Form.Control type="email" name="email" id="email" placeholder="Your Email" required />
            </Col>
          </Row>
          <div className="form-group mt-3">
            <Form.Control type="text" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <Form.Control as="textarea" name="message" rows={5} placeholder="Message" required />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </Form>
      </Container>
    </section>
  );
});

export default Contact;