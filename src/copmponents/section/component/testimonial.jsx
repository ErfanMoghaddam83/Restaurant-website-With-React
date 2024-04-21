import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import './css/testimonials.css';
import img1 from '../../../../public/images/testimonials/testimonials-1.jpg';
import img2 from '../../../../public/images/testimonials/testimonials-2.jpg';
import img3 from '../../../../public/images/testimonials/testimonials-3.jpg';
const Testimonials = () => {
  return (
    <section id="testimonials" class="testimonials">
      <Container className="position-relative">
        <Row>
          <Col className="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
            {/* React Bootstrap Carousel */}
            <Carousel>
              {/* Testimonial Item 1 */}
              <Carousel.Item>
                <div className="testimonial-item">
                  <Image src={img1} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </Carousel.Item>
              {/* End Testimonial Item 1 */}

              {/* Testimonial Item 2 */}
              <Carousel.Item>
                <div className="testimonial-item">
                  <Image src={img2} className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </Carousel.Item>
              {/* End Testimonial Item 2 */}

              {/* Testimonial Item 3 */}
              <Carousel.Item>
                <div className="testimonial-item">
                  <Image src={img3} className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </Carousel.Item>
              {/* End Testimonial Item 3 */}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
