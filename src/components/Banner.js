import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/grad-pic.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); // dictates as to which index of which word currently displayed on banner
    const [isDeleting, setIsDeleting] = useState(false); // is word being typed or being deleted
    const toRotate = [ "Software Engineer", "Web Developer", "First Generation"]; // words that are displayed and rotated through in banner
    const [text, setText] = useState(''); // component needs to know what portion of text is showing right now
    const period = 2000; // dictates time passed between each letter being typed out
    const [delta, setDelta] = useState(300); // determines how fast one letter comes after first one is typed

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length; // loopnum always increasing which is why we use % to cycle through
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(70); // determine if deleting, so pace would be  different
        }

        if (!isDeleting && updatedText === fullText) { // if not deleting and updatedText = fullText, start deleting, reset Delta to normal pace
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") { // if text completely deleted, setdeleting to false, move idx to next word to display
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    }

    return (
        <section className="banner" id="aboutme"> 
          <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{'Hello! My name is Bryant Jimenez: '}</h1>
                    <h2><span className="wrap">{text}</span></h2>
                    <br></br>
                    <p className="bannerP">
                        My name is Bryant Jimenez, 
                        a senior studying Computer Science at Stanford University. 
                        With a strong foundation in programming languages and relevant coursework, 
                        I am excited to make a meaningful impact within the field as a First-Generation Low-Income student. 
                        <br></br>
                        <br></br>
                        Throughout my academic journey, I have gained extensive knowledge in various areas, 
                        including web applications, AI, computer and network security, systems, and 
                        design and analysis of algorithms, among others. These courses have equipped me with a strong
                        understanding of fundamental CS concepts and problem-solving techniques.
                    </p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                </Col>
            </Row>
          </Container>
        </section>
    )
}