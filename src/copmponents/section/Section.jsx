import React, { useRef, useState } from 'react';
import NavBar from '../header/Navbar';
import SliderCarousel from './component/Carousel';
import About from './component/About';
import Menu from './component/Menu';
import Specials from './component/Specials';
import Events from './component/Events';
import Gallery from './component/Gallery';
import Chefs from './component/Chefs';
import Testimonials from './component/testimonial';
import Contact from './component/Contact';
import "../../helper/BTN/btn.css";
/* 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; */
const Section = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);


  const handleItemClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
  const [showMore, setShowMore] = useState(false);

  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

 /*  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    }); 
  };*/
  return (
    <div>
      <SliderCarousel />
      {showMore && (
        <div>
          <section>
            <NavBar
              handleItemClick={handleItemClick}
              section1Ref={section1Ref}
              section2Ref={section2Ref}
              section3Ref={section3Ref}
              section4Ref={section4Ref}
              section5Ref={section5Ref}
              section6Ref={section6Ref}
              section7Ref={section7Ref}
            />
            <About ref={section1Ref} />
            <Menu ref={section2Ref} />
            <Specials ref={section3Ref} />
            <Events ref={section4Ref} />
            <Gallery ref={section5Ref} />
            <Chefs ref={section6Ref} />
            <Testimonials />
            <Contact ref={section7Ref} />
            <div className='BTN'>
              <button onClick={scrollToTop} className='Scrollup'>
                <svg viewBox="0 0 384 512" className="svgIcon">
                  <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                  ></path>
                </svg>
              </button>
            </div>
          </section>
        </div>
      )}
      <div className='More' style={{display:"flex",justifyContent: "center"}}>
      <button className='ShowMore' onClick={handleSeeMoreClick}>
        {showMore ? 'مشاهده کمتر' : 'مشاهده بیشتر'}
      </button>
      </div>
    </div>
  );
}

export default Section;
