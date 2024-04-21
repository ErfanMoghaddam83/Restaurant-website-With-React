import React from 'react';
import Nav from 'react-bootstrap/Nav';
const NavBar = ({ handleItemClick, section1Ref, section2Ref ,
  section3Ref,section4Ref,section5Ref,section6Ref,section7Ref }) => {
 
  return (


      <Nav fill variant="tabs" sticky="top" defaultActiveKey="/home"  expand="lg" className="bg-body-tertiary" style={{  position:' sticky' , top: '0',
        zIndex: '1000 ',justifyContent:'center',marginTop:'50px'}}>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={() => handleItemClick(section1Ref)}>درباره ما</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={() => handleItemClick(section2Ref)}>منو</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={() => handleItemClick(section3Ref)}>پیشنهاد سرآشپز</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4" onClick={() => handleItemClick(section4Ref)}>رویدادها</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5" onClick={() => handleItemClick(section5Ref)}>گالری</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6" onClick={() => handleItemClick(section6Ref)}>سرآشپز</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-7" onClick={() => handleItemClick(section7Ref)}>ارتباط با ما</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
  