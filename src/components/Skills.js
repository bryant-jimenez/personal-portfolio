import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import pythonLogo from "../assets/img/python-logo.png";
import nextLogo from "../assets/img/nextjs-logo.png";
import tailwindLogo from "../assets/img/tailwind-logo.png";
import typescriptLogo from "../assets/img/typescript-logo.png";
import cLogo from "../assets/img/c-logo.png"
import cppLogo from "../assets/img/c++.png"
import jsLogo from "../assets/img/JavaScript-logo.png";
import cssLogo from "../assets/img/css-logo.png";
import htmlLogo from "../assets/img/html-logo.png";
import reactLogo from "../assets/img/react-logo.png";
import unixLogo from "../assets/img/terminal-logo.png";
import sqlLogo from "../assets/img/sql-logo.svg";
import swiftLogo from "../assets/img/swiftLogo.svg"
import goLogo from "../assets/img/go-logo.png";
import vueLogo from "../assets/img/vue.png";
import darkspace from "../assets/img/darkspace.jpg"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Programming Languages/Frameworks
                            </p>
                            <Carousel responsive={responsive}  
                                infinite={true} 
                                className="skill-slider"
                                slidesToSlide={1} 
                                containerClass="carouselButtons"
                                centerMode={true}>
                                <div className="item">
                                    <img src={jsLogo} draggable={false} alt=""/>
                                    <h4>JavaScript</h4>
                                </div>
                                <div className="item">
                                    <img src={goLogo} draggable={false} alt=""/>
                                    <h4>GoLang</h4>
                                </div>
                                <div className="item">
                                    <img src={pythonLogo} draggable={false} alt=""/>
                                    <h4>Python</h4>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} draggable={false} alt=""/>
                                    <h4>React</h4>
                                </div>
                                <div className="item">
                                    <img src={cLogo} draggable={false} alt=""/>
                                    <h4>C</h4>
                                </div>
                                <div className="item">
                                    <img src={cppLogo} draggable={false} alt=""/>
                                    <h4>C++</h4>
                                </div>
                                <div className="item">
                                    <img src={swiftLogo} draggable={false} alt=""/>
                                    <h4>Swift</h4>
                                </div>
                                <div className="item">
                                    <img src={typescriptLogo} draggable={false} alt=""/>
                                    <h4>TypeScript</h4>
                                </div>
                                <div className="item">
                                    <img src={cssLogo} draggable={false} alt=""/>
                                    <h4>CSS</h4>
                                </div>
                                <div className="item">
                                    <img src={htmlLogo} draggable={false} alt=""/>
                                    <h4>HTML</h4>
                                </div>
                                <div className="item">
                                    <img src={nextLogo} draggable={false} alt=""/>
                                    <h4>Next.js</h4>
                                </div>
                                <div className="item">
                                    <img src={tailwindLogo} draggable={false} alt=""/>
                                    <h4>TailwindCSS</h4>
                                </div>
                                <div className="item">
                                    <img src={unixLogo} draggable={false} alt=""/>
                                    <h4>Unix</h4>
                                </div>
                                <div className="item">
                                    <img src={sqlLogo} draggable={false} alt=""/>
                                    <h4>SQL</h4>
                                </div>
                                <div className="item">
                                    <img src={vueLogo} draggable={false} alt=""/>
                                    <h4>Vue</h4>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={darkspace} alt=""/>
        </section>
      )
}