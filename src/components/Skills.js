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
import bigqueryLogo from "../assets/img/bigquery-logo.png";
import matlabLogo from "../assets/img/matlab-logo.png";
import darkspace from "../assets/img/darkspace.jpg"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
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
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={pythonLogo} alt=""/>
                                    <h4>Python</h4>
                                </div>
                                <div className="item">
                                    <img src={goLogo} alt=""/>
                                    <h4>GoLang</h4>
                                </div>
                                <div className="item">
                                    <img src={cppLogo} alt=""/>
                                    <h4>C++</h4>
                                </div>
                                <div className="item">
                                    <img src={cLogo} alt=""/>
                                    <h4>C</h4>
                                </div>
                                <div className="item">
                                    <img src={swiftLogo} alt=""/>
                                    <h4>Swift</h4>
                                </div>
                                <div className="item">
                                    <img src={jsLogo} alt=""/>
                                    <h4>JavaScript</h4>
                                </div>
                                <div className="item">
                                    <img src={typescriptLogo} alt=""/>
                                    <h4>TypeScript</h4>
                                </div>
                                <div className="item">
                                    <img src={cssLogo} alt=""/>
                                    <h4>CSS</h4>
                                </div>
                                <div className="item">
                                    <img src={htmlLogo} alt=""/>
                                    <h4>HTML</h4>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} alt=""/>
                                    <h4>React</h4>
                                </div>
                                <div className="item">
                                    <img src={nextLogo} alt=""/>
                                    <h4>Next.js</h4>
                                </div>
                                <div className="item">
                                    <img src={tailwindLogo} alt=""/>
                                    <h4>TailwindCSS</h4>
                                </div>
                                <div className="item">
                                    <img src={unixLogo} alt=""/>
                                    <h4>Unix</h4>
                                </div>
                                <div className="item">
                                    <img src={sqlLogo} alt=""/>
                                    <h4>SQL</h4>
                                </div>
                                <div className="item">
                                    <img src={bigqueryLogo} alt=""/>
                                    <h4>Google BigQuery</h4>
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