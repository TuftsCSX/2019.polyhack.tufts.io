import React from 'react';
import { Nav } from 'react-bootstrap';
import { Text } from 'rebass';
import './navigation.css';


const getNavStyles = page => ({
  info: `Navigation ${page === 'info' ? 'Selected' : null}`,
  about: `Navigation ${page === 'about' ? 'Selected' : null}`,
  faq: `Navigation ${page === 'faq' ? 'Selected' : null}`,
  sponsors: `Navigation ${page === 'sponsors' ? 'Selected' : null}`,
  mentors: `Navigation ${page === 'mentors' ? 'Selected' : null}`
});

export default function Navigation(props) {
  const { page, setPage } = props;
  const navStyles = getNavStyles(page);
  return (
    <Nav className="justify-content-center" style={{ paddingRight: '50px' }}>
      <Nav.Item>
        <Nav.Link eventKey="info" onSelect={key => setPage(key)}><Text className={navStyles.info}>Info</Text></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="about" onSelect={key => setPage(key)}><Text className={navStyles.about}>About Us</Text></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="faq" onSelect={key => setPage(key)}><Text className={navStyles.faq}>FAQ</Text></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="sponsors" onSelect={key => setPage(key)}><Text className={navStyles.sponsors}>Sponsors</Text></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="mentors" onSelect={key => setPage(key)}><Text className={navStyles.mentors}>Mentors</Text></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
