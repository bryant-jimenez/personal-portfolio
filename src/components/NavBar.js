import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/stanford-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('aboutme');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.title = "Bryant Jimenez"
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#aboutme">
                    <img src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'project' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                    <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/bryant-jimenez/"><img src={navIcon1} alt="" /></a>
                    </div>
                    <div className='social-icon'>
                        <a href="https://www.github.com/bryant-jimenez/"><img src={navIcon2} alt="" /></a>
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}