import React, { forwardRef, useImperativeHandle } from 'react';
import  { useState } from 'react';
import { Container, Row, Col, Image, Modal, ModalBody, Carousel } from 'react-bootstrap';
import './css/event.css';
const Gallery = forwardRef((props, ref) => {
    const { galleryRef } = props;

    useImperativeHandle(galleryRef, () => ({
        scrollIntoView: () => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            });
        },
    }));


    const images = [
        "../../../../public/images/gallery/gallery-1.jpg",
        "../../../../public/images/gallery/gallery-2.jpg",
        "../../../../public/images/gallery/gallery-3.jpg",
        "../../../../public/images/gallery/gallery-4.jpg",
        "../../../../public/images/gallery/gallery-5.jpg",
        "../../../../public/images/gallery/gallery-6.jpg",
        "../../../../public/images/gallery/gallery-7.jpg",
        "../../../../public/images/gallery/gallery-8.jpg"
    ];

    const GalleryItem = ({ src, index }) => {
        const [modalShow, setModalShow] = useState(false);
    
        return (
          <Col lg={3} md={4} className="mb-4">
            <div className="gallery-item">
              <a href="#" onClick={() => setModalShow(true)} className="gallery-lightbox">
                <Image src={src} alt="" className="img-fluid" />
              </a>
            </div>
    
            {/* Modal برای نمایش عکس‌ها به صورت بزرگ */}
            <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
              <ModalBody>
                <Carousel>
                  {images.map((imageSrc, i) => (
                    <Carousel.Item key={i}>
                      <Image src={imageSrc} alt="" className="img-fluid" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </ModalBody>
            </Modal>
          </Col>
        );
      };
    
      return (
        <Container fluid ref={ref} className='my-5'>
    
          <div className="section-title">
            <h2>Some photos from <span>Our Restaurant</span></h2>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>
    
          <Row>
            {images.map((src, index) => (
              <GalleryItem key={index} src={src} index={index} />
            ))}
          </Row>
    
        </Container>
    );
});

export default Gallery;