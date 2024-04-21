
import React, { forwardRef, useImperativeHandle } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './css/chefs.css';
const Chefs = forwardRef((props, ref) => {
    const { chefsRef } = props;

    useImperativeHandle(chefsRef, () => ({
        scrollIntoView: () => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            });
        },
    }));


  const chefsData = [
    { name: 'Walter White', role: 'Master Chef', image: '../../../../public/images/chefs/chefs-3.jpg' },
    { name: 'Sarah Jhonson', role: 'Patissier', image: '../../../../public/images/chefs/chefs-2.jpg' },
    { name: 'William Anderson', role: 'Cook', image: '../../../../public/images/chefs/chefs-1.jpg' }
  ];

  const ChefItem = ({ name, role, image }) => {
    return (
      <Col lg={4} md={6}>
        <div className="member">
          <div className="pic"><Image src={image} className="img-fluid" alt={name} /></div>
          <div className="member-info">
            <h4>{name}</h4>
            <span>{role}</span>
            <div className="social">
              {/* اینجا می‌توانید لینک‌های شبکه‌های اجتماعی را قرار دهید */}
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </Col>
    );
  };

  return (
    <section className='chefs' ref={ref}>
    <Container  >

      <div className="section-title">
        <h2>Our Professional <span>Chefs</span></h2>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
      </div>

      <Row>
        {chefsData.map((chef, index) => (
          <ChefItem key={index} {...chef} />
        ))}
      </Row>

    </Container>
    </section>
    );
});

export default Chefs;
