import { Container, Row, Col } from "react-bootstrap";
import stanfordLogo from "../assets/img/stanford-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/github-mark-white.svg';
import contactImg from "../assets/img/grad-pic2.png"


export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={stanfordLogo} alt="Logo" />
          </Col>
          <Col className="align-items-center text-center">
            <p>Get in touch!</p>
            <img src={contactImg} alt=""/>
            <br></br>
            <br></br>
            <a style={{"color": "#ffffff"}} href="mailto:bryantjimenez@stanford.edu">bjimenez@alumni.stanford.edu</a>
            <br/>
          </Col>
          <Col className="text-center text-sm-end">
            <br/>
            <div className="social-icon align-items-center">
              <a href="https://www.linkedin.com/in/bryant-jimenez/"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <div className='social-icon'>
              <a href="https://www.github.com/bryant-jimenez/"><img src={navIcon2} alt="" /></a>
            </div>
            <p style={{"font-size": "10px"}}>Copyright 2024. Created by Bryant Jimenez.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}