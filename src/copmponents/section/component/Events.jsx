import { Container, Row, Col, Carousel, Pagination } from'react-bootstrap';
import './css/event.css';
import img1 from '../../../../public/images/event-custom.jpg';
import img2 from '../../../../public/images/event-private.jpg';
import img3 from '../../../../public/images/event-birthday.jpg';
import React, { forwardRef, useImperativeHandle } from 'react';

const Events  = forwardRef((props, ref) => {
    const { eventsRef } = props;

    useImperativeHandle(eventsRef, () => ({
        scrollIntoView: () => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            });
        },
    }));
    return (
        <section className="events"  ref={ref}>
               <Container>

<div className="section-title">
  <h2>Organize Your <span>Events</span> in our Restaurant</h2>
</div>

<Carousel className="events-slider">
  <Carousel.Item>
    <Row className="event-item">
      <Col lg={6}>
        <img src={img1} className="img-fluid" alt="" />
      </Col>
      <Col lg={6} className="pt-4 pt-lg-0 content">
        <h3>Birthday Parties</h3>
        <div className="price">
          <p><span>$189</span></p>
        </div>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        </ul>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </p>
      </Col>
    </Row>
  </Carousel.Item>
  <Carousel.Item>
    <Row className="event-item">
      <Col lg={6}>
        <img src={img2} className="img-fluid" alt="" />
      </Col>
      <Col lg={6} className="pt-4 pt-lg-0 content">
        <h3>Birthday Parties</h3>
        <div className="price">
          <p><span>$189</span></p>
        </div>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        </ul>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </p>
      </Col>
    </Row>
  </Carousel.Item>
  <Carousel.Item>
    <Row className="event-item">
      <Col lg={6}>
        <img src={img3} className="img-fluid" alt="" />
      </Col>
      <Col lg={6} className="pt-4 pt-lg-0 content">
        <h3>Birthday Parties</h3>
        <div className="price">
          <p><span>$189</span></p>
        </div>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        </ul>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </p>
      </Col>
    </Row>
  </Carousel.Item>
  


</Carousel>

</Container>
    
        </section>
        
        
    );
});

export default Events;