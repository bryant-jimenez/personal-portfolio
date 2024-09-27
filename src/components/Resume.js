import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import resume from "../assets/pdf/BryantJimenez_Resume.pdf"
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png"


export const Resume = () => {

      return (
        <section className="resume" id="resume">
            <img className="background-image-left" src={colorSharp} alt=""/>
            <Container>
                <Row>
                    <Col>
                        <div className="resume-bx">
                            <h2>
                                Resume
                            </h2>
                            <iframe src={resume} width="100%" height="1150px"style={{minHeight: "fit-content",}} id="BryantJimenez_Resume" title="Bryant's Resume"/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""/>
        </section>
      )
}